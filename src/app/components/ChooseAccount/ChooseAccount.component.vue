
import { useRouter } from 'vue-router';
<script setup lang="ts">
  import { getUserToken } from '../../../helpers';
  import { useRoute } from 'vue-router';
  import { useStore } from '../../../middlewares/store';
  import { computed, onMounted } from 'vue';

  const store = useStore();
  const route: any = useRoute();
  const currentUser: any = computed(() => store.currentUser);
  const userToken: any = computed(() => store.userToken) || getUserToken();
  const logged: any = computed(() => currentUser.value.logged);
  const profilePic: any = computed(() => currentUser.value.userData.profilePic);
  const email: any = computed(() => currentUser.value.userData.email);
  const username: any = computed(() => currentUser.value.userData.username);
  const uri: any = "https://" + route.params.redirect_uri;
  const redirectUrl = uri + "/auth?token=" + getUserToken();

  function selectAccount() {
    window.location.href = redirectUrl;
  }

</script>

<template>
  <div class="list-container">
    <span>Iniciar sesión con La Ruina Hub</span>
    <div>
      <h2>Selecciona una cuenta</h2>
      <h3>para ir a <a :href="uri">{{uri}}</a></h3>
    </div>
    <div v-if="logged" class="account-container" @click="selectAccount">
      <div class="profilepic-container">
        <img :src="profilePic">
      </div>
      <div class="data">
        {{ username }} <br>
        {{ email }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./ChooseAccount.component.scss">
</style>