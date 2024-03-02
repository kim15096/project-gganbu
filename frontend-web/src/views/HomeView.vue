<script setup>
import example1 from '@/assets/example1.jpg'
import example2 from '@/assets/example2.jpg'

import { ref } from 'vue'
const currentDate = ref(new Date().toISOString().slice(0,10))

</script>

<template>
  <div class="card-container">
    <div class="card">
      <img :src="example1" alt="Example Image" class="card-image">
      <div class="card-body">
        <button class="likes-btn">❤️ {{ likes }} likes </button>
        <button class="comments-btn">💬 {{ comments }} comments</button>
        <button class="save-btn">💾 {{ save }} save</button>
        <div class="button-container">
          <button class="join-party-btn">🥳 {{ party }} Join the party</button>
        </div>
      </div>
      <div class ="card-date">{{ currentDate }}</div>
    </div>
    <div class="divider"></div>
    <div class="card">
      <img :src="example2" alt="Example Image" class="card-image">
      <div class="card-body">
        <button class="likes-btn">❤️ {{ likes }} likes </button>
        <button class="comments-btn">💬 {{ comments }} comments</button>
        <button class="save-btn">💾 {{ save }} save</button>
        <div class="button-container">
          <button class="join-party-btn">🥳 {{ party }} Join the party</button>
        </div>
      </div>
      <div class ="card-date">{{ currentDate }}</div>
    </div>
  </div>
</template>


<style>
body {
  background-color: #efefef; /* Example: a light grey background */
}
.card {
  max-width: 500px;
  margin: 20px auto;
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
}

.likes, .comments,  {
  margin: 0;
  font-weight: bold;
}

.button-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
}
.likes-btn{
  background-color: #4CAF50; 
  border: none;
  color: white;
  padding: 10px 19px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px; 
}
.likes-btn:hover {
  background-color: #45a049
}
.comments-btn {
  background-color: #4CAF50; 
  border: none;
  color: white;
  padding: 10px 19px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px; 
}
.comments-btn:hover{
  background-color: #45a049
}
.save-btn {
  background-color: #4CAF50; 
  border: none;
  color: white;
  padding: 10px 19px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px; 
}
.save-btn:hover{
  background-color: #45a049
}

.join-party-btn{
  background-color: #4CAF50; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px; 
}

.join-party-btn:hover {
  background-color: #45a049
}
</style>