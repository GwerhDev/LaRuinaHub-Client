<style scoped lang="scss" src="./Menu.component.scss"/>
<script setup lang="ts">
  import { computed } from 'vue';
  import { useStore } from '../../../middlewares/store';
  import { getUserToken } from '../../../helpers';

  const store = useStore();
  const currentUser: any = computed(() => store.currentUser);
  let logged: any = computed(() => currentUser.value.logged);
  let token: any = getUserToken() || computed(() => store.userToken);
  const pathAccount: string = '/account/settings/';

  function logout() {store.logout()};

</script>

<template>
  <li v-if="!logged" class="mr-1 ml-1">
    <router-link class="menu-letters" to='/login'>
      Iniciar sesión
    </router-link>
  </li>
  <li v-if="!logged" class="mr-1 ml-1">
    <router-link class="menu-letters" to='/register'>
      Registrarse
    </router-link>
  </li>
  <li v-if="logged" class="mr-1 ml-1">
    <router-link class="menu-letters" :to="pathAccount + token">
      Mi cuenta
    </router-link>
  </li>
  <li v-if="logged" class="mr-1 ml-1">
    <router-link class="menu-letters" to='/' @click="logout()">
      Cerrar sesión
    </router-link>
  </li>
</template>