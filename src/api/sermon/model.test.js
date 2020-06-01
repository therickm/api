import { Sermon } from '.'

let sermon

beforeEach(async () => {
  sermon = await Sermon.create({ title: 'test', location: 'test', time: 'test', date: 'test', hashtags: 'test', customFile: 'test', messages: 'test', user: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = sermon.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(sermon.id)
    expect(view.title).toBe(sermon.title)
    expect(view.location).toBe(sermon.location)
    expect(view.time).toBe(sermon.time)
    expect(view.date).toBe(sermon.date)
    expect(view.hashtags).toBe(sermon.hashtags)
    expect(view.customFile).toBe(sermon.customFile)
    expect(view.messages).toBe(sermon.messages)
    expect(view.user).toBe(sermon.user)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = sermon.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(sermon.id)
    expect(view.title).toBe(sermon.title)
    expect(view.location).toBe(sermon.location)
    expect(view.time).toBe(sermon.time)
    expect(view.date).toBe(sermon.date)
    expect(view.hashtags).toBe(sermon.hashtags)
    expect(view.customFile).toBe(sermon.customFile)
    expect(view.messages).toBe(sermon.messages)
    expect(view.user).toBe(sermon.user)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
