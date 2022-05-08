<template>
  <div class="chart">
    <h1>Chart</h1>

    <div id="mydiv" v-on:click="dragElement">
      <div id="mydivheader">Click here to move</div>
    </div>

  </div>
</template>

<script>

import dragger from '../helpers/dragger'

export default {
  name: 'ChartPage',

  methods: {
    dragElement: dragger
  }
}

</script>