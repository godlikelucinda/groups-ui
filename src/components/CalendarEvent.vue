<template>
  <div class="calendar-event">
    <hr>
    <p><b>{{ event.title }}</b></p>
    <p>{{ event.startDateTime }} - {{ event.endDateTime }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'CalendarEvent',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>
