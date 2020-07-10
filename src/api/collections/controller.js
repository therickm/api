import { success, notFound } from '../../services/response/'
import { Collections } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Collections.create(body)
    .then((collections) => collections.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Collections.count(query)
    .then(count => Collections.find(query, select, cursor)
      .then((collections) => ({
        count,
        rows: collections.map((collections) => collections.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Collections.findById(params.id)
    .then(notFound(res))
    .then((collections) => collections ? collections.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Collections.findById(params.id)
    .then(notFound(res))
    .then((collections) => collections ? Object.assign(collections, body).save() : null)
    .then((collections) => collections ? collections.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Collections.findById(params.id)
    .then(notFound(res))
    .then((collections) => collections ? collections.remove() : null)
    .then(success(res, 204))
    .catch(next)
