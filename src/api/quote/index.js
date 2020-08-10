import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy, followed, search } from './controller'
import { schema } from './model'
export Quote, { schema } from './model'

const router = new Router()
const { verse, application, lessons, date, user } = schema.tree

/**
 * @api {post} /quotes Create quote
 * @apiName CreateQuote
 * @apiGroup Quote
 * @apiParam verse Quote's verse.
 * @apiParam application Quote's application.
 * @apiParam lessons Quote's lessons.
 * @apiParam date Quote's date.
 * @apiParam user Quote's creater (An object containing information about the creater with id as required, this is for search and retrival reasons).
 * @apiSuccess {Object} quote Quote's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quote not found.
 */
router.post('/',
  body({ verse, application, lessons, date, user }),
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
 * @apiParam quote The actual quote.
 * @apiParam lessons Quote's lessons.
 * @apiParam date Quote's date.
 * @apiParam user Quote's user.
 * @apiSuccess {Object} quote Quote's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quote not found.
 */
router.put('/:id',
  body({ verse, application, lessons, date, user }),
  update)

/**
 * @api {delete} /quotes/:id Delete quote
 * @apiName DeleteQuote
 * @apiGroup Quote
 * @apiSuccess (Success 200) 200 { "message": "Deleted" }.
 * @apiError 404 Quote not found.
 */
router.delete('/:id',
  destroy)

/**
* @api {get} Quotes/followed/:client Quotes From Churches Followed
* @apiName ChurchesFollowed
* @apiGroup Quote
* @apiSuccess (Success 204) 204 List of quotes from churches followed by a user.
* @apiError 404 Quote not found.
*/
router.get('/followed/:client',
  query(),
  followed)
  /**
* @api {get} Quotes/followed/:client/:date Quotes From Churches Followed by date
* @apiName ChurchesFollowedDate
* @apiGroup Quote
* @apiSuccess (Success 204) 204 List of quotes from churches followed by a user.
* @apiError 404 Quote not found.
*/
router.get('/followed/:client/:date',
query(),
followed)

  /**
 * @api {get} /quotes/search/:q/:d Search By Query And Date
 * @apiName SearchByQueryAndDate
 * @apiGroup Quote
 * @apiSuccess {Object} event Quote's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quote not found.
 */
router.get('/search/:q/:d',
search)

 /**
 * @api {get} /quotes/search//:d Search BY Date
 * @apiName SearchBYDate
 * @apiGroup Quote
 * @apiSuccess {Object} event Quote's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quote not found.
 */
router.get('/search//:d',
search)

  /**
 * @api {get} /quotes/search/:q Search BY Query
 * @apiName SearchBYQuery
 * @apiGroup Quote
 * @apiSuccess {Object} event Quote's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quote not found.
 */
router.get('/search/:q',
search)


export default router
