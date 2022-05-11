<template>

  <v-card class="px-3 mb-5">
    <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
      :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
  </v-card>

</template>

<script>

import { mockData } from '@/helpers'
import axios from 'axios'
import {
  BarElement,
  CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
  Tooltip
} from 'chart.js'
import { Bar } from 'vue-chartjs/legacy'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',

  components: {
    Bar
  },

  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },

    datasetIdKey: {
      type: String,
      default: 'label'
    },

    width: {
      type: Number,
      default: 400
    },

    height: {
      type: Number,
      default: 600
    },

    cssClasses: {
      default: '',
      type: String
    },

    styles: {
      type: Object,
      default: () => { }
    },

    plugins: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      chartData: {

        datasets: [
          {
            label: 'Mock Data BPI',
            backgroundColor: '#f87979',
            data: mockData.bpi,
          }
        ]
      },

      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },

  async mounted() {
    this.loaded = false

    try {
      const { data } = await axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-01-01&end=2019-12-31')


      this.chartData = {
        datasets: [
          {
            data: data.bpi,
            label: 'Data BPI',
            backgroundColor: '#f87979',
          }
        ]
      }

      this.loaded = true

    } catch (e) {
      console.error(e)
    }
  },

  computed: {
    myStyles() {
      return {
        position: 'relative',
      }
    }
  }
}

</script>