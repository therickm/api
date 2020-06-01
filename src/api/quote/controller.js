import { success, notFound } from '../../services/response/'
import { Quote } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Quote.create(body)
    .then((quote) => quote.view(true))
    .then(success(res, 201))
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
