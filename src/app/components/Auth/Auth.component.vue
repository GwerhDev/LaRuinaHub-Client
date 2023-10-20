<style scoped lang="scss" src="./Auth.component.scss"/>
<script setup lang="ts">

import { useStore } from '../../../middlewares/store/index';
import { useRoute, useRouter } from 'vue-router';

const store: any = useStore();
const route: any = useRoute();
const router: any = useRouter();
const userToken: any = route.params.token;

await store.handleUserData(userToken);

router.push("/");

</script>

<template>
  <div class="loader"></div>
</template>