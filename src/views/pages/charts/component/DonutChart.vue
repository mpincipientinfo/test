<template>
  <div class="chart-wrap">
    <div :id="id"></div>
  </div>
</template>

<script>
export default {
  props: ["dataProp"],
  data: function () {
    return {
      id: "id_" + new Date().getTime(),
      options: {
        labels: this.dataProp ? this.dataProp.categories : [],
        chart: {
          type: "donut",
          toolbar: {
            show: true
          }
        },
        legend: {
          position: "bottom"
        },
        series: this.dataProp ? this.dataProp.data : [],
        chartOptions: {
          dataLabels: {
            enabled: false
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  show: true
                }
              }
            }
          ]
        }
      }
    };
  },
  watch: {
    dataProp: {
      deep: true,
      handler: function (newVal, oldVal) {
        this.options.labels = newVal.categories;
        this.options.series = newVal.data;
        let chart = new ApexCharts(document.querySelector(`#${this.id}`), this.options);
        chart.render();
      }
    }
  }
};
</script>
