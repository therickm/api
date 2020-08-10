import { success, notFound } from '../../services/response/'
import { Event } from '.'
import { all } from '../user/controller'
import { notifyUsers } from '../../utils/fcm'
import User from '../user'
import moment from 'moment'

export const create = ({ bodymen: { body } }, res, next) =>
  Event.create(body)
    .then((event) => event.view(true))
    .then(success(res, body, 201))
    .then(res=>{
      User.findById(res.id)
      .then(({followers,church})=>{
        followers.map(follower=>notifyUsers(follower.token,process.env.apiKey,{title:"New Event", body:church +' has scheduled an event'}))
      })
    })
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Event.count(query)
    .then(count => Event.find(query, select, cursor)
      .then((events) => ({
        count,
        rows: events.map((event) => event.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Event.findById(params.id)
    .then(notFound(res))
    .then((event) => event ? event.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Event.findById(params.id)
    .then(notFound(res))
    .then((event) => event ? Object.assign(event, body).save() : null)
    .then((event) => event ? event.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Event.findById(params.id)
    .then(notFound(res))
    .then((event) => event ? event.remove().then(()=>res.json({"message": "Deleted"})) : null)
    .then(success(res, 204))
    .catch(next)

export const followed = ({ params }, res, next) => {
  let c = []
  all().then(res => {
    params.client ? res.filter(i => i.followers && i.followers.length > 0 && i.followers.some(e =>e && e.id === params.client)).map(ch =>c.push(ch.id)) : res.map(ch => c.push(ch.id))
  })
    .then(count => Event.find({})
      .then((events) => {
        return events.filter(item => item.user && c.includes(item.user) && moment(item.date).isAfter(moment(), "day")).map((event) => event.view())
      }
      )
    )
    .then(success(res))
    .catch(next)
}



export const search = ({ params }, res, next) =>
Event.find(
    {
      $or: [
        {
          name: { '$regex': params.q, '$options': 'i' }
        },
        {
          location: { '$regex': params.q, '$options': 'i' }
        },
        {
          description: { '$regex': params.q, '$options': 'i' }
        },
        {
          hashtags: { '$regex': params.q, '$options': 'i' }
        },
        {
          'user.name': { '$regex': params.q, '$options': 'i' }
        },
        {
          'user.church': { '$regex': params.q, '$options': 'i' }
        }
      ]
    }
  )
    .then(notFound(res))
    .then((events) => events.map((event) => event.view()))
    .then(success(res))
    .catch(next)