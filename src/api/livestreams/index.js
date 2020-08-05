import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Livestreams, { schema } from './model'

const router = new Router()
const { url, user } = schema.tree

/**
 * @api {post} /livestreams Create livestreams
 * @apiName CreateLivestreams
 * @apiGroup Livestreams
 * @apiParam url Livestreams's url.
 * @apiParam user Livestreams's user.
 * @apiSuccess {Object} livestreams Livestreams's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Livestreams not found.
 */
router.post('/',
  body({ url, user }),
  create)

/**
 * @api {get} /livestreams Retrieve livestreams
 * @apiName RetrieveLivestreams
 * @apiGroup Livestreams
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of livestreams.
 * @apiSuccess {Object[]} rows List of livestreams.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /livestreams/:id Retrieve livestreams
 * @apiName RetrieveLivestreams
 * @apiGroup Livestreams
 * @apiSuccess {Object} livestreams Livestreams's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Livestreams not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /livestreams/:id Update livestreams
 * @apiName UpdateLivestreams
 * @apiGroup Livestreams
 * @apiParam url Livestreams's url.
 * @apiParam user Livestreams's user.
 * @apiSuccess {Object} livestreams Livestreams's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Livestreams not found.
 */
router.put('/:id',
  body({ url, user }),
  update)

/**
 * @api {delete} /livestreams/:id Delete livestreams
 * @apiName DeleteLivestreams
 * @apiGroup Livestreams
 * @apiSuccess (Success 200) 200 { "message": "Deleted" }.
 * @apiError 404 Livestreams not found.
 */
router.delete('/:id',
  destroy)

export default router
