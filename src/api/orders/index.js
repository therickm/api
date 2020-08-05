import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Orders, { schema } from './model'

const router = new Router()
const { item, quntity, customer } = schema.tree

/**
 * @api {post} /orders Create orders
 * @apiName CreateOrders
 * @apiGroup Orders
 * @apiParam item Orders's item.
 * @apiParam quntity Orders's quntity.
 * @apiParam customer Orders's customer.
 * @apiSuccess {Object} orders Orders's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Orders not found.
 */
router.post('/',
  body({ item, quntity, customer }),
  create)

/**
 * @api {get} /orders Retrieve orders
 * @apiName RetrieveOrders
 * @apiGroup Orders
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of orders.
 * @apiSuccess {Object[]} rows List of orders.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /orders/:id Retrieve orders
 * @apiName RetrieveOrders
 * @apiGroup Orders
 * @apiSuccess {Object} orders Orders's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Orders not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /orders/:id Update orders
 * @apiName UpdateOrders
 * @apiGroup Orders
 * @apiParam item Orders's item.
 * @apiParam quntity Orders's quntity.
 * @apiParam customer Orders's customer.
 * @apiSuccess {Object} orders Orders's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Orders not found.
 */
router.put('/:id',
  body({ item, quntity, customer }),
  update)

/**
 * @api {delete} /orders/:id Delete orders
 * @apiName DeleteOrders
 * @apiGroup Orders
 * @apiSuccess (Success 200) 200 { "message": "Deleted" }.
 * @apiError 404 Orders not found.
 */
router.delete('/:id',
  destroy)

export default router
