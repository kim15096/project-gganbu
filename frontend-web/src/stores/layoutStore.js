import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    isPhoneLayout: false,
  }),
  getters: {
    getIsPhoneLayout: (state) => state.isPhoneLayout,
  },
  actions: {
    updateLayout() {
      this.isPhoneLayout = window.innerWidth <= 600;
    },
  },
});
