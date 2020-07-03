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
 * @api {get} /users Retrieve users/Churches
 * @apiName RetrieveUsers
 * @apiGroup Churches
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiUse listParams
 * @apiSuccess {Object[]} users List of users.
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
 * @apiParam {String} access_token User access_token.
 * @apiSuccess {Object} user User's data.
 */
router.get('/me',
  token({ required: true }),
  showMe)

/**
 * @api {get} /users/by-status/:status Retrieve Church by status
 * @apiName RetrieveUserByStatus
 * @apiGroup Churches
 * @apiPermission public
 * @apiSuccess {Object} user User's data.
 * @apiError 404 User not found.
 */
router.get('/by-status/:status',
  getChurchesByStatus)

/**
 * @api {get} /users/:id Retrieve user/Church
 * @apiName RetrieveUser
 * @apiGroup Churches
 * @apiPermission public
 * @apiSuccess {Object} user User's data.
 * @apiError 404 User not found.
 */
router.get('/:id',
  show)

/**
* @api {get} /users/:q Search approved Churches 
* @apiName Churches/users
* @apiGroup Churches
* @apiPermission public
* @apiSuccess {Object} user User's data.
* @apiError 404 User not found.
*/
router.get('/search/:q', churchSearch)

/**
* @api {put} /users/follow/:id Follow Church
* @apiName followChurch
* @apiGroup Churches
* @apiPermission public
* @apiParam {String} user App user's ID.
* @apiSuccess {Object} app_user_id User's data.
* @apiError 404 User not found.
*/
router.put('/follow/:id', follow)


/**
* @api {put} /users/approve/:id Approve Church
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
* @apiParam {String} app_user_id App user's ID.
* @apiSuccess {Object} user User's data.
* @apiError 404 User not found.
*/
router.put('/unfollow/:id', unfollow)

/**
 * @api {post} /users Create(Super Admin & Church)
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
 * @api {put} /users/:id Update user/Church
 * @apiName UpdateUser
 * @apiGroup Churches
 * @apiPermission user
 * @apiParam {String} access_token User access_token.
 * @apiParam {String} [name] User's name.
 * @apiParam {String} [picture] User's picture.
 * @apiSuccess {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Current user or admin access only.
 * @apiError 404 User not found.
 */
router.put('/:id',
  token({ required: true }),
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
 * @api {delete} /users/:id Delete user/Church
 * @apiName DeleteUser
 * @apiGroup Churches
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 401 Admin access only.
 * @apiError 404 User not found.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

/**
* @api {put} /users/following/:app_user_id Get Churches Followed
* @apiName ChurchesFollowed
* @apiGroup Churches
* @apiParam {String} app_user_id App user's ID.
* @apiPermission public
* @apiSuccess {Object} user User's data.
* @apiError 404 User not found.
*/
router.get('/following/:app_user_id',
  following)

export default router
