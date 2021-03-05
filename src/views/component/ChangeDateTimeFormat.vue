<template>
  <div>
    <span>{{ dateToFormat }}</span>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'ChangeDateTimeFormat',
  props: ['dataProp'],
  data() {
    return {
      format: this.dataProp.format,
      dateToFormat: this.formatDate(this.dataProp)
    }
  },
  watch: {
    dataProp(newval, oldVal) {
      this.dateToFormat = this.formatDate(newval)
    }
  },
  methods: {
    moment: function() {
      return moment()
    },
    formatDate(obj) {
      var date = moment(obj.date)
      //We are getting UTC and EST is 5 hours less than UTC.
      let estDate = date.subtract(moment.duration(5, 'hours'))
      return estDate.format(obj.format)
    }
  }
}
</script>
