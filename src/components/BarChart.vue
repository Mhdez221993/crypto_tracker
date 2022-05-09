<template>
  <Bar :chart-data="chartData" :styles="myStyles" class="bar" />
</template>

<script>
import axios from 'axios'
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js'
import { Bar } from 'vue-chartjs/legacy'
import { mockData } from '../helpers/mockData'


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },

  data: () => ({
    chartData: {
      datasets: [
        {
          data: mockData.bpi,
          label: 'Mock Data BPI',
          backgroundColor: '#f87979'
        }
      ]
    }
  }),

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
        width: '100%;',
        height: '100%',
        position: 'relative'
      }
    }
  }
}
</script>