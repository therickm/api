import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Livestreams } from '.'

const app = () => express(apiRoot, routes)

let livestreams

beforeEach(async () => {
  livestreams = await Livestreams.create({})
})

test('POST /livestreams 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ url: 'test', user: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.url).toEqual('test')
  expect(body.user).toEqual('test')
})

test('GET /livestreams 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /livestreams/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${livestreams.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(livestreams.id)
})

test('GET /livestreams/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /livestreams/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${livestreams.id}`)
    .send({ url: 'test', user: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(livestreams.id)
  expect(body.url).toEqual('test')
  expect(body.user).toEqual('test')
})

test('PUT /livestreams/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ url: 'test', user: 'test' })
  expect(status).toBe(404)
})

test('DELETE /livestreams/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${livestreams.id}`)
  expect(status).toBe(204)
})

test('DELETE /livestreams/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
