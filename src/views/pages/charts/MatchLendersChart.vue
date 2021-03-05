<template>
  <div class="card shadow-sm h-100">
    <div class="row card-header vertical-align-center">
      <h3 class="col-9">{{ headingProp }}</h3>
      <div class="col-3">
        <select name="" id="" class="form-control" v-model="surveysType" @change.prevent="changeSurveyType()">
          <option value="all">All</option>
          <option value="1">Eligible</option>
          <option value="2">Ineligible</option>
          <option value="3">Pending</option>
        </select>
      </div>
    </div>
    <div class="card-body">
      <div class="alert alert-danger" role="alert" v-if="error">
        {{ error }}
      </div>
      <ColumnChart
        :key="surveysType + 'column'"
        v-if="typeProp == 'column'"
        :dataProp="{
          data: data,
          categories: categories
        }"
      />
      <BarChart
        :key="surveysType + 'bar'"
        v-if="typeProp == 'bar'"
        :dataProp="{
          data: data,
          categories: categories,
          colors: colorsProp
        }"
      />
    </div>
  </div>
</template>

<script>
import BarChart from "./component/BarChart";
import { GET_MATCH_LENDER_GRAPH_DATA } from "@/store/survey.module";
import ColumnChart from "./component/ColumnChart";
export default {
  name: "MatchLendersChart",
  props: ["paramsProp", "typeProp", "headingProp", "colorsProp"],
  components: {
    ColumnChart,
    BarChart
  },
  data() {
    return {
      error: "",
      params: this.paramsProp,
      data: [],
      categories: [],
      surveysType: "all"
    };
  },
  mounted() {
    if (this.params) {
      this.getRecords(this.params);
    }
  },
  methods: {
    changeSurveyType() {
      this.params.eligible = this.surveysType;
      this.getRecords(this.params);
    },
    getRecords(params) {
      this.$store
        .dispatch(GET_MATCH_LENDER_GRAPH_DATA, params)
        .then((response) => {
          this.data = [];
          this.categories = [];
          response.data.map((data) => {
            this.categories.push(data.lender_name);
            this.data.push(data.surveysCount);
          });
        })
        .catch((error) => {
          this.error = error;
        });
    }
  },

  watch: {
    paramsProp: {
      deep: true,
      handler: function (newval, oldVal) {
        this.params = newval;
        this.getRecords(newval);
      }
    }
  }
};
</script>
