import CalendarService from './CalendarService'
import CalendarServiceMock from './CalendarServiceMock'

export class CalendarServiceFactory {
  create () {
    if (process.env.NODE_ENV === 'test') {
      return new CalendarServiceMock()
    } else {
      return new CalendarService()
    }
  }
}
