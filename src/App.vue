<template>
  <v-app>

    <NavComponent />

    <v-main>
      <router-view></router-view>
    </v-main>

    <FooterComponent />

  </v-app>
</template>

<script>

import FooterComponent from './components/Footer.vue';
import NavComponent from './components/Navbar.vue';

export default {
  name: 'App',

  components: {
    NavComponent,
    FooterComponent,
  },

  data: () => ({
  }),
};
</script>
