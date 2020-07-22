import { success, notFound } from '../../services/response/'
import { Quote } from '.'
import { User } from '../user/'
import { all } from '../user/controller';
import moment from 'moment';
import { notifyUsers } from '../../utils/fcm';


export const create = ({ bodymen: { body } }, res, next) =>
  Quote.create(body)
    .then((quote) => quote.view(true))
    .then(success(res, 201))
    .then(res=>{
      User.findById(res.id)
      .then(({followers,church})=>{
        followers.map(follower=>notifyUsers(follower.token,process.env.apiKey,{title:"New Quote", body:church +' shared a new quote'}))
      })
    })
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Quote.count(query)
    .then(count => Quote.find(query, select, cursor)
      .then((quotes) => ({
        count,
        rows: quotes.map((quote) => quote.view())
      }))
    )
    .then(success(res))
    .catch(next)


export const followed = ({ params }, res, next) => {
  let c = []
  all().then(res => {
    params.client ? res.filter(i => i.followers && i.followers.includes(params.client)).map(ch => c.push(ch.id)) : res.map(ch => c.push(ch.id))
  })
    .then(count => Quote.find({})
      .then((quotes) => {
        return quotes.filter(item => item.user && c.includes(item.user.id)).map((quote) => quote.view())
      }
      )
    )
    .then(success(res))
    .catch(next)
}


export const show = ({ params }, res, next) =>
  Quote.findById(params.id)
    .then(notFound(res))
    .then((quote) => quote ? quote.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Quote.findById(params.id)
    .then(notFound(res))
    .then((quote) => quote ? Object.assign(quote, body).save() : null)
    .then((quote) => quote ? quote.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Quote.findById(params.id)
    .then(notFound(res))
    .then((quote) => quote ? quote.remove() : null)
    .then(success(res, 204))
    .catch(next)

export const search = ({ params }, res, next) =>
  Quote.find(
    {
      $or: [
        {
          verse: { '$regex': params.q|| '', '$options': 'i' }
        },
        {
          application: { '$regex': params.q|| '', '$options': 'i' }
        },
        {
          lessons: { '$regex': params.q || '', '$options': 'i' }
        }
      ]
    }
  )
    .then(notFound(res))
    .then((events) => params.d ? events.filter(r=>moment(params.d).isSame(r.date, 'day')).map((event) => event.view()):events.map((event) => event.view()))

    // .then((res)=>params.d && res.)
    .then(success(res))
    // .then(res=>res.filter(r=>moment(params.d).isSame(r.date, 'day')))
    .catch(next)