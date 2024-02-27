<template>
  <div id="app">
    <Navbar />
    <RouterView class="mt-3" /> 
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
  methods: {
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
}
</style>
