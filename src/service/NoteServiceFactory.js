import { NoteService } from './NoteService'
import { NoteServiceMock } from './NoteServiceMock'

export class NoteServiceFactory {
  create () {
    if (process.env.NODE_ENV === 'test') {
      return new NoteServiceMock()
    } else if (process.env.NODE_ENV === 'production') {
      return new NoteService()
    } else {
      return new NoteServiceMock()
    }
  }
}
