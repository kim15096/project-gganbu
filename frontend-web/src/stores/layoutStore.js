import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    isPhoneLayout: false,
  }),
  getters: {
    // Optional if direct state access is sufficient
    getIsPhoneLayout: (state) => state.isPhoneLayout,
  },
  actions: {
    updateLayout() {
      this.isPhoneLayout = window.innerWidth <= 600;
    },
  },
});
