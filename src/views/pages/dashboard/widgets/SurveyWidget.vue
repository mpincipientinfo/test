<template>
  <div class="card border-3 border-top-primary mb-5 shadow-sm" v-if="data">
    <div class="card-body d-flex justify-content-between align-items-center">
      <div>
        <h5 class="text-muted">{{ data.title }}</h5>
        <div class="metric-value">
          <h1 class="mb-1">{{ count }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_ALL_SURVEYS } from "@/store/survey.module";
export default {
  props: ["dataProp"],
  name: "SurveyWidget",
  data() {
    return {
      data: this.dataProp,
      count: 0
    };
  },
  mounted() {
    if (this.data) {
      this.getAllSurveys();
    }
  },
  methods: {
    getAllSurveys() {
      let filters = {
        orderBy: "DESC",
        eligible: this.data.eligible
      };
      if (this.data.filterDateParam) {
        filters[this.data.filterDateParam] = true;
      }
      filters.withoutState = true;
      this.$store.dispatch(GET_ALL_SURVEYS, filters).then((response) => {
        this.count = response.total;
      });
    }
  },
  watch: {
    dataProp: {
      deep: true,
      handler: function (newVal, oldVal) {
        this.data = newVal;
      }
    }
  }
};
</script>
