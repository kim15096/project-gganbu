<template>
  <div id="app">
    <Navbar v-if="!layoutStore.isPhoneLayout"/>
    <RouterView /> 
    <Footer />
  </div>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue"
import { useLayoutStore } from './stores/layoutStore';
import { useAuthStore } from './stores/authStore';

const axios_inst = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 1000,
});

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

  data() {
    return {
      isPhoneLayout: false,
    };
  },
  // Detecting phone viewport for webapp
  created() {
    this.authStore.checkUserLoggedIn();
  },
  mounted() {
    this.layoutStore.updateLayout();
    window.addEventListener('resize', this.layoutStore.updateLayout);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.layoutStore.updateLayout);
  },
  methods: {
    // Testing API
    // async getData(){
    //   const response = await axios_inst.get('/get_posts')
    //   console.log(response.data)
    // }
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
  padding: 8px;
}
</style>
