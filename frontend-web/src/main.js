import './assets/main.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import bottomNavigationVue from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(bottomNavigationVue);

app.use(createPinia())

app.use(router)

app.mount('#app')
