<style scoped lang="scss" src="./Menu.component.scss"/>
<script setup lang="ts">
  import { computed } from 'vue';
  import { useStore } from '../../../middlewares/store';
  import { getUserToken } from '../../../helpers';
import { closeMenu } from '../../../helpers/menu';

  const store = useStore();
  const currentUser: any = computed(() => store.currentUser);
  let logged: any = computed(() => currentUser.value.logged);
  let token: any = computed(() => store.userToken) || getUserToken();
  const pathAccount: string = '/account/settings/';

  function logout() { store.logout(), closeMenu() };

</script>

<template>
  <li v-if="!logged" class="mr-1 ml-1">
    <router-link class="menu-letters" to='/login' @click="closeMenu()">
      Iniciar sesión
    </router-link>
  </li>
  <li v-if="!logged" class="mr-1 ml-1">
    <router-link class="menu-letters" to='/register' @click="closeMenu()">
      Registrarse
    </router-link>
  </li>
  <li v-if="logged" class="mr-1 ml-1">
    <router-link class="menu-letters" :to="pathAccount + token" @click="closeMenu()">
      Mi cuenta
    </router-link>
  </li>
  <li v-if="logged" class="mr-1 ml-1">
    <router-link class="menu-letters" to='/' @click="logout()">
      Cerrar sesión
    </router-link>
  </li>
</template>