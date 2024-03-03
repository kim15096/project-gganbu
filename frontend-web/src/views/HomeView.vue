<script>
import example1 from '@/assets/example1.jpg'
import example2 from '@/assets/example2.jpg'
import { useLayoutStore } from '@/stores/layoutStore';

import { ref } from 'vue'

export default {
  name: "home",
  setup() {
        const layoutStore = useLayoutStore()
        const currentDate = ref(new Date().toISOString().slice(0,10))
        return { layoutStore, currentDate }
    },
  }

</script>

<template>
  <!-- WEB LAYOUT -->
  <div v-if="!layoutStore.isPhoneLayout">
    <h1>Please use the web app on you phone!</h1>
  </div>

  <!-- PHONE-LAYOUT -->
  <div class="phone-main p-3" v-if="layoutStore.isPhoneLayout">
  <div class="card-container">
    <div class="card">
      <img src="../assets/example1.jpg" alt="Example Image" class="card-image">
      <div class="card-body">
        <button class="btn btn-light">💾 Save </button>
        <button class="btn btn-success">🥳 Join the party</button>
      </div>
      <div class="card-date ms-4">{{ currentDate }}</div>
    </div>

    <div class="card">
      <img src="../assets/example2.jpg" alt="Example Image" class="card-image">
      <div class="card-body">
        <button class="btn btn-light">💾 Save </button>
        <button class="btn btn-success">🥳 Join the party</button>
      </div>
      <div class="card-date ms-4">{{ currentDate }}</div>
    </div>
  </div>
</div>
</template>


<style scoped>
.phone-main {
  width: 100%;
  height: 100%;
}
.card-container {
  padding-bottom: 50px;
}

.card {
  max-width: 500px;
  margin-bottom: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: auto;
}

.card-body {
  padding: 15px;
  display: flex;
  justify-content: space-between;
}
</style>