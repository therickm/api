import { success, notFound } from '../../services/response/'
import { User } from '.'
import { sign } from '../../services/jwt'

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  User.count(query)
    .then(count => User.find(query, select, cursor)
      .then(users => ({
        rows: users.map((user) => user.view()),
        count
      }))
    )
    .then(success(res))
    .catch(next)

export const followed = () => {
  // Helper(index,)
}

export const all = () =>
  User.find({}, 'id followers')


export const churchSearch = ({ params }, res, next) =>
  User.find(
    {
      $or: [
        {
          church: { '$regex': params.q, '$options': 'i' }
        },
        {
          name: { '$regex': params.q, '$options': 'i' }
        }
      ]
    }
  )
    .then(notFound(res))
    .then((users) => users.map((user) => user.view()))
    .then(res => res.filter(c => c.status === 'approved'))
    .then(success(res))
    .catch(next)

export const getChurchesByStatus = ({ params }, res, next) =>
  User.find(
    {
      $or: [
        {
          status: { '$regex': params.status, '$options': 'i' }
        }
      ]
    }
  )
    .then(notFound(res))
    .then((users) => users.map((user) => user.view()))
    .then(success(res))
    .catch(next)


export const follow = (req, res, next) => {
  User.findById(req.params.id === 'me' ? user.id : req.params.id)
    .then(notFound(res))
    .then((user) => user ? Object.assign(user, { followers: [...user.followers, { id: req.body.app_user_id, token: req.body.app_user_token }] }).save() : null)
    .then((user) => user ? user.view(true) : null)
    .then(success(res))
    .catch(next)
}
export const unfollow = (req, res, next) => {
  User.findById(req.params.id === 'me' ? user.id : req.params.id)
    .then(notFound(res))
    .then((user) => {
      if (user) {
        let newArray = user.followers
        var index = newArray.indexOf(req.body.app_user_id);
        if (index !== -1) newArray.splice(index, 1)
        return Object.assign(user, { followers: newArray }).save()
      } else {
        return null
      }

    })
    .then((user) => user ? user.view(true) : null)
    .then(success(res))
    .catch(next)
}
export const show = ({ params }, res, next) =>
  User.findById(params.id)
    .then(notFound(res))
    .then((user) => user ? user.view() : null)
    .then(success(res))
    .catch(next)

export const showMe = ({ user }, res) =>
  res.json(user.view(true))

export const create = ({ bodymen: { body } }, res, next) =>
  User.create(body)
    .then(user => {
      sign(user.id)
        .then((token) => ({ token, user: user.view(true) }))
        .then(success(res, 201))
    })
    .catch((err) => {
      /* istanbul ignore else */
      if (err.name === 'MongoError' && err.code === 11000) {
        res.status(409).json({
          valid: false,
          param: 'email',
          message: 'email already registered'
        })
      } else {
        next(err)
      }
    })

export const update = ({ bodymen: { body }, params, user }, res, next) =>
  User.findById(params.id === 'me' ? user.id : params.id)
    .then(notFound(res))
    .then((result) => {
      if (!result) return null
      const isAdmin = user.role === 'admin'
      const isSelfUpdate = user.id === result.id
      if (!isSelfUpdate && !isAdmin) {
        res.status(401).json({
          valid: false,
          message: 'You can\'t change other user\'s data'
        })
        return null
      }
      return result
    })
    .then((user) => user ? Object.assign(user, body).save() : null)
    .then((user) => user ? user.view(true) : null)
    .then(success(res))
    .catch(next)

export const updatePassword = ({ bodymen: { body }, params, user }, res, next) =>
  User.findById(params.id === 'me' ? user.id : params.id)
    .then(notFound(res))
    .then((result) => {
      if (!result) return null
      const isSelfUpdate = user.id === result.id
      if (!isSelfUpdate) {
        res.status(401).json({
          valid: false,
          param: 'password',
          message: 'You can\'t change other user\'s password'
        })
        return null
      }
      return result
    })
    .then((user) => user ? user.set({ password: body.password }).save() : null)
    .then((user) => user ? user.view(true) : null)
    .then(success(res))
    .catch(next)

export const approve = ({ params, user }, res, next) =>
  User.findById(params.id === 'me' ? user.id : params.id)
    .then(notFound(res))
    .then((user) => user ? user.set({ status: 'approved' }).save() : null)
    .then((user) => user ? user.view(true) : null)
    .then(success(res))
    .catch(next)

export const suspend = ({ params, user }, res, next) =>
  User.findById(params.id === 'me' ? user.id : params.id)
    .then(notFound(res))
    .then((user) => user ? user.set({ status: 'suspended' }).save() : null)
    .then((user) => user ? user.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  User.findById(params.id)
    .then(notFound(res))
    .then((user) => user ? user.remove().then(() => res.json({ "message": "Deleted" })) : null)
    .then(success(res, 204))
    .catch(next)

export const following = ({ params }, res, next) =>
  all()
    .then(res => res.filter(i => i.followers && i.followers.includes(params.app_user_id && i.status === 'approved')).map(ch => c.push(ch.id)))
