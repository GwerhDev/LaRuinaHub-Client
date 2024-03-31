<style scoped lang="scss" src="./AccountMenu.component.scss" />
<script setup lang="ts">
import { computed, ref, Ref, onMounted, watch } from 'vue';
import { useStore } from '../../../middlewares/store';
import { getUserToken } from '../../../helpers';
import { CanvasMenuFunction, closeAccountMenu, closeMenu } from '../../../helpers/menu';
import userIcon from '../../../assets/svg/user-icon.svg'

const store = useStore();
const token: Ref = ref("");
const currentUser: any = computed(() => store.currentUser);
const logged: any = computed(() => currentUser.value.logged);
const pathAccount: string = '/account/settings/';
const accountUrl: Ref = ref("")
const getAccountUrl = () => {
  accountUrl.value = pathAccount + token.value
}

getAccountUrl();

CanvasMenuFunction("#account-menu-container");

function logout() {
  store.logout();
  closeMenu();
  closeAccountMenu();
  token.value = ""
};

function select() {
  closeAccountMenu();
  closeMenu();
}

onMounted(() => {
  token.value = getUserToken();

});

</script>

<template>
  <ul class="account-menu-container" id="account-menu-container">
    <li v-if="!logged">
      <router-link class="menu-text principal-button" to='/login' @click="select()">
        Iniciar sesión
      </router-link>
    </li>
    <li v-if="!logged">
      <router-link class="menu-text secondary-button" to='/register' @click="select()">
        Registrarse
      </router-link>
    </li>
    <li class="current-user-data" v-if="logged">
      <h2>{{ currentUser?.userData?.username }}</h2>
      <img :src="currentUser?.userData?.profilePic ?? userIcon" alt="">
      <p>{{ currentUser?.userData?.role }}</p>
    </li>
    <div class="separator"></div>
    <li v-if="logged">
      <router-link class="menu-text principal-button" :to="accountUrl" @click="select()">
        Administrar cuenta
      </router-link>
    </li>
    <li v-if="logged">
      <router-link class="menu-text secondary-button" to='/' @click="logout()">
        Cerrar sesión
      </router-link>
    </li>
  </ul>
</template>