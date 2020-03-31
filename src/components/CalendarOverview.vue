<template>
  <b-row>
    <b-col md="auto">
      <b-calendar v-model="value" @context="onContext" :date-info-fn="getDateClass"></b-calendar>
    </b-col>
    <b-col>
      <p v-if="callendarNotesInSameMonth.length === 0">Keine Einträge in diesem Monat vorhanden</p>
      <Note
        v-for="note in callendarNotesInSameMonth"
        v-bind:key="note.noteId"
        :noteObject="note"></Note>

      <!--
      <p>Value: <b>'{{ value }}'</b></p>
      <p class="mb-0">Context:</p>
      <pre class="small">{{ context }}</pre>
      -->
    </b-col>
  </b-row>
</template>

<script>
import Note from '@/components/Note.vue'

export default {
  name: 'CalendarOverview',
  components: {
    Note
  },
  props: {
    noteService: {
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
    callendarNotes: function () {
      return this.noteService.getNotes()
    },
    callendarNotesInSameMonth () {
      if (this.context == null) {
        return []
      }

      const activeDate = this.context.activeDate
      return this.getNotesInSameMonth(activeDate)
    }
  },
  methods: {
    onContext (ctx) {
      this.context = ctx
    },
    getNotesInSameMonth (date) {
      const month = date.getMonth()
      const notesInSameMonth = []

      this.callendarNotes.forEach(element => {
        if (month >= element.startDateTime.getMonth() && month <= element.endDateTime.getMonth()) {
          notesInSameMonth.push(element)
        }
      })

      return notesInSameMonth
    },
    getDateClass (ymd, date) {
      let classString = ''

      this.callendarNotes.forEach(element => {
        const startDate = this.convertDateTimeToDate(element.startDateTime)
        const endDate = this.convertDateTimeToDate(element.endDateTime)

        if (date >= startDate && date <= endDate) {
          classString = 'table-info'
        }
      })

      return classString
    },
    convertDateTimeToDate (dateTime) {
      const year = dateTime.getFullYear()
      const month = dateTime.getMonth()
      const day = dateTime.getDate()
      return new Date(year, month, day)
    }
  }
}
</script>
