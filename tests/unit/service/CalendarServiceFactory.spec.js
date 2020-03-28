import { CalendarServiceFactory } from '@/service/CalendarServiceFactory'

describe('CalendarServiceFactory.js', () => {
  it('returns a mock in test mode', () => {
    process.env.NODE_ENV = 'test'
    const serviceMock = new CalendarServiceFactory().Create()
    expect(serviceMock.constructor.name).toBe('CalendarServiceMock')
  })

  it('return the service class when not in test mode', () => {
    process.env.NODE_ENV = 'production'
    const serviceMock = new CalendarServiceFactory().Create()
    expect(serviceMock.constructor.name).toBe('CalendarService')
  })
})
