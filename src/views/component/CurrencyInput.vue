<template>
  <span>
    <input
      type="text"
      class="form-control"
      v-model="currency"
      @keypress="validateCurrency($event)"
      @keyup="formatCurrency()"
    />
  </span>
</template>

<script>
export default {
  name: 'CurrencyInput',
  props: ['currencyProp', 'updateCurrency'],
  data() {
    return {
      currency: this.currencyProp
        ? this.getFormattedAmount(this.currencyProp)
        : ''
    }
  },
  watch: {
    currencyProp(newVal, oldval) {
      this.currency = this.getFormattedAmount(newVal)
    }
  },
  methods: {
    validateCurrency(evt) {
      evt = evt ? evt : window.event
      var charCode = evt.which ? evt.which : evt.keyCode
      if (
        (evt.which == 46 && evt.target.value.indexOf('.') != -1) ||
        (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46)
      ) {
        evt.preventDefault()
      } else {
        return true
      }
    },
    formatCurrency() {
      this.currency = this.getFormattedAmount(this.currency)
      let currency = this.currency.replaceAll('$', '')
      currency = currency.replaceAll(',', '')
      this.updateCurrency(currency)
    }
  }
}
</script>
