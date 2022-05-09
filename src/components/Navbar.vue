<template>
  <v-app-bar>
    <v-toolbar-title>coindesk Chart Project</v-toolbar-title>

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
