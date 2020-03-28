import { CalendarServiceFactory } from '@/service/CalendarServiceFactory'
import { CalendarServiceMock } from '@/service/CalendarServiceMock'
import { CalendarService } from '@/service/CalendarService'

describe('CalendarServiceFactory.js', () => {
  it('returns a mock in test mode', () => {
    process.env.NODE_ENV = 'test'
    const serviceMock = new CalendarServiceFactory().create()
    expect(CalendarServiceMock.prototype.isPrototypeOf(serviceMock)).toBeTruthy()
    expect(CalendarService.prototype.isPrototypeOf(serviceMock)).toBeTruthy()
  }),
  
  it('return the service class when not in test mode', () => {
    process.env.NODE_ENV = 'production'
    const serviceMock = new CalendarServiceFactory().create()
    expect(CalendarService.prototype.isPrototypeOf(serviceMock)).toBeTruthy()
  })
})
