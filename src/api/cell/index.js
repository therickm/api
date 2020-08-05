import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy, followed,search } from './controller'
import { schema } from './model'
export Cell, { schema } from './model'

const router = new Router()
const { name, leader, phone, location, description, user,image } = schema.tree

/**
 * @api {post} /cells Create cell
 * @apiName CreateCell
 * @apiGroup Cell
 * @apiParam name Cell's name.
 * @apiParam leader Cell's leader.
 * @apiParam phone Cell's phone.
 * @apiParam image Cell's image.
 * @apiParam location Cell's location.
 * @apiParam description Cell's description.
 * @apiParam user Cell's user.
 * @apiSuccess {Object} cell Cell's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cell not found.
 */
router.post('/',
  body({ name, leader, phone, location, description, user,image }),
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
 * @apiParam location Cell's location.
 * @apiParam description Cell's description.
 * @apiParam user Cell's user.
 * @apiParam image Cell's Image.
 * @apiSuccess {Object} cell Cell's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cell not found.
 */
router.put('/:id',
  body({ name, leader, phone, location, description, user,image }),
  update)

/**
 * @api {delete} /cells/:id Delete cell
 * @apiName DeleteCell
 * @apiGroup Cell
 * @apiSuccess (Success 200) 200 { "message": "Deleted" }.
 * @apiError 404 Cell not found.
 */
router.delete('/:id',
  destroy)

/**
* @api {get} /followed/:client Cells From Churches Followed
* @apiName Churches Followed
* @apiGroup Cell
* @apiSuccess {Object} cell Cell's data.
* @apiError 404 Cell not found.
*/

router.get('/followed/:client',
  query(),
  followed)

    /**
 * @api {get} /cells/search/:q Cells search
 * @apiName RetrieveSomeCells
 * @apiGroup Cell
 * @apiSuccess {Object} cell Cell's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cell not found.
 */
router.get('/search/:q',
search)


export default router
