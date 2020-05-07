<template>
  <div>
    <div v-b-modal="noteObject.noteId" class="note">
      <hr>
      <p><b>{{ noteObject.title }}</b></p>
      <p>{{ noteObject.startDateTime }} - {{ noteObject.endDateTime }}</p>
      <p>{{ noteObject.description }}</p>
      <div class="mb-4">
        <b-avatar></b-avatar>
        <b-avatar variant="primary" text="BV"></b-avatar>
        <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
        <b-avatar variant="success" icon="people-fill"></b-avatar>
      </div>
    </div>

    <b-modal :id="noteObject.noteId" title="Ereignis bearbeiten">
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
  }
}
</script>

<style>
.note {
  text-align: left;
}
</style>
