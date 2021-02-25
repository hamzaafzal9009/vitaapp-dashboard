<script>
import {Doughnut, mixins} from 'vue-chartjs'

export default {
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  props: ['options'],
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
}
</script>

<style scoped>
div {
  background: white;
  padding: 10px;
  margin: 10px;
}
</style>