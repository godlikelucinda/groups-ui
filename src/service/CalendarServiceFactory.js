import { CalendarService } from './CalendarService'
import { CalendarServiceMock } from './CalendarServiceMock'

export class CalendarServiceFactory {
  Create () {
    if (process.env.NODE_ENV === 'test') {
      return new CalendarServiceMock()
    } else {
      return new CalendarService()
    }
  }
}
