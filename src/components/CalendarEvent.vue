<template>
  <div class="calendar-event">
    <h1>{{ event.title }}</h1>
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