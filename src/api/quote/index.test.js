import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Quote } from '.'

const app = () => express(apiRoot, routes)

let quote

beforeEach(async () => {
  quote = await Quote.create({})
})

test('POST /quotes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ verse: 'test', application: 'test', lessons: 'test', date: 'test', user: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.verse).toEqual('test')
  expect(body.application).toEqual('test')
  expect(body.lessons).toEqual('test')
  expect(body.date).toEqual('test')
  expect(body.user).toEqual('test')
})

test('GET /quotes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /quotes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${quote.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(quote.id)
})

test('GET /quotes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /quotes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${quote.id}`)
    .send({ verse: 'test', application: 'test', lessons: 'test', date: 'test', user: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(quote.id)
  expect(body.verse).toEqual('test')
  expect(body.application).toEqual('test')
  expect(body.lessons).toEqual('test')
  expect(body.date).toEqual('test')
  expect(body.user).toEqual('test')
})

test('PUT /quotes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ verse: 'test', application: 'test', lessons: 'test', date: 'test', user: 'test' })
  expect(status).toBe(404)
})

test('DELETE /quotes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${quote.id}`)
  expect(status).toBe(204)
})

test('DELETE /quotes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
