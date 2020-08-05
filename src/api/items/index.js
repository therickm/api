import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Items, { schema } from './model'

const router = new Router()
const { name, discription, unit_price, user } = schema.tree

/**
 * @api {post} /items Create items
 * @apiName CreateItems
 * @apiGroup Items
 * @apiParam name Items's name.
 * @apiParam discription Items's discription.
 * @apiParam unit_price Items's unit_price.
 * @apiParam user Items's user.
 * @apiSuccess {Object} items Items's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Items not found.
 */
router.post('/',
  body({ name, discription, unit_price, user }),
  create)

/**
 * @api {get} /items Retrieve items
 * @apiName RetrieveItems
 * @apiGroup Items
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of items.
 * @apiSuccess {Object[]} rows List of items.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /items/:id Retrieve items
 * @apiName RetrieveItems
 * @apiGroup Items
 * @apiSuccess {Object} items Items's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Items not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /items/:id Update items
 * @apiName UpdateItems
 * @apiGroup Items
 * @apiParam name Items's name.
 * @apiParam discription Items's discription.
 * @apiParam unit_price Items's unit_price.
 * @apiParam user Items's user.
 * @apiSuccess {Object} items Items's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Items not found.
 */
router.put('/:id',
  body({ name, discription, unit_price, user }),
  update)

/**
 * @api {delete} /items/:id Delete items
 * @apiName DeleteItems
 * @apiGroup Items
 * @apiSuccess (Success 200) 200 { "message": "Deleted" }.
 * @apiError 404 Items not found.
 */
router.delete('/:id',
  destroy)

export default router
