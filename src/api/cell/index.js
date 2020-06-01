import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Cell, { schema } from './model'

const router = new Router()
const { name, leader, phone, pacInput, description, user } = schema.tree

/**
 * @api {post} /cells Create cell
 * @apiName CreateCell
 * @apiGroup Cell
 * @apiParam name Cell's name.
 * @apiParam leader Cell's leader.
 * @apiParam phone Cell's phone.
 * @apiParam pacInput Cell's pacInput.
 * @apiParam description Cell's description.
 * @apiParam user Cell's user.
 * @apiSuccess {Object} cell Cell's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cell not found.
 */
router.post('/',
  body({ name, leader, phone, pacInput, description, user }),
  create)

/**
 * @api {get} /cells Retrieve cells
 * @apiName RetrieveCells
 * @apiGroup Cell
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of cells.
 * @apiSuccess {Object[]} rows List of cells.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /cells/:id Retrieve cell
 * @apiName RetrieveCell
 * @apiGroup Cell
 * @apiSuccess {Object} cell Cell's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cell not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /cells/:id Update cell
 * @apiName UpdateCell
 * @apiGroup Cell
 * @apiParam name Cell's name.
 * @apiParam leader Cell's leader.
 * @apiParam phone Cell's phone.
 * @apiParam pacInput Cell's pacInput.
 * @apiParam description Cell's description.
 * @apiParam user Cell's user.
 * @apiSuccess {Object} cell Cell's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cell not found.
 */
router.put('/:id',
  body({ name, leader, phone, pacInput, description, user }),
  update)

/**
 * @api {delete} /cells/:id Delete cell
 * @apiName DeleteCell
 * @apiGroup Cell
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Cell not found.
 */
router.delete('/:id',
  destroy)

export default router
