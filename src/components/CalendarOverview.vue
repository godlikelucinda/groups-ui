<template>
  <b-row>
    <b-col md="auto">
      <b-calendar v-model="value" @context="onContext" :date-info-fn="getDateClass"></b-calendar>
    </b-col>
    <b-col>
      <Note
        v-for="note in callendarNotes"
        v-bind:key="note.noteId"
        :noteObject="note"></Note>

      <p>Value: <b>'{{ value }}'</b></p>
      <p class="mb-0">Context:</p>
      <pre class="small">{{ context }}</pre>
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
    }
  },
  methods: {
    onContext (ctx) {
      this.context = ctx
    },
    getDateClass (ymd, date) {
      if (this.callendarNotes.includes(ymd)) {
        return 'table-info'
      }
    }
    // getActiveMonth () {

    // }
  }
}
</script>
