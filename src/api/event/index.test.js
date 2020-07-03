import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Event } from '.'

const app = () => express(apiRoot, routes)

let event

beforeEach(async () => {
  event = await Event.create({})
})

test('POST /events 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', location: 'test', time: 'test', date: 'test', hashtags: 'test', image: 'test', description: 'test', user: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.location).toEqual('test')
  expect(body.time).toEqual('test')
  expect(body.date).toEqual('test')
  expect(body.hashtags).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.user).toEqual('test')
})

test('GET /events 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /events/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${event.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(event.id)
})

test('GET /events/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /events/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${event.id}`)
    .send({ name: 'test', location: 'test', time: 'test', date: 'test', hashtags: 'test', image: 'test', description: 'test', user: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(event.id)
  expect(body.name).toEqual('test')
  expect(body.location).toEqual('test')
  expect(body.time).toEqual('test')
  expect(body.date).toEqual('test')
  expect(body.hashtags).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.user).toEqual('test')
})

test('PUT /events/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', location: 'test', time: 'test', date: 'test', hashtags: 'test', image: 'test', description: 'test', user: 'test' })
  expect(status).toBe(404)
})

test('DELETE /events/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${event.id}`)
  expect(status).toBe(204)
})

test('DELETE /events/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
