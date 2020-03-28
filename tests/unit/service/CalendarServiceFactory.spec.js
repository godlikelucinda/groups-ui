import { CalendarServiceFactory } from '@/service/CalendarServiceFactory'

describe('CalendarServiceFactory.js', () => {
  it('returns a mock in test mode', () => {
    process.env.NODE_ENV = 'test'
    const serviceMock = new CalendarServiceFactory().create()
    expect(serviceMock.constructor.name).toMatch('CalendarServiceMock')
  })

  it('returns a mock in test mode which is a subclass of the service class', () => {
    process.env.NODE_ENV = 'test'
    const serviceMock = new CalendarServiceFactory().create()
    expect(serviceMock.constructor.name).toBe('CalendarService')
    expect(serviceMock.constructor.name).toBe('CalendarServiceMock')
  })

  it('return the service class when not in test mode', () => {
    process.env.NODE_ENV = 'production'
    const serviceMock = new CalendarServiceFactory().create()
    expect(serviceMock.constructor.name).toMatch('CalendarService')
  })
})
