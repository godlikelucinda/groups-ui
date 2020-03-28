import { CalendarService } from './CalendarService'

export class CalendarServiceMock extends CalendarService {
  getEvents (startDate, endDate) {
    return [
      {
        eventId: '001',
        calenderId: 'family-calendar',
        title: 'Geburtstag Steve',
        description: 'Geburtstagsfeier im Gaudipark',
        startDateTime: new Date('2020-01-01T15:00:00Z'),
        endDateTime: new Date('2020-01-01T18:00:00Z'),
        location: 'Leutragraben 1, 07745 Jena',
        repeat: 'no-repeat',
        repeatUntil: null,
        participants: ['id-tom-hofmann', 'id-linux-kramer', 'id-paula-pfeiffer'],
        alert: '1-day-before',
        attachments: [],
        url: 'www.gaudi-park.de',
        note: ''
      },
      {
        eventId: '002',
        calenderId: 'family-calendar',
        title: 'Steve Logopäde',
        description: '',
        startDateTime: new Date('2020-01-02T14:30:00Z'),
        endDateTime: new Date('2020-01-01T15:15:00Z'),
        location: 'Westschulenstraße 5, 07745 Jena',
        repeat: 'weekly',
        repeatUntil: null,
        participants: [],
        alert: '1-day-before',
        attachments: [],
        url: '',
        note: ''
      },
      {
        eventId: '003',
        calenderId: 'family-calendar',
        title: 'Steve Schlafbeutel mitnehmen',
        description: '',
        startDateTime: new Date('2020-01-03T16:20:00Z'),
        endDateTime: new Date('2020-01-01T16:30:00Z'),
        location: 'Wiesenweg 28a, 07745 Jena',
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
