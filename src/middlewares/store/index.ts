import { defineStore } from 'pinia';
import { getUserData, signupInner, updateUserData } from '../services';

interface storeState {
  currentUser: any,
}

export const useStore = defineStore('store', {
  state: (): storeState => ({
    currentUser: {},
  }),

  actions: {
    async handleUserToken(data: any) {
      const userToken = await signupInner(data);
      const url = '/account/settings/' + userToken;
      return url;
    },
    async handleUserData(token: string) {
      this.currentUser = await getUserData(token);
    },
    async handleUpdateUserData(formData: any, id: any, token: any) {
      await updateUserData(formData, id, token);
      this.currentUser = await getUserData(token);
    },
  }
  
});