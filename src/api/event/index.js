import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Event, { schema } from './model'

const router = new Router()
const { name, location, time, date, hashtags, customFile, description, user } = schema.tree

/**
 * @api {post} /events Create event
 * @apiName CreateEvent
 * @apiGroup Event
 * @apiParam name Event's name.
 * @apiParam location Event's location.
 * @apiParam time Event's time.
 * @apiParam date Event's date.
 * @apiParam hashtags Event's hashtags.
 * @apiParam customFile Event's customFile.
 * @apiParam description Event's description.
 * @apiParam user Event's user.
 * @apiSuccess {Object} event Event's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Event not found.
 */
router.post('/',
  body({ name, location, time, date, hashtags, customFile, description, user }),
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
 * @api {put} /events/:id Update event
 * @apiName UpdateEvent
 * @apiGroup Event
 * @apiParam name Event's name.
 * @apiParam location Event's location.
 * @apiParam time Event's time.
 * @apiParam date Event's date.
 * @apiParam hashtags Event's hashtags.
 * @apiParam customFile Event's customFile.
 * @apiParam description Event's description.
 * @apiParam user Event's user.
 * @apiSuccess {Object} event Event's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Event not found.
 */
router.put('/:id',
  body({ name, location, time, date, hashtags, customFile, description, user }),
  update)

/**
 * @api {delete} /events/:id Delete event
 * @apiName DeleteEvent
 * @apiGroup Event
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Event not found.
 */
router.delete('/:id',
  destroy)

export default router
