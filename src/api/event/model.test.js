import { Event } from '.'

let event

beforeEach(async () => {
  event = await Event.create({ name: 'test', location: 'test', time: 'test', date: 'test', hashtags: 'test', image: 'test', description: 'test', user: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = event.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(event.id)
    expect(view.name).toBe(event.name)
    expect(view.location).toBe(event.location)
    expect(view.time).toBe(event.time)
    expect(view.date).toBe(event.date)
    expect(view.hashtags).toBe(event.hashtags)
    expect(view.image).toBe(event.image)
    expect(view.description).toBe(event.description)
    expect(view.user).toBe(event.user)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = event.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(event.id)
    expect(view.name).toBe(event.name)
    expect(view.location).toBe(event.location)
    expect(view.time).toBe(event.time)
    expect(view.date).toBe(event.date)
    expect(view.hashtags).toBe(event.hashtags)
    expect(view.image).toBe(event.image)
    expect(view.description).toBe(event.description)
    expect(view.user).toBe(event.user)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
