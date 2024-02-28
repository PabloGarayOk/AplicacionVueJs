import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import EditarView from '../views/EditarView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'DashboardView',
    component: DashboardView
  },
  {
    // Ponemos la / para pasar la variable id del paciente que queremos editar
    path: '/editar/:id',
    name: 'EditarView',
    component: EditarView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
