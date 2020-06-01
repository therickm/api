import { success, notFound } from '../../services/response/'
import { Sermon } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Sermon.create(body)
    .then((sermon) => sermon.view(true))
    .then(success(res, 201))
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
    .then((sermon) => sermon ? sermon.remove() : null)
    .then(success(res, 204))
    .catch(next)
