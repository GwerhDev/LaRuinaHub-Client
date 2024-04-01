<style scoped lang="scss" src="./NavDesktop.component.scss" />
<script setup lang="ts">
import userIcon from '../../../assets/svg/user-icon.svg';
import { openAccountMenu } from '../../../helpers/menu';
import { useStore } from '../../../middlewares/store';
import { computed } from 'vue';
import Menu from '../Menu/Menu.component.vue';

const store = useStore();
const currentUser: any = computed(() => store.currentUser);

</script>

<template>
  <main class="nav-menu-desk">
    <ul class="nav-menu-ul-desk">
      <div class="icon">
        <div class="d-flex just-cent align-cent">
          <router-link class="d-flex just-cent align-cent" to='/'>
            <img width="110" src="../../../assets/png/ruina-records-logo.png" alt="">
          </router-link>
        </div>
      </div>
      <Menu />
      <div class="menu-container-desk icon">
        <div class="nav-profile-pic-container" @click="openAccountMenu()">
          <img v-if="!currentUser?.userData?.profilePic" :src="userIcon" alt="" width="30">
          <img class="profile-pic" v-if="currentUser?.userData?.profilePic" :src="currentUser?.userData?.profilePic" alt="">
        </div>
      </div>
    </ul>
  </main>
</template>