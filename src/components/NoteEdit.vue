<template>
  <div class="note-edit">
    <b-form>
      <b-form-group>
        <p>{{ noteObject.startDateTime }} - {{ noteObject.endDateTime }}</p>
      </b-form-group>

      <b-form-group>
        <p>{{ noteObject.description }}</p>
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
  }
}
</script>

<style>
.note-edit {
  text-align: left;
}
</style>
