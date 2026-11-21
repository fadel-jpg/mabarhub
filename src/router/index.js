import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import LfgPage from '@/pages/LfgPage.vue'
import TournamentsPage from '@/pages/TournamentsPage.vue'
import TournamentDetailPage from '@/pages/TournamentDetailPage.vue'
import AdminPage from '@/pages/AdminPage.vue'
import AboutPage from '@/pages/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/lfg',
    name: 'lfg',
    component: LfgPage,
  },
  {
    path: '/turnamen',
    name: 'tournaments',
    component: TournamentsPage,
  },
  {
    path: '/turnamen/:id',
    name: 'tournament-detail',
    component: TournamentDetailPage,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
