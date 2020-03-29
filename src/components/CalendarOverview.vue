<template>
  <b-row>
    <b-col md="auto">
      <b-calendar v-model="value" @context="onContext" :date-info-fn="getDateClass"></b-calendar>
    </b-col>
    <b-col>
      <CalendarEvent
        v-for="appointment in callendarAppointments"
        v-bind:key="appointment.eventId"
        :event="appointment"></CalendarEvent>

      <p>Value: <b>'{{ value }}'</b></p>
      <p class="mb-0">Context:</p>
      <pre class="small">{{ context }}</pre>
    </b-col>
  </b-row>
</template>

<script>
import CalendarEvent from '@/components/CalendarEvent.vue'

export default {
  name: 'CalendarOverview',
  components: {
    CalendarEvent
  },
  props: {
    calendarService: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      value: '',
      context: null
    }
  },
  computed: {
    callendarAppointments: function () {
      return this.calendarService.getEvents()
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
    // getActiveMonth () {

    // }
  }
}
</script>
