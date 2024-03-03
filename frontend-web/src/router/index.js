import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import ProfileView from '../views/ProfileView.vue'
import SignupView from '../views/SignupView.vue'
import MyEventsView from '../views/MyEventsView.vue'
import MyClubsView from '@/views/MyClubsView.vue'
import { supabase } from '@/lib/supabaseClient'

const { data: { user } } = await supabase.auth.getUser()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
      meta: { requiresAuth: true },
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: { requiresAuth: true },
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/myevents',
      name: 'events',
      component: MyEventsView,
      meta: { requiresAuth: true },
    },
    {
      path: '/myclubs',
      name: 'clubs',
      component: MyClubsView,
      meta: { requiresAuth: true },
    }
  ]
})

router.beforeEach((to, from) => {

  if (to.meta.requiresAuth && !user) {
    return {
      path: '/signup',
    }
  }
  if (to.name == 'signup' && user) {
    return {
      path: '/home'
    }
  }
  if (to.name == 'index'){
    return {
      path: '/home'
    }
  }
})  


export default router
