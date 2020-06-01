import { Playlist } from '.'

let playlist

beforeEach(async () => {
  playlist = await Playlist.create({ date: 'test', songs: 'test', user: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = playlist.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(playlist.id)
    expect(view.date).toBe(playlist.date)
    expect(view.songs).toBe(playlist.songs)
    expect(view.user).toBe(playlist.user)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = playlist.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(playlist.id)
    expect(view.date).toBe(playlist.date)
    expect(view.songs).toBe(playlist.songs)
    expect(view.user).toBe(playlist.user)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
