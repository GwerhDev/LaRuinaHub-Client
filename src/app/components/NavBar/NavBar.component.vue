<style scoped lang="scss" src="./NavBar.component.scss"/>
<script setup lang="ts">  
  import Menu from '../Menu/Menu.component.vue';
  import AppsMenu from '../AppsMenu/AppsMenu.component.vue';
  import BurgerMenu from '../BurgerMenu/BurgerMenu.component.vue';
  import userIcon from '../../../assets/png/user-icon.png';
  import { useStore } from '../../../middlewares/store';
  import { computed } from 'vue';

  function exit() {
  }
  const store = useStore();
  const currentUser: any = computed(() => store.currentUser);

</script>

<template>
  <div class="nav-container-desk">
    <main class="nav-menu-desk">
      <ul class="nav-menu-ul-desk">
        <div class="d-flex just-cent align-cent">
          <router-link class="d-flex just-cent align-cent" @click="exit()" to='/'>
            <img width="110" src="../../../assets/png/ruina-records-logo.png" alt="">
          </router-link>
        </div>
        <div class="menu-container-desk">
          <AppsMenu></AppsMenu>
        </div>
        <div class="menu-container-desk">
          <Menu></Menu>
          <div class="nav-profile-pic-container">
            <img :src="currentUser?.userData?.profilePic?? userIcon" alt="">
          </div>
        </div>
      </ul>
    </main>
  </div>
  <BurgerMenu/>
</template>