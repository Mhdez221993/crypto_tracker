<template>
  <v-app>

    <NavComponent />

    <v-main class="main">
      <draggable v-model="tabs" class="container">

        <BarChart />
        <TableData />

      </draggable>
    </v-main>

    <FooterComponent />

  </v-app>
</template>

<script>

import BarChart from '@/components/BarChart.vue';
import FooterComponent from '@/components/Footer.vue';
import NavComponent from '@/components/Navbar.vue';
import TableData from '@/components/TableData.vue';
import draggable from "vuedraggable";

export default {
  name: 'App',

  components: {
    NavComponent,
    draggable,
    BarChart,
    TableData,
    FooterComponent,
  },

  data: () => ({
  }),
}

</script>
