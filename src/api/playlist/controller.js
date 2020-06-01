import { success, notFound } from '../../services/response/'
import { Playlist } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Playlist.create(body)
    .then((playlist) => playlist.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Playlist.count(query)
    .then(count => Playlist.find(query, select, cursor)
      .then((playlists) => ({
        count,
        rows: playlists.map((playlist) => playlist.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Playlist.findById(params.id)
    .then(notFound(res))
    .then((playlist) => playlist ? playlist.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Playlist.findById(params.id)
    .then(notFound(res))
    .then((playlist) => playlist ? Object.assign(playlist, body).save() : null)
    .then((playlist) => playlist ? playlist.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Playlist.findById(params.id)
    .then(notFound(res))
    .then((playlist) => playlist ? playlist.remove() : null)
    .then(success(res, 204))
    .catch(next)
