<template>
  <!-- WEB LAYOUT -->
  <div v-if="!layoutStore.isPhoneLayout">
  </div>
  
  <!-- PHONE LAYOUT -->
  <div v-if="layoutStore.isPhoneLayout">
    <div class="phone-main">
    <div class="card" style="width: 100%">
      <div class="card-body">      
        <img src="../components/icons/IconGoogle.png" class="card-img-top" alt="...">
        <h5 class="card-title mt-2">{{ authStore.userFullName }}</h5>
        <p class="card-text">{{ authStore.userEmail }}</p>
      </div>
    </div>
    <h3 class="mt-4">My Clubs</h3>
    <hr>
    <!-- Sign Out -->
    <button class="btn btn-outline-danger mt-4" @click="signOut"  style="width: 100%">Sign Out</button>
  </div>
  </div>
</template>

<script>
import { useLayoutStore } from '@/stores/layoutStore';
import { useAuthStore } from '@/stores/authStore';
import { supabase } from '../lib/supabaseClient' 

export default {
  name: "profile",
  setup() {
        const layoutStore = useLayoutStore()
        const authStore = useAuthStore()
        return { layoutStore, authStore }
    },
  
  methods: {
      async signOut() {
      const { error } = await supabase.auth.signOut()

      if (!error){
        console.log("Signed Out!")
        location.reload()
      }

    },
    }
  };
</script>

<style scoped>
.phone-main {
  width: 100vw;
  height: 100vh;
  padding: 16px;
}
.card-img-top{
  width: 20px;
  height: 20px;
}
</style>
