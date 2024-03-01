import { defineStore } from 'pinia';
import { supabase } from '../lib/supabaseClient' 


export const useAuthStore = defineStore('auth', {
  state: () => ({
    userLoggedIn: false,
  }),
  getters: {
    getUserLoggedIn: (state) => state.userLoggedIn,
  },
  actions: {
    async checkUserLoggedIn() {
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
            this.userLoggedIn = true
            console.log('There is an active session', user);
        } else {
            this.userLoggedIn = false
            console.log('No active session');
        }
      },
  },
});
