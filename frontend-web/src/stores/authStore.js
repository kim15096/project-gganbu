import { defineStore } from 'pinia';
import { supabase } from '../lib/supabaseClient' 


export const useAuthStore = defineStore('auth', {
  state: () => ({
    userLoggedIn: false,
    userEmail: "",
    userFullName: "",
  }),
  getters: {
    getUserLoggedIn: (state) => state.userLoggedIn,
    getUserEmail: (state) => state.userEmail,
    getUserFullName: (state) => state.userFullName,
  },
  actions: {
    async checkUserLoggedIn() {
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
            this.userLoggedIn = true
            this.userEmail = user.user_metadata.email
            this.userFullName = user.user_metadata.full_name
            console.log('There is an active session', user);
            console.log(this.userEmail, this.userFullName)
        } else {
            this.userLoggedIn = false
            console.log('No active session');
        }
      },
  },
});
