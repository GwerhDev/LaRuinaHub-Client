import { defineStore } from 'pinia';
import { getUserData, loginInner, signupInner, updateUserData } from '../services';

interface storeState {
  currentUser: any,
}

export const useStore = defineStore('store', {
  state: (): storeState => ({
    currentUser: {},
  }),

  actions: {
    logout() {
      localStorage.clear();
      this.currentUser = {};
    },
    async handleRegister(data: any) {
      const userToken = await signupInner(data);
      localStorage.setItem('userToken', userToken);
      const url = '/account/settings/' + userToken;
      return url;
    },
    async handleLogin(data: any) {
      const userToken = await loginInner(data);
      localStorage.setItem('userToken', userToken);
      const url = '/account/settings/' + userToken;
      return url;
    },
    async handleUserData(token: any) {
      this.currentUser = await getUserData(token);
    },
    async handleUpdateUserData(formData: any, id: any, token: any) {
      await updateUserData(formData, id, token);
      this.currentUser = await getUserData(token);
    },
  }
  
});