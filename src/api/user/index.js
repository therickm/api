import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { password as passwordAuth, master, token } from '../../services/passport'
import { index, showMe, show, create, update, updatePassword, destroy, churchSearch, follow, unfollow, following, approve, suspend, getChurchesByStatus } from './controller'
import { schema } from './model'
export User, { schema } from './model'

const router = new Router()
const { email, password, name, picture, role, church, phone, status } = schema.tree

/**
 * @api {get} /users [1b] Retrive all churches
 * @apiName RetrieveUsers
 * @apiGroup Churches
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiUse listParams
 * @apiSuccess {Object[]} churches List of churches.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Admin access only.
 */

router.get('/',
  query(),
  index)
/**
 * @api {get} /users/me Retrieve current user/Church 
 * @apiName RetrieveCurrentUser
 * @apiGroup Churches
 * @apiPermission user
 * @apiSuccess {Object} user User's data.
 */
router.get('/me',
  token({ required: true }),
  showMe)

/**
 * @api {get} /users/by-status/:status [1.b] Retrieve (Approved churched, Pending approval and Suspended churches)
 * @apiName RetrieveUserByStatus
 * @apiGroup Churches
 * @apiPermission public
 * @apiSuccess {Object} churches List of churches according to the specified status ie(approved or suspended).
 */
router.get('/by-status/:status',
  getChurchesByStatus)

/**
 * @api {get} /users/:id Retrieve Church by id
 * @apiName RetrieveUser
 * @apiGroup Churches
 * @apiPermission public
 * @apiSuccess {Object} church Church's data.
 */
router.get('/:id',
  show)

/**
* @api {get} /users/search/:q [1.d] Search approved Churches 
* @apiName Churches/users
* @apiGroup Churches
* @apiPermission public
* @apiSuccess {Object} church Church's data.
* @apiError 404 User not found.
*/
router.get('/search/:q', churchSearch)

/**
* @api {put} /users/follow/:id [3.c] Follow Church
* @apiName followChurch
* @apiGroup Churches
* @apiPermission public
* @apiParam {String} user App user's ID.
* @apiParam {String} user App user's FCM token.
* @apiSuccess {Object} Churches Approved churchrs that match query.
*/
router.put('/follow/:id', follow)


/**
* @api {put} /users/approve/:id [1.f] Approve Church
* @apiName approveChurch
* @apiGroup Churches
* @apiPermission public
* @apiSuccess {Object} User User's data.
* @apiError 404 User not found.
*/
router.put('/approve/:id', approve)


/**
* @api {put} /users/suspend/:id Suspend Church
* @apiName suspendChurch
* @apiGroup Churches
* @apiPermission public
* @apiSuccess {Object} User User's data.
* @apiError 404 User not found.
*/
router.put('/suspend/:id', suspend)



/**
* @api {put} /users/unfollow/:id Unfollow Church 
* @apiName unfollowChurches
* @apiGroup Churches
* @apiPermission public
* @apiParam {object} app_user_details Details about the app user most importantly app user id as (id) and FCM token as (tolen).
* @apiSuccess {Object} user User's data.
* @apiError 404 User not found.
*/
router.put('/unfollow/:id', unfollow)

/**
 * @api {post} /users [1.a] Create(Super Admin & Church)
 * @apiName CreateUser
 * @apiGroup Churches
 * @apiPermission master
 * @apiParam {String} access_token Master access_token.
 * @apiParam {String} email User's email.
 * @apiParam {String{6..}} password User's password.
 * @apiParam {String} [name] User's name.
 * @apiParam {String} [church] Name of Church.
 * @apiParam {String} [picture] User's picture.
 * @apiParam {String=user,admin} [role=user] User's role.
 * @apiSuccess (Success 201) {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Master access only.
 * @apiError 409 Email already registered.
 */
router.post('/',
  master(),
  body({ email, password, name, picture, role, church, phone, status }),
  create)

/**
 * @api {put} /users/:id [1.c] Update Church details
 * @apiName UpdateUser
 * @apiGroup Churches
 * @apiPermission user
 * @apiParam {String} [name] User's name.
 * @apiParam {String} [picture] User's picture.
 * @apiSuccess {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Current user or admin access only.
 * @apiError 404 User not found.
 */
router.put('/:id',
  // token({ required: true }),
  body({ name, picture }),
  update)

/**
 * @api {put} /users/:id/password Update password
 * @apiName UpdatePassword
 * @apiGroup Churches
 * @apiHeader {String} Authorization Basic authorization with email and password.
 * @apiParam {String{6..}} password User's new password.
 * @apiSuccess (Success 201) {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Current user access only.
 * @apiError 404 User not found.
 */
router.put('/:id/password',
  passwordAuth(),
  body({ password }),
  updatePassword)

/**
 * @api {delete} /users/:id [1.e] Delete Church
 * @apiName DeleteUser
 * @apiGroup Churches
 * @apiPermission admin
 * @apiSuccess (Success 200) 200 { "message": "Deleted" }.
 * @apiError 401 Admin access only.
 * @apiError 404 User not found.
 */
router.delete('/:id',
  // token({ required: true, roles: ['admin'] }),
  destroy)  

/**
* @api {get} /users/following/:app_user_id Get Churches Followed by a user
* @apiName ChurchesFollowed
* @apiGroup Churches
* @apiParam {String} app_user_id App user's ID.
* @apiPermission public
* @apiSuccess {Object} churches List of churches followed specified app user  .
*/
router.get('/following/:app_user_id',
  following)

export default router
