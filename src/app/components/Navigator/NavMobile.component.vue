<style scoped lang="scss" src="./NavMobile.component.scss" />
<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '../../../middlewares/store';
import { openMenu, closeMenu, openAccountMenu, openAppMenu } from '../../../helpers/menu';
import Menu from '../Menu/Menu.component.vue';
import userIcon from '../../../assets/svg/user-icon.svg';
import appmenuIcon from '../../../assets/svg/appmenu-icon.svg';

const store: any = useStore();
const currentUser: any = computed(() => store.currentUser);

</script>

<template>
  <ul class="nav-menu-ul">
    <div class="d-flex align-cent logo-container">
      <div class="d-flex align-cent logo-cont">
        <div class="burger-menu-container">
          <img src="../../../assets/svg/icon-burger-menu.svg" @click="openMenu()" alt="">
        </div>
        <div class="close-menu-container" alt="">
          <img src="../../../assets/svg/close-icon.svg" @click="closeMenu()" alt="">
        </div>
        <router-link class="d-flex align-cent logo-image-container" to='/'>
          <img src="../../../assets/png/ruina-records-logo.png" @click="closeMenu()" width="100" alt="">
        </router-link>
      </div>

      <div class="user-button">
        <img :src="appmenuIcon" width="22" alt="" @click="openAppMenu()">
        <img v-if="!currentUser?.userData?.profilePic" :src="userIcon" alt="" width="25" @click="openAccountMenu()">
        <img class="profile-pic" v-if="currentUser?.userData?.profilePic" :src="currentUser?.userData?.profilePic" @click="openAccountMenu()" alt="">
      </div>
    </div>
    <div class="menu-container">
      <Menu></Menu>
    </div>
  </ul>
</template>