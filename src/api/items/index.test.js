import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Items } from '.'

const app = () => express(apiRoot, routes)

let items

beforeEach(async () => {
  items = await Items.create({})
})

test('POST /items 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', discription: 'test', unit_price: 'test', user: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.discription).toEqual('test')
  expect(body.unit_price).toEqual('test')
  expect(body.user).toEqual('test')
})

test('GET /items 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /items/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${items.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(items.id)
})

test('GET /items/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /items/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${items.id}`)
    .send({ name: 'test', discription: 'test', unit_price: 'test', user: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(items.id)
  expect(body.name).toEqual('test')
  expect(body.discription).toEqual('test')
  expect(body.unit_price).toEqual('test')
  expect(body.user).toEqual('test')
})

test('PUT /items/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', discription: 'test', unit_price: 'test', user: 'test' })
  expect(status).toBe(404)
})

test('DELETE /items/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${items.id}`)
  expect(status).toBe(204)
})

test('DELETE /items/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
