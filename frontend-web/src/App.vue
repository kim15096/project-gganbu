<template>
  <div id="app">
    <div class="app-navbar">
      <Navbar/>
    </div>
    <RouterView /> 
    <Footer />
  </div>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue"
import { useLayoutStore } from './stores/layoutStore';

export default {
  name: 'App',
  components: {
    Footer,
    Navbar,
  },
  data() {
    return {
      isPhoneLayout: false,
    };
  },
  // Detecting phone viewport for webapp
  mounted() {
    const layoutStore = useLayoutStore();
    layoutStore.updateLayout();
    window.addEventListener('resize', layoutStore.updateLayout);
  },
  beforeUnmount() {
    const layoutStore = useLayoutStore();
    window.removeEventListener('resize', layoutStore.updateLayout);
  },

};
</script>

<style scoped>
.app-navbar {
  position: fixed;
  left: 0;
  top: 0; /* To make it stick to the very left of the page */
  width: 100vw; /* Adjust the width as needed */
}
</style>
