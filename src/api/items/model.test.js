import { Items } from '.'

let items

beforeEach(async () => {
  items = await Items.create({ name: 'test', discription: 'test', unit_price: 'test', user: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = items.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(items.id)
    expect(view.name).toBe(items.name)
    expect(view.discription).toBe(items.discription)
    expect(view.unit_price).toBe(items.unit_price)
    expect(view.user).toBe(items.user)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = items.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(items.id)
    expect(view.name).toBe(items.name)
    expect(view.discription).toBe(items.discription)
    expect(view.unit_price).toBe(items.unit_price)
    expect(view.user).toBe(items.user)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
