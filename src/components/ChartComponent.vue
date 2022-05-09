<template>
  <Bar :chart-data="chartData" :styles="myStyles" />
</template>

<script>
import data from '@/helpers/mockData.js'
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js'
import { Bar } from 'vue-chartjs/legacy'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        datasets: [
          {
            label: 'Data BPI',
            backgroundColor: '#f87979',
            data: data.bpi
          }
        ]
      }
    }
  },

  computed: {
    myStyles() {
      return {
        height: '600px',
        width: '100%',
        position: 'relative'
      }
    }
  }
}
</script>