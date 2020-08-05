import { success, notFound } from '../../services/response/'
import { Sermon } from '.'
import { all } from '../user/controller'
import { notifyUsers } from '../../utils/fcm'
import User from '../user'

export const create = ({ bodymen: { body } }, res, next) =>
  Sermon.create(body)
    .then((sermon) => sermon.view(true))
    .then(success(res, 201))
    .then(res=>{
      User.findById(res.id)
      .then(({followers,church})=>{
        followers.map(follower=>notifyUsers(follower.token,process.env.apiKey,{title:"New Sermon", body:church +' posted a sermon'}))
      })
    })
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Sermon.count(query)
    .then(count => Sermon.find(query, select, cursor)
      .then((sermons) => ({
        count,
        rows: sermons.map((sermon) => sermon.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Sermon.findById(params.id)
    .then(notFound(res))
    .then((sermon) => sermon ? sermon.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Sermon.findById(params.id)
    .then(notFound(res))
    .then((sermon) => sermon ? Object.assign(sermon, body).save() : null)
    .then((sermon) => sermon ? sermon.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Sermon.findById(params.id)
    .then(notFound(res))
    .then((sermon) => sermon ? sermon.remove().then(()=>res.json({"message": "Deleted"})) : null)
    .then(success(res, 204))
    .catch(next)

export const followed = ({ params }, res, next) => {
  let c = []
  all().then(res => {
    params.client ? res.filter(i => i.followers && i.followers.includes(params.client)).map(ch => c.push(ch.id)) : res.map(ch => c.push(ch.id))
  })
    .then(count => Sermon.find({})
      .then((sermons) => {
        return sermons.filter(item => item.user && c.includes(item.user.id)).map((playlist) => playlist.view())
      }
      )
    )
    .then(success(res))
    .catch(next)
}

export const search = ({ params }, res, next) =>
Sermon.find(
    {
      $or: [
        {
          title: { '$regex': params.q, '$options': 'i' }
        },
        {
          location: { '$regex': params.q, '$options': 'i' }
        },
        {
          hashtags: { '$regex': params.q, '$options': 'i' }
        },
        {
          messages: { '$regex': params.q, '$options': 'i' }
        }        
      ]
    }
  )
    .then(notFound(res))
    .then((sermons) => sermons.map((sermon) => sermon.view()))
    .then(success(res))
    .catch(next)    