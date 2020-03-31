<template>
  <CalendarOverview :noteService="noteService"></CalendarOverview>
</template>

<script>
import CalendarOverview from '@/components/CalendarOverview.vue'
import { NoteServiceFactory } from '@/service/NoteServiceFactory'

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
    noteService: function () {
      const serviceFactory = new NoteServiceFactory()
      return serviceFactory.create()
    }
  }
}
</script>
