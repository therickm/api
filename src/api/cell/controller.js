import { success, notFound } from '../../services/response/'
import { Cell } from '.'
import { all } from '../user/controller'

export const create = ({ bodymen: { body } }, res, next) =>
  Cell.create(body)
    .then((cell) => cell.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Cell.count(query)
    .then(count => Cell.find(query, select, cursor)
      .then((cells) => ({
        count,
        rows: cells.map((cell) => cell.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Cell.findById(params.id)
    .then(notFound(res))
    .then((cell) => cell ? cell.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Cell.findById(params.id)
    .then(notFound(res))
    .then((cell) => cell ? Object.assign(cell, body).save() : null)
    .then((cell) => cell ? cell.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Cell.findById(params.id)
    .then(notFound(res))
    .then((cell) => cell ? cell.remove() : null)
    .then(success(res, 204))
    .catch(next)

export const followed = ({ params }, res, next) => {
  let c = []
  all().then(res => {
    params.client ? res.filter(i => i.followers && i.followers.includes(params.client)).map(ch => c.push(ch.id)) : res.map(ch => c.push(ch.id))
  })
    .then(count => Cell.find({})
      .then((cells) => {
        return cells.filter(item => item.user && c.includes(item.user.id)).map((cell) => cell.view())
      }
      )
    )
    .then(success(res))
    .catch(next)
}

export const search = ({ params }, res, next) =>
Cell.find(
    {
      $or: [
        {
          name: { '$regex': params.q, '$options': 'i' }
        },
        {
          leader: { '$regex': params.q, '$options': 'i' }
        },
        {
          description: { '$regex': params.q, '$options': 'i' }
        }
      ]
    }
  )
    .then(notFound(res))
    .then((cells) => cells.map((cell) => cell.view()))
    .then(success(res))
    .catch(next)    