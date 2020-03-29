<template>
  <CalendarOverview :calendarService="calendarService"></CalendarOverview>
</template>

<script>
import CalendarOverview from '@/components/CalendarOverview.vue'
import { CalendarServiceFactory } from '@/service/CalendarServiceFactory'

export default {
  name: 'Calendar',
  components: {
    CalendarOverview
  },
  data () {
    return {
      value: '',
      context: null
    }
  },
  computed: {
    calendarService: function () {
      const serviceFactory = new CalendarServiceFactory()
      return serviceFactory.create()
    }
  }
}
</script>
