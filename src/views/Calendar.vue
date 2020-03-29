<template>
  <b-row>
    <b-col md="auto">
      <!--<b-calendar v-model="value" @context="onContext"></b-calendar>-->
      <b-calendar :date-info-fn="getDateClass"></b-calendar>
    </b-col>
    <b-col>
      <CalendarEvent
        v-for="appointment in callendarAppointments"
        v-bind:key="appointment.eventId"
        :event="appointment"></CalendarEvent>
    </b-col>
  </b-row>
</template>

<script>
import CalendarEvent from '@/components/CalendarEvent.vue'
import { CalendarServiceFactory } from '@/service/CalendarServiceFactory'

export default {
  name: 'Calendar',
  components: {
    CalendarEvent
  },
  data () {
    return {
      value: '',
      context: null
    }
  },
  computed: {
    callendarAppointments: function () {
      const serviceFactory = new CalendarServiceFactory()
      const calendarService = serviceFactory.create()
      return calendarService.getEvents()
    }
  },
  methods: {
    onContext (ctx) {
      this.context = ctx
    },
    getDateClass (ymd, date) {
      if (this.callendarAppointments.includes(ymd)) {
        return 'table-info'
      }
    }
  }
}
</script>
