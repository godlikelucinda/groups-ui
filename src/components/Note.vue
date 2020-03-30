<template>
  <div class="note">
    <hr>
    <p><b>{{ noteObject.title }}</b></p>
    <p>{{ noteObject.startDateTime }} - {{ noteObject.endDateTime }}</p>
    <p>{{ noteObject.description }}</p>
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
