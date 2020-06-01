import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Sermon } from '.'

const app = () => express(apiRoot, routes)

let sermon

beforeEach(async () => {
  sermon = await Sermon.create({})
})

test('POST /sermons 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ title: 'test', location: 'test', time: 'test', date: 'test', hashtags: 'test', customFile: 'test', messages: 'test', user: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.title).toEqual('test')
  expect(body.location).toEqual('test')
  expect(body.time).toEqual('test')
  expect(body.date).toEqual('test')
  expect(body.hashtags).toEqual('test')
  expect(body.customFile).toEqual('test')
  expect(body.messages).toEqual('test')
  expect(body.user).toEqual('test')
})

test('GET /sermons 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /sermons/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${sermon.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(sermon.id)
})

test('GET /sermons/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /sermons/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${sermon.id}`)
    .send({ title: 'test', location: 'test', time: 'test', date: 'test', hashtags: 'test', customFile: 'test', messages: 'test', user: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(sermon.id)
  expect(body.title).toEqual('test')
  expect(body.location).toEqual('test')
  expect(body.time).toEqual('test')
  expect(body.date).toEqual('test')
  expect(body.hashtags).toEqual('test')
  expect(body.customFile).toEqual('test')
  expect(body.messages).toEqual('test')
  expect(body.user).toEqual('test')
})

test('PUT /sermons/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ title: 'test', location: 'test', time: 'test', date: 'test', hashtags: 'test', customFile: 'test', messages: 'test', user: 'test' })
  expect(status).toBe(404)
})

test('DELETE /sermons/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${sermon.id}`)
  expect(status).toBe(204)
})

test('DELETE /sermons/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
