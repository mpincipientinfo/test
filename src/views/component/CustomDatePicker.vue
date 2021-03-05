<template>
  <div>
    <datepicker-lite class="date-picker" :value-attr="date" @value-changed="changeDateProp" :from="fromProp" :to="toProp" :locale="localeProp" />
  </div>
</template>
<script>
import DatepickerLite from "vue3-datepicker-lite";
export default {
  name: "CustomDatePicker",
  props: ["dateProp", "changeDateProp", "fromProp", "toProp", "localeProp"],
  components: {
    DatepickerLite
  },
  data() {
    return {
      date: this.dateProp ?? ""
    };
  },
  watch: {
    dateProp(newVal, oldVal) {
      this.date = newVal;
    }
  }
};
</script>
<style>
.date-picker input {
  display: block;
  width: 100%;
  height: calc(2em + 0.8rem + 2px);
  padding: 0.4rem 1rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 2;
  color: #82849f;
  background-color: transparent;
  background-clip: padding-box;
  border: 1px solid #e6e6f2;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
