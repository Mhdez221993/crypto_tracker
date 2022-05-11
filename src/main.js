import '@mdi/font/css/materialdesignicons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import Vue from 'vue'
import App from './App.vue'
import './index.css'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  el: '#app',
  render: h => h(App)
})
