<template>
  <v-card>
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="data" :search="search"></v-data-table>
  </v-card>
</template>

<script>

import { mockTableData } from '@/helpers/mockData'

export default {
  name: 'TableData',
  data() {
    return {
      sortBy: 'fat',
      sortDesc: false,
      search: '',
      headers: [
        {
          text: 'Coin',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Date', value: 'date' },
        { text: 'Price', value: 'price' }
      ],
      data: mockTableData
    }
  },
  methods: {
    toggleOrder() {
      this.sortDesc = !this.sortDesc
    },
    nextSort() {
      let index = this.headers.findIndex(h => h.value === this.sortBy)
      index = (index + 1) % this.headers.length
      this.sortBy = this.headers[index].value
    },
  },
}
</script>