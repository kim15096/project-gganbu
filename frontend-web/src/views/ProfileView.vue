<template>
  <!-- WEB LAYOUT -->
  <div v-if="!layoutStore.isPhoneLayout">
  </div>
  
  <!-- PHONE LAYOUT -->
  <div v-if="layoutStore.isPhoneLayout">
    <div class="card mt-4" style="width: 100%">
      <div class="card-body">      
        <img src="../components/icons/IconGoogle.png" class="card-img-top" alt="...">
        <h5 class="card-title mt-2">{{ authStore.userFullName }}</h5>
        <p class="card-text">{{ authStore.userEmail }}</p>
      </div>
    </div>
    <!-- Sign Out -->
    <button class="btn btn-outline-danger mt-4" @click="signOut"  style="width: 100%">Sign Out</button>
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
.card-img-top{
  width: 24px;
  height: 24px;
}
</style>
