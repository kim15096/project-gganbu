<template>
  <div class="signup-container">
    <h1 class="mt-5">Let's get started!</h1>
    <button class="btn btn-dark mt-4 p-3" @click="signInWithGoogle"><img class="icon me-2" src="../components/icons/IconGoogle.png"> Sign in with Google</button>
  </div>
</template>

<script>
import { supabase } from '../lib/supabaseClient' 

export default {
  name: 'SignUp',

  methods: {
    async signInWithGoogle() {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      })
    }, 
  }
}
</script>

<style scoped>
body {
  
}
.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 22px;
  height: 22px;
}
</style>
