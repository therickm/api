import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy, followed, search } from './controller'
import { schema } from './model'
export Event, { schema } from './model'

const router = new Router()
const { name, location, time, date, hashtags, image, description, user } = schema.tree

/**
 * @api {post} /events Create event
 * @apiName CreateEvent
 * @apiGroup Event
 * @apiParam name Event's name.
 * @apiParam location Event's location.
 * @apiParam time Event's time.
 * @apiParam date Event's date.
 * @apiParam hashtags Event's hashtags.
 * @apiParam image Event's image.
 * @apiParam description Event's description.
 * @apiParam user Event's creater (An object containing information about the creater with id as required, this is for search and retrival reasons).
 * @apiSuccess {Object} event Event's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Event not found.
 */
router.post('/',
  body({ name, location, time, date, hashtags, image, description, user }),
  create)

/**
 * @api {get} /events Retrieve events
 * @apiName RetrieveEvents
 * @apiGroup Event
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of events.
 * @apiSuccess {Object[]} rows List of events.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /events/:id Retrieve event
 * @apiName RetrieveEvent
 * @apiGroup Event
 * @apiSuccess {Object} event Event's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Event not found.
 */
router.get('/:id',
  show)


  /**
 * @api {get} /events/search/:q Event search
 * @apiName RetrieveSomeEvent
 * @apiGroup Event
 * @apiSuccess {Object} event Event's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Event not found.
 */
router.get('/search/:q',
search)


/**
 * @api {put} /events/:id Update event
 * @apiName UpdateEvent
 * @apiGroup Event
 * @apiParam name Event's name.
 * @apiParam location Event's location.
 * @apiParam time Event's time.
 * @apiParam date Event's date.
 * @apiParam hashtags Event's hashtags.
 * @apiParam image Event's image.
 * @apiParam description Event's description.
 * @apiParam user Event's user.
 * @apiSuccess {Object} event Event's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Event not found.
 */
router.put('/:id',
  body({ name, location, time, date, hashtags, image, description, user }),
  update)

/**
 * @api {delete} /events/:id Delete event
 * @apiName DeleteEvent
 * @apiGroup Event
* @apiSuccess (Success 200) 200 { "message": "Deleted" }.
 * @apiError 404 Event not found.
 */
router.delete('/:id',
  destroy)

/**
* @api {get} /followed/:client Events From Churches Followed
* @apiName Churches Followed
* @apiGroup Event
* @apiSuccess (Success 204) 204 List of events from churches followed by a user.
* @apiError 404 Event not found.
*/
router.get('/followed/:client',
  query(),
  followed)

export default router
