<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <h1>Test Project</h1>
    </div>

    <v-spacer></v-spacer>

    <v-btn v-for="item in menuItems" :key="item.title" :to="item.path" text>
      <span class="mr-2">{{ item.title }}</span>
    </v-btn>
  </v-app-bar>

</template>

<script>


export default {
  name: 'NavComponent',

  components: {
  },

  data: () => ({
    menuItems: [
      { title: 'Chart', path: '/' },
      { title: 'Table', path: '/table' }
    ],
  }),
};
</script>
