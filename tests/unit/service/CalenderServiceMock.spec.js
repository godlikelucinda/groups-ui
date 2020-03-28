import { CalendarServiceMock } from '@/service/CalendarServiceMock'

describe('CalendarServiceMock.js', () => {
  it('it does something', () => {
    const serviceMock = new CalendarServiceMock()
    const events = serviceMock.getEvents()

    expect(events.length).toBe(3)

    const bradBirthday = events[0]
    const bradDoctorAppointment = events[1]
    const bradSoccerTraining = events[2]

    expect(events[0].eventId).toBe('001')
    expect(events[0].title).toBe('Geburtstag Brad')
    expect(events[1].eventId).toBe('002')
    expect(events[1].title).toBe('Brad Hautarzt')
    expect(events[2].eventId).toBe('003')
    expect(events[2].title).toBe('Brad Fußballverein')
  })
})
