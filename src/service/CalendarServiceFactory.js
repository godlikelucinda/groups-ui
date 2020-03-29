import { CalendarService } from './CalendarService'
import { CalendarServiceMock } from './CalendarServiceMock'

export class CalendarServiceFactory {
  create () {
    if (process.env.NODE_ENV === 'test') {
      return new CalendarServiceMock()
    } else if (process.env.NODE_ENV === 'production') {
      return new CalendarService()
    } else {
      return new CalendarServiceMock()
    }
  }
}
