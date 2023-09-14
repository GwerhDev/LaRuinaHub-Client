<script setup lang="ts"> 
  import NavBar from './app/components/NavBar/NavBar.component.vue'; 
  import { useStore } from './middlewares/store/index';

  const store: any = useStore();
  const token: any = localStorage.getItem('userToken');
  store.handleUserData(token);
</script> 
 
<template> 
  <router-view/> 
  <nav-bar/> 
</template>