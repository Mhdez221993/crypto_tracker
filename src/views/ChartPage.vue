<template>
  <div id="chart">

    <div id="mydiv" v-on:click="dragElement">
      <div id="mydivheader">
        <ChartComponent />
      </div>
    </div>

  </div>
</template>

<script>

import ChartComponent from '../components/ChartComponent.vue'
import dragger from '../helpers/dragger'

export default {
  name: 'ChartPage',

  components: {
    ChartComponent,
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