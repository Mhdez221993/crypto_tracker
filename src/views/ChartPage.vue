<template>
  <div class="chart">

    <div id="mydiv" v-on:click="dragElement">
      <div class="mydivheader">
        <BarChart />
      </div>
    </div>

  </div>
</template>

<script>

import BarChart from '@/components/BarChart.vue'
import dragger from '@/helpers/dragger'

export default {
  name: 'ChartPage',

  components: {
    BarChart,
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