<template>
  <!-- WEB LAYOUT -->
  <div v-if="!layoutStore.isPhoneLayout">
  </div>
  
  <!-- PHONE LAYOUT -->
  <div class="phone-main" v-if="layoutStore.isPhoneLayout">
    <h3 class="mt-4">Upcoming</h3>
    <hr>
    <h3 class="mt-4">Saved</h3>
    <hr>

  </div>
</template>

<script>
import { useLayoutStore } from '@/stores/layoutStore';
import { useAuthStore } from '@/stores/authStore';

export default {
  name: "favorites",
  setup() {
        const layoutStore = useLayoutStore()
        const authStore = useAuthStore()
        return { layoutStore, authStore }
    },
  
  methods: {
    }
  };
</script>


<style scoped>
.phone-main {
  width: 100vw;
  height: 100vh;
  padding: 16px;
}
</style>
