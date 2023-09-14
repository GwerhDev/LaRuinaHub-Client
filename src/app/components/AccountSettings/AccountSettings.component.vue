<script setup lang="ts">
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useStore } from '../../../middlewares/store/index'; 

const store: any = useStore(); 

const route = useRoute();
const token = route.params.token;

const editActive = false;

console.log(token)

let username = "";
let email = "";
let password = "";

store.handleUserData(token);

async function handleUpdate(e: any) {
  e.preventDefault();
}
</script>

<template>
  <div class="form-container">
    <div class="profile-pic-container">
      <img class="profile-pic" src="" alt="" width="300">
    </div>
    <p>Datos del usuario</p>
    <form class="ul-form">
      <li class="li-form">
        <label>Nombre de usuario</label>
        <input v-model="username" class="input-form" type="text" :disabled="!editActive"/>
      </li>
      <li class="li-form">
        <label>Correo electrónico</label>
        <input v-model="email" class="input-form" type="email" :disabled="!editActive"/>
      </li>
      <li class="li-form">
        <label>Contraseña</label>
        <input v-model="password" class="input-form" type="password" :disabled="!editActive"/>
      </li>
      <button class="submit-button" @click="handleUpdate">Actualizar</button>
    </form>
  </div>
</template>

<style scoped lang="scss" src="./AccountSettings.component.scss">
</style>