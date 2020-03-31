import { NoteService } from './NoteService'

export class NoteServiceMock extends NoteService {
  getNotes (startDate, endDate) {
    return [
      {
        noteId: '001',
        calenderId: 'family-calendar',
        title: 'Geburtstag Brad',
        description: 'Geburtstagsfeier im Indoorspielplatz',
        startDateTime: new Date('2020-01-01T15:00:00Z'),
        endDateTime: new Date('2020-01-01T18:00:00Z'),
        location: 'Wiesenweg 1, 12345 Hauptstadt',
        repeat: 'no-repeat',
        repeatUntil: null,
        participants: ['id-tom-mueller', 'id-leopold-meier', 'id-paul-schulze'],
        alert: '1-day-before',
        attachments: [],
        url: 'www.indoorspielplatz.de',
        note: ''
      },
      {
        noteId: '002',
        calenderId: 'family-calendar',
        title: 'Brad Hautarzt',
        description: '',
        startDateTime: new Date('2020-01-02T14:30:00Z'),
        endDateTime: new Date('2020-01-01T15:15:00Z'),
        location: 'Hauptstraße 83a, 12345 Hauptstadt',
        repeat: 'weekly',
        repeatUntil: null,
        participants: [],
        alert: '1-day-before',
        attachments: [],
        url: '',
        note: ''
      },
      {
        noteId: '003',
        calenderId: 'family-calendar',
        title: 'Brad Fußballverein',
        description: '',
        startDateTime: new Date('2020-01-01T16:20:00Z'),
        endDateTime: new Date('2020-01-01T16:30:00Z'),
        location: 'Dorfstraße 55, 12345 Hauptstadt',
        repeat: 'weekly',
        repeatUntil: new Date('2020-09-30'),
        participants: [],
        alert: '1-day-before',
        attachments: [],
        url: '',
        note: ''
      }
    ]
  }
}
