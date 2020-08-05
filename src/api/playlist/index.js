import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy, followed, search } from './controller'
import { schema } from './model'
export Playlist, { schema } from './model'

const router = new Router()
const { date, songs, user } = schema.tree

/**
 * @api {post} /playlists Create playlist
 * @apiName CreatePlaylist
 * @apiGroup Playlist
 * @apiParam date Playlist's date.
 * @apiParam songs Playlist's songs.
 * @apiParam user Playlist's creater (An object containing information about the creater with id as required, this is for search and retrival reasons).
 * @apiSuccess {Object} playlist Playlist's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Playlist not found.
 */
router.post('/',
  body({ date, songs, user }),
  create)

/**
 * @api {get} /playlists Retrieve playlists
 * @apiName RetrievePlaylists
 * @apiGroup Playlist
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of playlists.
 * @apiSuccess {Object[]} rows List of playlists.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /playlists/:id Retrieve playlist
 * @apiName RetrievePlaylist
 * @apiGroup Playlist
 * @apiSuccess {Object} playlist Playlist's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Playlist not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /playlists/:id Update playlist
 * @apiName UpdatePlaylist
 * @apiGroup Playlist
 * @apiParam date Playlist's date.
 * @apiParam songs Playlist's songs.
 * @apiParam user Playlist's user.
 * @apiSuccess {Object} playlist Playlist's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Playlist not found.
 */
router.put('/:id',
  body({ date, songs, user }),
  update)

/**
 * @api {delete} /playlists/:id Delete playlist
 * @apiName DeletePlaylist
 * @apiGroup Playlist
 * @apiSuccess (Success 200) 200 { "message": "Deleted" }.
 * @apiError 404 Playlist not found.
 */
router.delete('/:id',
  destroy)

/**
* @api {get} /followed/:client Playlists From Churches Followed
* @apiName Churches Followed
* @apiGroup Playlist
* @apiSuccess (Success 204) 204 List of playlists from churches followed by a user.
* @apiError 404 Playlist not found.
*/
router.get('/followed/:client',
  query(),
  followed)


  /**
 * @api {get} /playlist/search/:q/:d Playlist search
 * @apiName RetrieveSomePlaylists
 * @apiGroup Playlist
 * @apiSuccess {Object} playlist Playlist's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Playlist not found.
 */
router.get('/search/:q',
search)


export default router
