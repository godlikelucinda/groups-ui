<template>
  <div>
    <div v-b-modal="noteObject.noteId" class="note">
      <hr>
      <p><b>{{ noteObject.title }}</b></p>
      <p>
        {{ formattedStart }} - {{ formattedEnd }}</p>
      <p>{{ noteObject.description }}</p>
      <div class="mb-4">
        <b-avatar></b-avatar>
        <b-avatar variant="primary" text="BV"></b-avatar>
        <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
        <b-avatar variant="success" icon="people-fill"></b-avatar>
      </div>
    </div>

    <b-modal :id="noteObject.noteId" :title="noteObject.title">
      <NoteEdit :noteObject="noteObject"></NoteEdit>
    </b-modal>
  </div>
</template>

<script>
import NoteEdit from '@/components/NoteEdit.vue'
// import { BAvatar, BModal } from 'bootstrap-vue'

export default {
  name: 'Note',
  components: {
    NoteEdit
    // BAvatar,
    // BModal
  },
  props: {
    noteObject: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedStart () {
      return this.formatDate(this.noteObject.startDateTime)
    },
    formattedEnd () {
      return this.formatDate(this.noteObject.endDateTime)
    }
  },
  methods: {
    formatDate (date) {
      if (!date) {
        return ''
      }

      const day = date.getDate() !== undefined ? date.getDate() : ''
      const month = date.getMonth() !== undefined ? date.getMonth() + 1 : ''
      const year = date.getFullYear() !== undefined ? date.getFullYear() : ''

      const hour = date.getHours() !== undefined ? date.getHours() : ''
      const minutes = date.getMinutes() !== undefined ? date.getMinutes().toString().padStart(2, '0') : ''

      return `${day}.${month}.${year} ${hour}:${minutes}`
    }
  }
}
</script>

<style>
.note {
  text-align: left;
}
</style>
