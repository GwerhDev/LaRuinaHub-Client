<script setup lang="ts"> 
  import NavBar from './app/components/NavBar/NavBar.component.vue'; 
  import { useStore } from './middlewares/store/index';

  const store = useStore();
  const token = localStorage.getItem('userToken');
  store.handleUserData(token);
</script> 
 
<template> 
  <router-view/> 
  <nav-bar/> 
</template>