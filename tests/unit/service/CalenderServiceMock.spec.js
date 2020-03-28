import { CalendarServiceMock } from '@/service/CalendarServiceMock'

describe('CalendarServiceMock.js', () => {
  it('it does something', () => {
    const serviceMock = new CalendarServiceMock()
    const events = serviceMock.getEvents()
    expect(events.length).toBe(3)
    expect(events[0].eventId).toMatch('001')
  })
})
