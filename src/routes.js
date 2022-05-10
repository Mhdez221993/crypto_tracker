import Vue from "vue"
import Router from "vue-router"
import BarPage from './views/BarPage.vue'
import TablePage from './views/TablePage.vue'

const routes = [
  {
    path: '/',
    component: BarPage,
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
