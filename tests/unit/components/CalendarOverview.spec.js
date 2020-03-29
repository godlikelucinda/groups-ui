import { shallowMount } from '@vue/test-utils'
import { CalendarServiceFactory } from '@/service/CalendarServiceFactory'
import CalendarOverview from '@/components/CalendarOverview.vue'
import CalendarEvent from '@/components/CalendarEvent'

describe('CalendarOverview.vue', () => {
  process.env.NODE_ENV = 'test'
  const calendarService = new CalendarServiceFactory().create()

  it('renders circle to select current day', async () => {
    const wrapper = shallowMount(CalendarOverview, {
      propsData: { calendarService }
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.contains(CalendarEvent)).toBe(true)
    expect(wrapper.html().tocontains('.b-calendar')).toBe(true)
  })
})
