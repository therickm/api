import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Cell } from '.'

const app = () => express(apiRoot, routes)

let cell

beforeEach(async () => {
  cell = await Cell.create({})
})

test('POST /cells 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', leader: 'test', phone: 'test', pacInput: 'test', description: 'test', user: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.leader).toEqual('test')
  expect(body.phone).toEqual('test')
  expect(body.pacInput).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.user).toEqual('test')
})

test('GET /cells 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /cells/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${cell.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(cell.id)
})

test('GET /cells/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /cells/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${cell.id}`)
    .send({ name: 'test', leader: 'test', phone: 'test', pacInput: 'test', description: 'test', user: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(cell.id)
  expect(body.name).toEqual('test')
  expect(body.leader).toEqual('test')
  expect(body.phone).toEqual('test')
  expect(body.pacInput).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.user).toEqual('test')
})

test('PUT /cells/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', leader: 'test', phone: 'test', pacInput: 'test', description: 'test', user: 'test' })
  expect(status).toBe(404)
})

test('DELETE /cells/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${cell.id}`)
  expect(status).toBe(204)
})

test('DELETE /cells/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
