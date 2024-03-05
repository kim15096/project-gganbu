<template>
  <!-- WEB LAYOUT -->
  <div v-if="!layoutStore.isPhoneLayout" class="app-navbar">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container me-4">
      <a class="navbar-brand" href="/">
        
        <img class="pb-1" src="./icons/IconLogo.png" style="width:45px; height: 45px">
        <text class="fs-5 fw-bold">GGANBU</text>
      </a>
      <a href="/signup" style="margin-left: auto;">Sign In</a>

    </div>
  </nav>
</div>

<!-- PHONE LAYOUT -->
<div v-if="layoutStore.isPhoneLayout" class="app-navbar">
  <nav class="navbar mobile-navbar bg-light">
    <div class="container">
      <a class="navbar-brand" href="/"> 
        <img class="pb-1" src="./icons/IconLogo.png" style="width:50px; height: 50px">
        <text class="brand-text fw-bold">ganbu</text>
      </a>
    </div>
  </nav>
</div>
</template>

<script>
import { useLayoutStore } from '@/stores/layoutStore';
import { useAuthStore } from '@/stores/authStore';

export default {
  name: "Navbar",
  setup() {
        const layoutStore = useLayoutStore()
        const authStore = useAuthStore()
        return { layoutStore, authStore }
    },
};
</script>

<style scoped>
.navbar.navbar-light{
  background-color: white!important;
  box-shadow: 0 2px 2px 0 rgba(37, 37, 37, 0.1);
  height: 65px;
}  
.mobile-navbar{
  background-color: #ffffff!important;
  box-shadow: 0 2px 2px 0 rgba(99, 99, 99, 0.1);
  height: 65px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}  
.container {
  margin-left:5px;
  max-width: 100%;
}
.app-navbar {
  position: fixed;
  left: 0;
  top: 0; /* To make it stick to the very left of the page */
  width: 100vw; /* Adjust the width as needed */
}

</style>
