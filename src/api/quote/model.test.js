import { Quote } from '.'

let quote

beforeEach(async () => {
  quote = await Quote.create({ verse: 'test', application: 'test', lessons: 'test', date: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = quote.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(quote.id)
    expect(view.verse).toBe(quote.verse)
    expect(view.application).toBe(quote.application)
    expect(view.lessons).toBe(quote.lessons)
    expect(view.date).toBe(quote.date)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = quote.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(quote.id)
    expect(view.verse).toBe(quote.verse)
    expect(view.application).toBe(quote.application)
    expect(view.lessons).toBe(quote.lessons)
    expect(view.date).toBe(quote.date)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
