<script>
import example1 from '@/assets/example1.jpg'
import example2 from '@/assets/example2.jpg'
import { useLayoutStore } from '@/stores/layoutStore';
import axiosInstance from '@/lib/axiosInstance'
import { ref, onMounted } from 'vue'


export default {
  name: "home",
  setup() {
        const layoutStore = useLayoutStore()
        const currentDate = ref(new Date().toISOString().slice(0,10))

        const cardList = ref([]);
        
        const fetchData = async () => {
          try {
            const {data} = await axiosInstance.get('/get_posts', {
              headers: {
                'Content-Type': 'application/json'
              }
            })
            cardList.value = data;
          } catch (error) {
            console.error('Error fetching data:', error.message);
      }
        };

        onMounted(() => {
          fetchData(); 
        });

        return { layoutStore, currentDate, cardList }
    },
  }

</script>

<template>
  <!-- WEB LAYOUT -->
  <div v-if="!layoutStore.isPhoneLayout">
    <h1>Please use the web app on you phone!</h1>
  </div>

  <!-- PHONE-LAYOUT -->
  <div class="phone-main" v-if="layoutStore.isPhoneLayout">
  <div class="card-container">
    <div v-for="card in cardList" class="card" :key="card.id">
      <img src="../assets/example1.jpg" alt="Example Image" class="card-image">
      <div class="card-bottom">
          <text class="fw-bold fs-6">{{ card.event_title }} </text>
          <text class="event-desc mt-1">{{ card.event_desc }} </text>
           <div class="card-body">
            <button class="btn btn-outline-success btn-sm card-button">💾 Save </button>
            <button class="btn btn-outline-dark btn-sm card-button">🥳 Join the party</button>
          </div>
      </div>

    </div>
  </div>

</div>
</template>


<style scoped>

.event-desc {
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
          line-clamp: 2; 
  -webkit-box-orient: vertical;
}

.phone-main {
  width: 100%;
  height: 100%;
  padding: 35px;
}
.card-container {
  padding-bottom: 75px;
}

.card {
  max-width: 500px;
  margin-bottom: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
}

.card-button {
  font-size: 14px;
}

.card-image {
  width: 100%;
  aspect-ratio : 1 / 1;
}

.card-body {
  padding: 10px 0px 0px 0px;
  display: flex;
  justify-content: space-between;
}

.card-bottom {
  padding: 16px;
  display: flex;
  flex-direction: column;
}
</style>