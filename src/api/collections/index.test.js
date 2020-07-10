import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Collections } from '.'

const app = () => express(apiRoot, routes)

let collections

beforeEach(async () => {
  collections = await Collections.create({})
})

test('POST /collections 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ ac_name: 'test', ac_number: 'test', bank_name: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.ac_name).toEqual('test')
  expect(body.ac_number).toEqual('test')
  expect(body.bank_name).toEqual('test')
})

test('GET /collections 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /collections/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${collections.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(collections.id)
})

test('GET /collections/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /collections/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${collections.id}`)
    .send({ ac_name: 'test', ac_number: 'test', bank_name: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(collections.id)
  expect(body.ac_name).toEqual('test')
  expect(body.ac_number).toEqual('test')
  expect(body.bank_name).toEqual('test')
})

test('PUT /collections/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ ac_name: 'test', ac_number: 'test', bank_name: 'test' })
  expect(status).toBe(404)
})

test('DELETE /collections/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${collections.id}`)
  expect(status).toBe(204)
})

test('DELETE /collections/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
