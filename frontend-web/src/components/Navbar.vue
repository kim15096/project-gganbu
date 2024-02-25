<template>
  <div v-if="!layoutStore.isPhoneLayout" class="app-navbar">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="/">
        <text class="fw-bold" style="color: #000000; font-weight: 600;">GGANBU</text>
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
      </div>  
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
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  height: 60px;
}  
.container {
  margin-left:5px;
}
.app-navbar {
  position: fixed;
  left: 0;
  top: 0; /* To make it stick to the very left of the page */
  width: 100vw; /* Adjust the width as needed */
}
</style>
