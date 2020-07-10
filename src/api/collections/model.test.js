import { Collections } from '.'

let collections

beforeEach(async () => {
  collections = await Collections.create({ ac_name: 'test', ac_number: 'test', bank_name: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = collections.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(collections.id)
    expect(view.ac_name).toBe(collections.ac_name)
    expect(view.ac_number).toBe(collections.ac_number)
    expect(view.bank_name).toBe(collections.bank_name)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = collections.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(collections.id)
    expect(view.ac_name).toBe(collections.ac_name)
    expect(view.ac_number).toBe(collections.ac_number)
    expect(view.bank_name).toBe(collections.bank_name)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
