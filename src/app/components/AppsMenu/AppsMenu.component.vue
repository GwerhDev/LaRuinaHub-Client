vue
<style scoped lang="scss" src="./AppsMenu.component.scss" />
<script setup lang="ts">
import { Ref, computed, ref, watch } from 'vue';
import { closeMenu } from '../../../helpers/menu';
import { useStore } from '../../../middlewares/store';

const urlLaRuinaTv: Ref = ref("");
const urlLaRuinaPlay: Ref = ref("");
const store: any = useStore();
const token: Ref = computed(() => store.userToken);

const updateUrls = () => {
  urlLaRuinaTv.value = token.value ? 'https://tv.laruina.cl/#/auth?token=' + token.value : 'https://tv.laruina.cl/';
  urlLaRuinaPlay.value = token.value ? 'https://play.laruina.cl/#/auth?token=' + token.value : 'https://play.laruina.cl/';
};

updateUrls();

watch(token, () => {
  updateUrls();
});

</script>

<template>
  <ul>
    <li class="mr-1 ml-1">
      <router-link class="menu-text" to="/" @click="closeMenu()">
        Hub
      </router-link>
    </li>
    <li class="mr-1 ml-1">
      <a class="menu-text" :href="urlLaRuinaTv" @click="closeMenu()">
        TV
      </a>
    </li>
    <li class="mr-1 ml-1">
      <a class="menu-text" :href="urlLaRuinaPlay" @click="closeMenu()">
        Play
      </a>
    </li>
    <li class="mr-1 ml-1">
      <a class="menu-text" href="https://merch.laruina.cl" target="_blank" @click="closeMenu()">
        Merch
      </a>
    </li>
  </ul>
</template>