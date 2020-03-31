import { shallowMount } from '@vue/test-utils'
import CalendarOverview from '@/components/CalendarOverview.vue'
import { NoteServiceFactory } from '@/service/NoteServiceFactory'
import Note from '@/components/Note'

describe('CalendarOverview.vue', () => {
  process.env.NODE_ENV = 'test'
  const noteService = new NoteServiceFactory().create()

  it('renders circle to select current day', async () => {
    const wrapper = shallowMount(CalendarOverview, {
      propsData: { noteService }
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.contains(Note)).toBe(true)
    // expect(wrapper.html().tocontains('.b-calendar')).toBe(true)
  })
})
