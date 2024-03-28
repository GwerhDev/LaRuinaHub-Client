<script setup lang="ts">
  import { API_URL } from '../../../middlewares/misc/const';
  import { useStore } from '../../../middlewares/store/index'; 
  import { useRouter } from 'vue-router';
  import { onMounted, computed } from 'vue';
  import { getUserToken } from '../../../helpers';
  import googleIcon from '../../../assets/png/google-icon.png';

  const store: any = useStore(); 
  const router: any = useRouter();
  const apiUrl: string = API_URL + "/signup-google";
  const currentUser: any = computed(() => store.currentUser);

  let username = "";
  let email = "";
  let password = "";
  let token = getUserToken();

  onMounted(() => {
    if(!currentUser?.value.error && token) {
      router.push('/account/settings/' + token);
    }
  });

  async function handleRegister(e: any) {
    e.preventDefault();
    const formData: any = { username, email, password };
    try {
      const path: any = await store.handleRegister(formData);
      router.push(path);
    } catch (error) {
      console.error(error)
    }
  }

</script>

<template>
  <div class="form-container">
    <div class="logo-container">
      <img class="logo" src="../../../assets/png/ruina-records-logo.png" alt="" width="300">
    </div>
    <p>Rellena los siguientes campos:</p>
    <form class="ul-form">
      <li class="li-form">
        <label>Nombre de usuario</label>
        <input v-model="username" class="input-form" type="text" />
      </li>
      <li class="li-form">
        <label>Correo electrónico</label>
        <input v-model="email" class="input-form" type="email" />
      </li>
      <li class="li-form">
        <label>Contraseña</label>
        <input v-model="password" class="input-form" type="password" />
      </li>
      <button class="submit-button" @click="handleRegister">Registrarse</button>
    </form>
    <div class="separator-container">
      <div class="separator"></div>
      <span>O</span>
      <div class="separator"></div>
    </div>
    <p>puedes crear una cuenta mediante:</p>
    <a :href="apiUrl">
      <div class="google-button">
        <img :src="googleIcon" alt="">
        Google
      </div>
    </a>
  </div>
</template>

<style scoped lang="scss" src="./SignUp.component.scss">
</style>