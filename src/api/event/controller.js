import { success, notFound } from '../../services/response/'
import { Event } from '.'
import { all } from '../user/controller'

export const create = ({ bodymen: { body } }, res, next) =>
  Event.create(body)
    .then((event) => event.view(true))
    .then(success(res, body, 201))
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
    .then((event) => event ? event.remove() : null)
    .then(success(res, 204))
    .catch(next)

export const followed = ({ params }, res, next) => {
  let c = []
  all().then(res => {
    params.client ? res.filter(i => i.followers && i.followers.includes(params.client)).map(ch => c.push(ch.id)) : res.map(ch => c.push(ch.id))
  })
    .then(count => Event.find({})
      .then((events) => {
        return events.filter(item => item.user && c.includes(item.user.id)).map((event) => event.view())
      }
      )
    )
    .then(success(res))
    .catch(next)
}
