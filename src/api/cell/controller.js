import { success, notFound } from '../../services/response/'
import { Cell } from '.'

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
