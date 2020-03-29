import { shallowMount } from '@vue/test-utils'
import Note from '@/components/Note.vue'

describe('Note.vue', () => {
  const noteObject = {
    noteId: '001',
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
  }

  it('renders event.title', () => {
    const wrapper = shallowMount(Note, {
      propsData: { noteObject }
    })
    expect(wrapper.text()).toMatch(noteObject.title)
  })

  it('renders event.startDateTime', () => {
    const wrapper = shallowMount(Note, {
      propsData: { noteObject }
    })
    expect(wrapper.text()).toMatch(noteObject.startDateTime.toString())
  })

  it('renders event.endDateTime', () => {
    const wrapper = shallowMount(Note, {
      propsData: { noteObject }
    })
    expect(wrapper.text()).toMatch(noteObject.endDateTime.toString())
  })

  it('renders event.description', () => {
    const wrapper = shallowMount(Note, {
      propsData: { noteObject }
    })
    expect(wrapper.text()).toMatch(noteObject.description)
  })
})
