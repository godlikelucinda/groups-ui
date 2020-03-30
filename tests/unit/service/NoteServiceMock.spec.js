import { NoteServiceMock } from '@/service/NoteServiceMock'

describe('NoteServiceMock.js', () => {
  it('it does something', () => {
    const serviceMock = new NoteServiceMock()
    const events = serviceMock.getNotes()

    expect(events.length).toBe(3)

    const bradBirthday = events[0]
    const bradDoctorAppointment = events[1]
    const bradSoccerTraining = events[2]

    expect(bradBirthday.noteId).toBe('001')
    expect(bradBirthday.title).toBe('Geburtstag Brad')
    expect(bradDoctorAppointment.noteId).toBe('002')
    expect(bradDoctorAppointment.title).toBe('Brad Hautarzt')
    expect(bradSoccerTraining.noteId).toBe('003')
    expect(bradSoccerTraining.title).toBe('Brad Fußballverein')
  })
})
