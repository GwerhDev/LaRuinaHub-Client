<style scoped lang="scss" src="./AccountMenu.component.scss" />
<script setup lang="ts">
import { computed, ref, Ref, onMounted } from 'vue';
import { useStore } from '../../../middlewares/store';
import { getUserToken } from '../../../helpers';
import { CanvasMenuFunction, closeAccountMenu } from '../../../helpers/menu';

const store = useStore();
const token: Ref = ref("");
const currentUser: any = computed(() => store.currentUser);
const logged: any = computed(() => currentUser.value.logged);
const pathAccount: string = '/account/settings/';

CanvasMenuFunction("#account-menu-container");

function logout() { 
  store.logout(), 
  closeAccountMenu(),
  token.value = ""
};

onMounted(() => {
  token.value = getUserToken();
});

</script>

<template>
  <ul class="account-menu-container" id="account-menu-container">
    <li v-if="!logged" class="mr-1 ml-1">
      <router-link class="menu-text" to='/login' @click="closeAccountMenu()">
        Iniciar sesión
      </router-link>
    </li>
    <li v-if="!logged" class="mr-1 ml-1">
      <router-link class="menu-text" to='/register' @click="closeAccountMenu()">
        Registrarse
      </router-link>
    </li>
    <li v-if="logged" class="mr-1 ml-1">
      <router-link class="menu-text" :to="pathAccount + token" @click="closeAccountMenu()">
        Mi cuenta
      </router-link>
    </li>
    <li v-if="logged" class="mr-1 ml-1">
      <router-link class="menu-text" to='/' @click="logout()">
        Cerrar sesión
      </router-link>
    </li>
  </ul>
</template>