import { Livestreams } from '.'

let livestreams

beforeEach(async () => {
  livestreams = await Livestreams.create({ url: 'test', user: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = livestreams.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(livestreams.id)
    expect(view.url).toBe(livestreams.url)
    expect(view.user).toBe(livestreams.user)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = livestreams.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(livestreams.id)
    expect(view.url).toBe(livestreams.url)
    expect(view.user).toBe(livestreams.user)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
