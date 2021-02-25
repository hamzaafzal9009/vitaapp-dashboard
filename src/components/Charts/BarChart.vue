<script>
import {Bar, mixins} from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['options'],
  mixins: [mixins.reactiveProp],
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