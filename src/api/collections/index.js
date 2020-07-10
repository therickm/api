import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Collections, { schema } from './model'

const router = new Router()
const { ac_name, ac_number, bank_name } = schema.tree

/**
 * @api {post} /collections Create collections
 * @apiName CreateCollections
 * @apiGroup Collections
 * @apiParam ac_name Collections's ac_name.
 * @apiParam ac_number Collections's ac_number.
 * @apiParam bank_name Collections's bank_name.
 * @apiSuccess {Object} collections Collections's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Collections not found.
 */
router.post('/',
  body({ ac_name, ac_number, bank_name }),
  create)

/**
 * @api {get} /collections Retrieve collections
 * @apiName RetrieveCollections
 * @apiGroup Collections
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of collections.
 * @apiSuccess {Object[]} rows List of collections.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /collections/:id Retrieve collections
 * @apiName RetrieveCollections
 * @apiGroup Collections
 * @apiSuccess {Object} collections Collections's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Collections not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /collections/:id Update collections
 * @apiName UpdateCollections
 * @apiGroup Collections
 * @apiParam ac_name Collections's ac_name.
 * @apiParam ac_number Collections's ac_number.
 * @apiParam bank_name Collections's bank_name.
 * @apiSuccess {Object} collections Collections's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Collections not found.
 */
router.put('/:id',
  body({ ac_name, ac_number, bank_name }),
  update)

/**
 * @api {delete} /collections/:id Delete collections
 * @apiName DeleteCollections
 * @apiGroup Collections
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Collections not found.
 */
router.delete('/:id',
  destroy)

export default router
