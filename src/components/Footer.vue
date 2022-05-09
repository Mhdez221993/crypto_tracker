


<template>

  <v-footer padless>

    <v-row justify="center" no-gutters class="py-4">

      <v-btn v-for="icon in icons" :key="icon.name" class="mx-4 white--text" icon :href="icon.path" target="_blank">
        <v-icon size="24px">
          {{ icon.name }}
        </v-icon>
      </v-btn>

      <v-col class="lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Moises Hernandez</strong>
      </v-col>
    </v-row>
  </v-footer>

</template>

<script>

export default {
  name: 'FooterComponent',

  components: {
  },

  data: () => ({
    icons: [
      { name: 'mdi-facebook', path: "https://www.facebook.com/moises.hernandezcoronado" },
      { name: 'mdi-twitter', path: 'https://twitter.com/MoisesH42060050' },
      { name: 'mdi-linkedin', path: 'https://www.linkedin.com/in/moises-hdez-coronado/' },
      { name: 'mdi-github', path: 'https://github.com/Mhdez221993' },
    ],
  }),
};
</script>
