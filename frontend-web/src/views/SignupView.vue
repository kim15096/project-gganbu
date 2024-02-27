<template>
  <div class="signup-container">
    <h1>Let's get started!</h1>
    <button class="btn btn-dark mt-4" @click="signInWithGoogle"><img class="icon me-2" src="../components/icons/IconGoogle.png"> Sign in with Google</button>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  methods: {
    async signInWithGoogle(){
      console.log("pressed!")
    }
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
