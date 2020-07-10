import { success, notFound } from '../../services/response/'
import { Items } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Items.create(body)
    .then((items) => items.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Items.count(query)
    .then(count => Items.find(query, select, cursor)
      .then((items) => ({
        count,
        rows: items.map((items) => items.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Items.findById(params.id)
    .then(notFound(res))
    .then((items) => items ? items.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Items.findById(params.id)
    .then(notFound(res))
    .then((items) => items ? Object.assign(items, body).save() : null)
    .then((items) => items ? items.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Items.findById(params.id)
    .then(notFound(res))
    .then((items) => items ? items.remove() : null)
    .then(success(res, 204))
    .catch(next)
