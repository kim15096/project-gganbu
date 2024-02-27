<template>
  <!-- WEB LAYOUT -->
  <div v-if="!layoutStore.isPhoneLayout" class="app-navbar">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container me-4">
      <a class="navbar-brand" href="/">
        <text class="fw" style="color: #000000; font-weight: 600;">🤙 GGANBU</text>
        <text class="fs-5 ms-3">UC Davis</text>
      </a>
      <a href="/signup" style="margin-left: auto;">Sign In</a>

    </div>
  </nav>
</div>

<!-- PHONE LAYOUT -->
<div v-if="layoutStore.isPhoneLayout" class="app-navbar">
  <nav class="navbar navbar-expand-lg mobile-navbar bg-light">
    <div class="container">
      <a class="navbar-brand" href="/"> 
        <text class="fw" style="color: #000000; font-weight: 600;">🤙 GGANBU</text>
      </a>
      <a href="/signup" style="margin-left:auto;">Sign In</a>

    </div>
  </nav>
</div>
</template>

<script>
import { useLayoutStore } from '@/stores/layoutStore';

export default {
  name: "Navbar",
  setup() {
        const layoutStore = useLayoutStore()
        return { layoutStore }
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
  background-color: white!important;
  box-shadow: 0 2px 2px 0 rgba(37, 37, 37, 0.1);
  height: 65px;
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
