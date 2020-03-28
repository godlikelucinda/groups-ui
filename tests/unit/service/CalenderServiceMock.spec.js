import { CalendarServiceMock } from '@/service/CalendarServiceMock'

describe('CalendarServiceMock.js', () => {
  it('it does something', () => {
    const serviceMock = new CalendarServiceMock()
    const events = serviceMock.getEvents()

    expect(events.length).toBe(3)

    const bradBirthday = events[0]
    const bradDoctorAppointment = events[1]
    const bradSoccerTraining = events[2]

    expect(bradBirthday.eventId).toBe('001')
    expect(bradBirthday.title).toBe('Geburtstag Brad')
    expect(bradDoctorAppointment.eventId).toBe('002')
    expect(bradDoctorAppointment.title).toBe('Brad Hautarzt')
    expect(bradSoccerTraining.eventId).toBe('003')
    expect(bradSoccerTraining.title).toBe('Brad Fußballverein')
  })
})
