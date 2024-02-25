<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <div class="app-navbar">
      <Navbar/>
    </div>
    <RouterView /> 
    <Footer />
  </div>

</template>

<style scoped>
.app-navbar {
  position: fixed;
  left: 0;
  top: 0; /* To make it stick to the very left of the page */
  width: 100vw; /* Adjust the width as needed */
}
</style>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  components: {
    Footer,
    Navbar,
  },
};
</script>
