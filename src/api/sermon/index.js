import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Sermon, { schema } from './model'

const router = new Router()
const { title, location, time, date, hashtags, customFile, messages, user } = schema.tree

/**
 * @api {post} /sermons Create sermon
 * @apiName CreateSermon
 * @apiGroup Sermon
 * @apiParam title Sermon's title.
 * @apiParam location Sermon's location.
 * @apiParam time Sermon's time.
 * @apiParam date Sermon's date.
 * @apiParam hashtags Sermon's hashtags.
 * @apiParam customFile Sermon's customFile.
 * @apiParam messages Sermon's messages.
 * @apiParam user Sermon's user.
 * @apiSuccess {Object} sermon Sermon's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sermon not found.
 */
router.post('/',
  body({ title, location, time, date, hashtags, customFile, messages, user }),
  create)

/**
 * @api {get} /sermons Retrieve sermons
 * @apiName RetrieveSermons
 * @apiGroup Sermon
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of sermons.
 * @apiSuccess {Object[]} rows List of sermons.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /sermons/:id Retrieve sermon
 * @apiName RetrieveSermon
 * @apiGroup Sermon
 * @apiSuccess {Object} sermon Sermon's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sermon not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /sermons/:id Update sermon
 * @apiName UpdateSermon
 * @apiGroup Sermon
 * @apiParam title Sermon's title.
 * @apiParam location Sermon's location.
 * @apiParam time Sermon's time.
 * @apiParam date Sermon's date.
 * @apiParam hashtags Sermon's hashtags.
 * @apiParam customFile Sermon's customFile.
 * @apiParam messages Sermon's messages.
 * @apiParam user Sermon's user.
 * @apiSuccess {Object} sermon Sermon's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Sermon not found.
 */
router.put('/:id',
  body({ title, location, time, date, hashtags, customFile, messages, user }),
  update)

/**
 * @api {delete} /sermons/:id Delete sermon
 * @apiName DeleteSermon
 * @apiGroup Sermon
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Sermon not found.
 */
router.delete('/:id',
  destroy)

export default router
