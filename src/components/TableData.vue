<template>
  <v-card>

    <v-card-title>
      BTC Price

      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>

    </v-card-title>
    <v-data-table :headers="headers" :items="data" :search="search"></v-data-table>

  </v-card>
</template>

<script>

import updateData from '@/helpers/converData'
import { mockTableData } from '@/helpers/mockData'
import axios from 'axios'

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
        {
          text: 'Date',
          value: 'date'
        },
        {
          text: 'Price',
          value: 'price'
        }
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

  async mounted() {
    this.loaded = false

    try {
      const { data } = await axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-01-01&end=2019-12-31')


      this.data = updateData(data)

      this.loaded = true

    } catch (e) {
      console.error(e)
    }
  },
}

</script>