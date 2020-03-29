import { shallowMount } from '@vue/test-utils'
import { CalendarServiceFactory } from '@/service/CalendarServiceFactory'
import CalendarOverview from '@/components/CalendarOverview.vue'
import CalendarEvent from '@/components/CalendarEvent'

describe('CalendarOverview.vue', () => {
  process.env.NODE_ENV = 'test'
  const calendarService = new CalendarServiceFactory().create()

  it('renders circle to select current day', () => {
    const wrapper = shallowMount(CalendarOverview, {
      propsData: { calendarService }
    })
    expect(wrapper.contains(CalendarEvent)).toBe(true)
  })
})
