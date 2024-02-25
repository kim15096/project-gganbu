
<template>
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <div v-if="!layoutStore.isPhoneLayout" class="footer">
        <hr class="m-0" style="padding-bottom: 4px;">
         <a class="ms-2">LikeLion Project: GGANBU</a>
    </div>
    <div v-else class="bottomNav">
        <HillBottomNavigation :options="options" v-model="selected" />
    </div>
  </template>
  
  <script>
  import { useLayoutStore } from '@/stores/layoutStore';
  import { HillBottomNavigation } from "bottom-navigation-vue";
  import "bottom-navigation-vue/dist/style.css";

  export default {
    components: { HillBottomNavigation },
    name: 'Footer',
    // State management intialization
    setup() {
        const layoutStore = useLayoutStore()
        return { layoutStore }
    },
    data: () => ({
      selected: 1,
      options: [
        { id: 1, icon: 'fa fa-home fa-2x', color: '#5639af' },
        {
          id: 2,
          icon: 'fa fa-search fa-2x',
          color: '#ac4793',
        },
        { id: 3, icon: 'fa fa-heart fa-2x', color: '#e2a93a' },
        { id: 4, icon: 'fa fa-gear fa-2x',  color: '#4493a7' }
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
  