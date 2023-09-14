import { defineStore } from 'pinia';
import { getUserData, signupInner } from '../services';

interface storeState {
  userData: any,
}

export const useStore = defineStore('store', {
  state: (): storeState => ({
    userData: {},
  }),

  actions: {
    async handleUserToken(data: any) {
      const userToken = await signupInner(data);
      const url = '/account/settings/' + userToken;
      return url;
    },
    async handleUserData(token: string) {
      this.userData = await getUserData(token);
    }
  }
  
});