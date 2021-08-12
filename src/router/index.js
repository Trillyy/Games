import Vue from 'vue'
import VueRouter from 'vue-router'
import Piano from '../views/Piano.vue'
import Card from '../views/Card.vue'
import Minesweeper from '../views/MineSweeper.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/piano',
    name: 'Piano',
    component: Piano
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  },
  {
    path: '/minesweeper',
    name: 'Minesweeper',
    component: Minesweeper
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router
