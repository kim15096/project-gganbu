import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userLoggedIn: false,
    userEmail: "",
    userFullName: "",
  }),
  getters: {
    getUserLoggedIn: (state) => state.userLoggedIn,
    getUserEmail: (state) => state.userEmail,
    getUserFullName: (state) => state.userFullName,
  },
  actions: {
    userSignedIn() {
        this.userLoggedIn = true
      },
    userSignedOut() {
        this.userLoggedIn = false
    },
    setName(name) {
      this.userFullName = name
    },
    setEmail(email) {
      this.userEmail = email
    }
  },
});
