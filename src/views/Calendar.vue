<template>
  <b-row>
    <b-col md="auto">
      <!--<b-calendar v-model="value" @context="onContext"></b-calendar>-->
      <b-calendar :date-info-fn="getDateClass"></b-calendar>
    </b-col>
    <b-col>
      <p>Value: <b>'{{ value }}'</b></p>
      <p class="mb-0">Context:</p>
      <pre class="small">{{ context }}</pre>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      context: null,
      callendarAppointments: ['2020-03-01', '2020-03-02', '2020-03-03', '2020-03-04']
    }
  },
  methods: {
    onContext (ctx) {
      this.context = ctx
    },
    getDateClass (ymd, date) {
      if (this.callendarAppointments.includes(ymd)) {
        return 'table-info'
      }
    }
  }
}
</script>
