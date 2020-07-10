import { success, notFound } from '../../services/response/'
import { Livestreams } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Livestreams.create(body)
    .then((livestreams) => livestreams.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Livestreams.count(query)
    .then(count => Livestreams.find(query, select, cursor)
      .then((livestreams) => ({
        count,
        rows: livestreams.map((livestreams) => livestreams.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Livestreams.findById(params.id)
    .then(notFound(res))
    .then((livestreams) => livestreams ? livestreams.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Livestreams.findById(params.id)
    .then(notFound(res))
    .then((livestreams) => livestreams ? Object.assign(livestreams, body).save() : null)
    .then((livestreams) => livestreams ? livestreams.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Livestreams.findById(params.id)
    .then(notFound(res))
    .then((livestreams) => livestreams ? livestreams.remove() : null)
    .then(success(res, 204))
    .catch(next)
