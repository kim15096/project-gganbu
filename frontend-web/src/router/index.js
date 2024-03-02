import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import ProfileView from '../views/ProfileView.vue'
import SignupView from '../views/SignupView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import { supabase } from '@/lib/supabaseClient'

const { data: { user } } = await supabase.auth.getUser()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView,
      meta: { requiresAuth: true },
    }
  ]
})

router.beforeEach((to, from) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !user) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: '/signup',
      // save the location we were at to come back later
    }
  }
})


export default router
