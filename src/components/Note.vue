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

    <b-modal :id="noteObject.noteId" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
      <Note :noteObject="noteObject"></Note>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Note',
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
