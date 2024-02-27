<template>
  <!-- WEB LAYOUT -->
  <div v-if="!layoutStore.isPhoneLayout">
    <h1>Welcome to HomeView - WEB</h1>
  </div>

  <!-- PHONE LAYOUT -->
  <div v-if="layoutStore.isPhoneLayout">
    <h1>Welcome to HomeView - PHONE</h1>
  </div>
</template>

<script>
import { useLayoutStore } from '@/stores/layoutStore';

export default {
  name: 'HomeView',
  components: {

  },
  setup() {
        const layoutStore = useLayoutStore()
        return { layoutStore }
    },
  data() {
    return {
      isPhoneLayout: false,
    };
  },
  methods: {
  }

};
</script>

<style>
body {
  margin-top: 65px;
  background-color: #eeeeee; /* Example: a light grey background */
}
</style>
