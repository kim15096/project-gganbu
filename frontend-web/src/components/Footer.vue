
<template>
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <div v-if="!layoutStore.isPhoneLayout" class="footer">
        <hr class="m-0" style="padding-bottom: 4px;">
         <a class="ms-2">LikeLion Project: GGANBU</a>
    </div>
    <div v-else-if="layoutStore.isPhoneLayout && authStore.userLoggedIn" class="bottomNav">
        <WindowsBottomNavigation :options="options" border-color='#555555' v-model="selected" />
    </div>
  </template>
  
  <script>
  import { useLayoutStore } from '@/stores/layoutStore';
  import { useAuthStore } from '@/stores/authStore';
  import { WindowsBottomNavigation } from "bottom-navigation-vue";
  import "bottom-navigation-vue/dist/style.css";

  export default {
    components: { WindowsBottomNavigation },
    name: 'Footer',
    // State management intialization
    setup() {
        const layoutStore = useLayoutStore()
        const authStore = useAuthStore()
        return { layoutStore, authStore }
    },
    data: () => ({
      selected: 1,
      options: [
        { id: 1, icon: 'fa fa-home fa', path: { name: "home", query:""}, color: '#555555' },
        {
          id: 2,
          icon: 'fa fa-search fa',
          path: { name: "search", query:""},
          color: '#555555',
        },
        { id: 3, icon: 'fa fa-heart fa', path: { name: "favorites", query:""}, color: '#555555' },
        { id: 4, icon: 'fa fa-user fa',  path: { name: "profile", query:""}, color: '#555555' }
      ],
    }),

  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #FFFFFF;
    position: fixed;
    font-size: 12px;
    width: 100%;
    height: 30px;
    bottom: 0;
    left: 0;
  }
  .bottomNav {
    background-color: #FFFFFF;
    position: fixed;
    font-size: 12px;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  </style>
  