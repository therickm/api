import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Quote, { schema } from './model'

const router = new Router()
const { verse, application, lessons, date } = schema.tree

/**
 * @api {post} /quotes Create quote
 * @apiName CreateQuote
 * @apiGroup Quote
 * @apiParam verse Quote's verse.
 * @apiParam application Quote's application.
 * @apiParam lessons Quote's lessons.
 * @apiParam date Quote's date.
 * @apiSuccess {Object} quote Quote's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quote not found.
 */
router.post('/',
  body({ verse, application, lessons, date }),
  create)

/**
 * @api {get} /quotes Retrieve quotes
 * @apiName RetrieveQuotes
 * @apiGroup Quote
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of quotes.
 * @apiSuccess {Object[]} rows List of quotes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /quotes/:id Retrieve quote
 * @apiName RetrieveQuote
 * @apiGroup Quote
 * @apiSuccess {Object} quote Quote's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quote not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /quotes/:id Update quote
 * @apiName UpdateQuote
 * @apiGroup Quote
 * @apiParam verse Quote's verse.
 * @apiParam application Quote's application.
 * @apiParam lessons Quote's lessons.
 * @apiParam date Quote's date.
 * @apiSuccess {Object} quote Quote's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quote not found.
 */
router.put('/:id',
  body({ verse, application, lessons, date }),
  update)

/**
 * @api {delete} /quotes/:id Delete quote
 * @apiName DeleteQuote
 * @apiGroup Quote
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Quote not found.
 */
router.delete('/:id',
  destroy)

export default router
