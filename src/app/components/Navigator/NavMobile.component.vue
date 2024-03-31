<style scoped lang="scss" src="./NavMobile.component.scss" />
<script setup lang="ts">
import { useStore } from '../../../middlewares/store';
import { useRouter } from 'vue-router';
import { openMenu, closeMenu, openAccountMenu } from '../../../helpers/menu';
import { upToTop } from '../../../utils/upToTop';
import Menu from '../Menu/Menu.component.vue';
import userIcon from '../../../assets/svg/user-icon.svg';

const router: any = useRouter();
const store: any = useStore();
var inputValue: string;

function handleInput(e: any) {
  inputValue = e.target.valueM
}

function search(e: string) {
  store.filterItemsByTitle(e)
  router.push(`/home`);
  upToTop();
  closeMenu();
}

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
        <img :src="userIcon" alt="" height="25" @click="openAccountMenu()">
      </div>
    </div>
    <div class="menu-container">
      <Menu></Menu>
    </div>
    <div class="searcher-container mt-5">
      <input type="text" @input="(e) => handleInput(e)">
      <button class="search-button" @click="search(inputValue)">Buscar</button>
    </div>
  </ul>
</template>