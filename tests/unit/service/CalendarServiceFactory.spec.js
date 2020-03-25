import CalendarServiceFactory from '@/service/CalendarServiceFactory'

describe('CalendarServiceFactory.js', () => {
  it('it returns a mock in test mode', () => {
    process.env.NODE_ENV = 'test'
    const serviceMock = new CalendarServiceFactory().create()
    expect(Object.prototype.toString.call(serviceMock)).toMatch('[object CalendarServiceMock]')
  })
})
