<template>
  <div class="note">
    <hr>
    <p><b>{{ event.title }}</b></p>
    <p>{{ event.startDateTime }} - {{ event.endDateTime }}</p>
    <p>{{ event.description }}</p>
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
