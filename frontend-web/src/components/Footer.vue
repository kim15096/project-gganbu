
<template>
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <div v-if="!layoutStore.isPhoneLayout" class="footer">
        <hr class="m-0" style="padding-bottom: 4px;">
         <a class="ms-2">LikeLion Project: GGANBU</a>
    </div>
    <div v-else-if="layoutStore.isPhoneLayout && authStore.userLoggedIn" class="bottomNav">
        <SwipeBottomNavigation swiper-color='#E66000' icon-color="#E66000" :options="options" v-model="selected" />
    </div>
  </template>
  
  <script>
  import { useLayoutStore } from '@/stores/layoutStore';
  import { useAuthStore } from '@/stores/authStore';
  import { SwipeBottomNavigation } from "bottom-navigation-vue";
  import "bottom-navigation-vue/dist/style.css";

  export default {
    components: { SwipeBottomNavigation },
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
        { id: 1, icon: 'fa fa-home fa-lg', path: { name: "home", query:""}, title:"Home"},
        {
          id: 2,
          icon: 'fa fa-search fa-lg',
          path: { name: "search", query:""},
          title: 'Search',
        },
        { id: 3, icon: 'fa fa-heart fa-lg', path: { name: "favorites", query:""}, title: 'Favorites' },
        { id: 4, icon: 'fa fa-user fa-lg',  path: { name: "profile", query:""}, title: 'Profile' }
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
  