<template>
  <div class="note-edit">
    <b-form>
      <b-form-group id="input-group-title" label="Betreff">
        <b-form-input id="input-title" v-model="noteObject.title" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-start-date-time" label="Von">
        <b-form-datepicker id="datepicker-start-date-time" v-model="noteObject.startDateTime"></b-form-datepicker>
        <b-form-timepicker id="timepicker-start-time" v-model="startTime" minutes-step="5"></b-form-timepicker>
      </b-form-group>

      <b-form-group id="input-group-end-date-time" label="Bis">
        <b-form-datepicker id="datepicker-end-date-time" v-model="noteObject.endDateTime"></b-form-datepicker>
        <b-form-timepicker id="timepicker-end-time" v-model="endTime" minutes-step="5"></b-form-timepicker>
      </b-form-group>

      <b-form-group id="input-group-description" label="Beschreibung">
        <b-form-input id="input-description" v-model="noteObject.description"></b-form-input>
      </b-form-group>

      <div class="mb-4">
        <b-avatar></b-avatar>
        <b-avatar variant="primary" text="BV"></b-avatar>
        <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
        <b-avatar variant="success" icon="people-fill"></b-avatar>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'NoteEdit',
  props: {
    noteObject: {
      type: Object,
      required: true
    }
  },
  computed: {
    startTime () {
      return this.formatTime(this.noteObject.startDateTime)
    },
    endTime () {
      return this.formatTime(this.noteObject.endDateTime)
    }
  },
  methods: {
    formatTime (dateTime) {
      if (!dateTime) {
        return ''
      }

      const hours = dateTime.getHours().toString().padStart(2, '0')
      const minutes = dateTime.getMinutes().toString().padStart(2, '0')
      const seconds = dateTime.getSeconds().toString().padStart(2, '0')

      return `${hours}:${minutes}:${seconds}`
    }
  }
}
</script>

<style>
.note-edit {
  text-align: left;
}
</style>
