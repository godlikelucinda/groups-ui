<template>
  <div class="note-edit">
    <b-form>
      <p>{{ noteObject.startDateTime }} - {{ noteObject.endDateTime }}</p>
      <p>{{ noteObject.description }}</p>
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
  }
}
</script>

<style>
.note-edit {
  text-align: left;
}
</style>
