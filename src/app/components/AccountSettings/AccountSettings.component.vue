<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '../../../middlewares/store/index';
import defaultImage from '../../../assets/png/user-icon.png';

const store = useStore();
const route = useRoute();
const token = route.params.token;
store.handleUserData(token);

const currentUser = computed(() => store.currentUser);
let id = computed(() => currentUser.value.userData?.id);
let username = computed(() => currentUser.value.userData?.username);
let email = computed(() => currentUser.value.userData?.email);
let profilePic = computed(() => currentUser.value.userData?.profilePic ?? defaultImage);

const editActive = ref(false);
const showSaveCancelButtons = computed(() => editActive.value);

function activeEdit(e: any) {
  e.preventDefault();
  editActive.value = !editActive.value;
  username = currentUser.value.userData?.username;
  email = currentUser.value.userData?.email;
  profilePic = currentUser.value.userData?.profilePic ?? defaultImage;
}

async function handleUpdate(e: any) {
  e.preventDefault();
  if(profilePic === defaultImage) { profilePic = null };
  const formData = { username, email, profilePic };
  try {
    await store.handleUpdateUserData(formData, id.value, token);
    editActive.value = !editActive.value;
    if(profilePic === null) { profilePic = defaultImage };
  } catch (error) {
    console.error(error)
  }

}

</script>

<template>
  <div class="form-container">
    <div class="profile-pic-container">
      <img class="profile-pic" :src="profilePic" alt="" width="300">
    </div>
    <input v-if="editActive" type="file" />
    <h2>Datos del usuario</h2>
    <form class="ul-form">
      <li class="li-form">
        <label>Nombre de usuario</label>
        <input v-model="username" class="input-form" type="text" :disabled="!editActive" />
      </li>
      <li class="li-form">
        <label>Correo electrónico</label>
        <input v-model="email" class="input-form" type="email" :disabled="!editActive" />
      </li>
      <button v-if="!editActive" class="submit-button" @click="activeEdit">Editar mi información</button>
      <div v-show="showSaveCancelButtons" class="edit-buttons-container">
        <button @click="handleUpdate">Guardar cambios</button>
        <button class="cancel-button" @click="activeEdit">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss" src="./AccountSettings.component.scss"></style>