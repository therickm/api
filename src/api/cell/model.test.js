import { Cell } from '.'

let cell

beforeEach(async () => {
  cell = await Cell.create({ name: 'test', leader: 'test', phone: 'test', pacInput: 'test', description: 'test', user: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = cell.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(cell.id)
    expect(view.name).toBe(cell.name)
    expect(view.leader).toBe(cell.leader)
    expect(view.phone).toBe(cell.phone)
    expect(view.pacInput).toBe(cell.pacInput)
    expect(view.description).toBe(cell.description)
    expect(view.user).toBe(cell.user)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = cell.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(cell.id)
    expect(view.name).toBe(cell.name)
    expect(view.leader).toBe(cell.leader)
    expect(view.phone).toBe(cell.phone)
    expect(view.pacInput).toBe(cell.pacInput)
    expect(view.description).toBe(cell.description)
    expect(view.user).toBe(cell.user)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
