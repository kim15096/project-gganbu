<template>
  <!-- WEB LAYOUT -->
  <div v-if="!layoutStore.isPhoneLayout">
  </div>
  
  <!-- PHONE LAYOUT -->
  <div v-if="layoutStore.isPhoneLayout">
    <div class="card" style="width: 100%">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
import { useLayoutStore } from '@/stores/layoutStore';

export default {
  name: "profile",
  setup() {
        const layoutStore = useLayoutStore()
        return { layoutStore }
    },
  };

</script>
<style scoped>
</style>
