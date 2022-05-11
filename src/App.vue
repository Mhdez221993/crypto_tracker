<template>
  <v-app>

    <NavComponent />

    <v-main class="main">
      <v-container>
        <v-column>

          <draggable v-model="tabs">
            <BarChart />
            <TableData />
          </draggable>

        </v-column>
      </v-container>

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
