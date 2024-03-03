<template>
  <div id="app">
    <Navbar v-if="!layoutStore.isPhoneLayout"/>
    <RouterView />
    <Footer />
  </div>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue"
import { useLayoutStore } from './stores/layoutStore';
import { useAuthStore } from './stores/authStore';
import { supabase } from './lib/supabaseClient';

export default {
  name: 'App',
  components: {
    Footer,
    Navbar,
  },

  setup() {
        const layoutStore = useLayoutStore()
        const authStore = useAuthStore()
        return { layoutStore, authStore }
    },
  mounted() {
    // Auth Listener & check if first time signing in 
    const hasSignedIn = localStorage.getItem('hasSignedIn');
    
    const checkToken = localStorage.getItem('sb-erkrnapudejsowehnquz-auth-token')
    
    if (checkToken){
      this.checkSupabaseUser()
    }
    
    supabase.auth.onAuthStateChange((event, session) => {
      if (session && session.provider_token) {
        console.log("HELLO")
        this.authStore.userSignedIn()
        this.authStore.setName(session.user.user_metadata.full_name)
        this.authStore.setEmail(session.user.email)

        if (!hasSignedIn || hasSignedIn == null){
          this.checkUserInDatabase(session)
        }
      }
      
      if (event === 'SIGNED_OUT') {
        this.authStore.userSignedOut()
        localStorage.removeItem('hasSignedIn');
      }
})

    // Detecting phone viewport for webapp
    this.layoutStore.updateLayout();
    window.addEventListener('resize', this.layoutStore.updateLayout);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.layoutStore.updateLayout);
  },
  methods: {
    async checkSupabaseUser(){
      const { data: { user } } = await supabase.auth.getUser()
      if (user){
        this.authStore.userSignedIn()
        this.authStore.setName(user.user_metadata.full_name)
        this.authStore.setEmail(user.email)
      }
    },
    async checkUserInDatabase(session){
      const { data, error } = await supabase
            .from('Users')  // Replace with your actual table name
            .select()
            .eq('uid', session.user.id)
            .single()
      
      if (!data){
        const { data, error } = await supabase
          .from('Users')
          .upsert({ uid: session.user.id, 
              full_name: session.user.user_metadata.full_name, 
             user_email: session.user.email })
          .select()
      }
      localStorage.setItem('hasSignedIn', 'true');
    }
    
  }

};
</script>

<!-- Global Styles -->
<style>
a {
  text-decoration: none;
  color: black;
}

#app {
  display: flex;
  padding: 0px;
}

body {
  background-color: #f1f1f1;
  margin: 0;
}

</style>
