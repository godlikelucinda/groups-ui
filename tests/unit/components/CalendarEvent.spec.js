import { shallowMount } from '@vue/test-utils'
import CalendarEvent from '@/components/CalendarEvent.vue'
import { CalendarServiceFactory } from '@/service/CalendarServiceFactory'

describe('CalendarEvent.vue', () => {
  const event = {
    eventId: '001',
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
  }

  it('renders event.title', () => {
    const wrapper = shallowMount(CalendarEvent, {
      propsData: { event }
    })
    expect(wrapper.text()).toMatch(event.title)
  })

  it('renders event.startDateTime', () => {
    const wrapper = shallowMount(CalendarEvent, {
      propsData: { event }
    })
    expect(wrapper.text()).toMatch(event.startDateTime.toString())
  })

  it('renders event.endDateTime', () => {
    const wrapper = shallowMount(CalendarEvent, {
      propsData: { event }
    })
    expect(wrapper.text()).toMatch(event.endDateTime.toString())
  })

  it('renders event.description', () => {
    const wrapper = shallowMount(CalendarEvent, {
      propsData: { event }
    })
    expect(wrapper.text()).toMatch(event.description)
  })
})
