import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CalendarOverview from '@/components/CalendarOverview.vue'
import { NoteServiceFactory } from '@/service/NoteServiceFactory'
import { BootstrapVue, BRow, BCol } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.component('b-row', BRow)
Vue.component('b-col', BCol)

describe('CalendarOverview.vue', () => {
  process.env.NODE_ENV = 'test'
  const noteService = new NoteServiceFactory().create()

  it('renders circle to select current day', async () => {
    const wrapper = shallowMount(CalendarOverview, {
      propsData: { noteService }
    })

    const getFirstOfMarch = jest.fn(() => { return new Date(2020, 3, 1) })
    wrapper.setMethods({ getActiveDate: getFirstOfMarch })
    expect(wrapper.vm.getActiveDate().toString()).toBe(new Date(2020, 3, 1).toString())
    expect(wrapper.text()).toContain('Keine Einträge in diesem Monat vorhanden')

    const getNewYear = jest.fn(() => { return new Date(2020, 1, 1) })
    wrapper.setMethods({ getActiveDate: getNewYear })
    expect(wrapper.vm.getActiveDate().toString()).toBe(new Date(2020, 1, 1).toString())
    // expect(wrapper.vm.getNotesInSameMonth(wrapper.vm.getActiveDate()).length).toBe(3)
    // expect(wrapper.text()).toContain('Geburtstagsfeier im Indoorspielplatz')
    // expect(wrapper.text()).toContain('Brad Hautarzt')
    // expect(wrapper.text()).toContain('Brad Fußballverein')
  })
})
