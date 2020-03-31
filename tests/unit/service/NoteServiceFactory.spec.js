import { NoteServiceFactory } from '@/service/NoteServiceFactory'

describe('NoteServiceFactory.js', () => {
  it('returns a mock in test mode', () => {
    process.env.NODE_ENV = 'test'
    const serviceMock = new NoteServiceFactory().create()
    expect(serviceMock.constructor.name).toBe('NoteServiceMock')
  })

  it('return the service class when not in test mode', () => {
    process.env.NODE_ENV = 'production'
    const serviceMock = new NoteServiceFactory().create()
    expect(serviceMock.constructor.name).toBe('NoteService')
  })
})
