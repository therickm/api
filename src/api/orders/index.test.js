import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Orders } from '.'

const app = () => express(apiRoot, routes)

let orders

beforeEach(async () => {
  orders = await Orders.create({})
})

test('POST /orders 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ item: 'test', quntity: 'test', customer: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.item).toEqual('test')
  expect(body.quntity).toEqual('test')
  expect(body.customer).toEqual('test')
})

test('GET /orders 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /orders/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${orders.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(orders.id)
})

test('GET /orders/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /orders/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${orders.id}`)
    .send({ item: 'test', quntity: 'test', customer: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(orders.id)
  expect(body.item).toEqual('test')
  expect(body.quntity).toEqual('test')
  expect(body.customer).toEqual('test')
})

test('PUT /orders/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ item: 'test', quntity: 'test', customer: 'test' })
  expect(status).toBe(404)
})

test('DELETE /orders/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${orders.id}`)
  expect(status).toBe(204)
})

test('DELETE /orders/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
