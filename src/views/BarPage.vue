<template>
  <div class="chart">

    <div id="mydiv" v-on:click="dragElement">
      <div class="mydivheader">
        <LineChart />
      </div>
    </div>

  </div>
</template>

<script>

import LineChart from '@/components/BarChart.vue'
import dragger from '@/helpers/dragger'

export default {
  name: 'ChartPage',

  components: {
    LineChart,
  },

  methods: {
    dragElement: dragger
  },

  data() {
    return {
    }
  }
}

</script>
