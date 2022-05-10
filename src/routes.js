import Vue from "vue"
import Router from "vue-router"
import ChartPage from './views/ChartPage.vue'
import TablePage from './views/TablePage.vue'

const routes = [
  {
    path: '/',
    component: ChartPage,
  },
  {
    path: '/table',
    component: TablePage,
  }
]

Vue.use(Router);

export default new Router({
  mode: "history",
  routes
});
