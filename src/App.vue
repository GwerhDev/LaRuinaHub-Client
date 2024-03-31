<script setup lang="ts"> 
  import NavBar from './app/components/Navigator/NavBar.component.vue'; 
  import { useStore } from './middlewares/store/index';

  const store: any = useStore();
  const token: any = localStorage.getItem('userToken');
  store.handleUserData(token);
</script> 
 
<template> 
  <router-view/> 
  <template v-if="$route.path !== '/oauth/chooseaccount/' && !$route.path.startsWith('/oauth/chooseaccount/')">
    <nav-bar/> 
  </template>
</template>./app/components/Navigator/NavBar.component.vue./app/components/Navigator/NavBar.component.vue