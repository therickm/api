import { Orders } from '.'

let orders

beforeEach(async () => {
  orders = await Orders.create({ item: 'test', quntity: 'test', customer: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = orders.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(orders.id)
    expect(view.item).toBe(orders.item)
    expect(view.quntity).toBe(orders.quntity)
    expect(view.customer).toBe(orders.customer)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = orders.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(orders.id)
    expect(view.item).toBe(orders.item)
    expect(view.quntity).toBe(orders.quntity)
    expect(view.customer).toBe(orders.customer)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
