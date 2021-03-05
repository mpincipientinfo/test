<template>
  <div class="col-6 dataTables_length">
    <label>
      Show
      <select
        v-model="pageSize"
        @change="onChange"
        class="custom-select custom-select-sm form-control form-control-sm"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      records
    </label>
  </div>
</template>

<script>
export default {
  name: 'RecordsPerPageDropDown',
  props: ['pageSizeProp'],
  data() {
    return {
      pageSize: this.pageSizeProp
    }
  },
  methods: {
    onChange(e) {
      this.$emit('change-pagesize', e.target.value)
    }
  }
}
</script>
<style>
.dataTables_length > label {
  font-weight: 400;
  text-align: left;
  white-space: nowrap;
}
div.dataTables_length select {
  width: auto;
  display: inline-block;
}
</style>
