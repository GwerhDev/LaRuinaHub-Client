<script setup lang="ts">
  import logo from "../../../assets/png/ruina-records-logo.png";
  import streamingIcon from "../../../assets/png/streaming-icon.png";
  import musicIcon from "../../../assets/svg/music-icon.svg";
  import cartIcon from "../../../assets/png/cart-icon.png";

  import { computed } from 'vue';
  import { useStore } from '../../../middlewares/store';
  import { getUserToken } from '../../../helpers';

  const store = useStore();
  const currentUser: any = computed(() => store.currentUser);
  let logged: any = computed(() => currentUser.value.logged);

  const urlTv: string = "https://tv.laruinarecords.cl";
  const urlPlay: string = "https://play.laruinarecords.cl";
  const urlMerch: string = "https://merch.laruinarecords.cl";

  const loggedUrlTv: string = urlTv + '/#/auth?token=' + getUserToken()
</script>

<template>
  <h1>La Ruina Hub</h1>
  <div class="logo-container">
    <img class="logo" :src="logo" alt="" width="300">
  </div>
  <h3>Visita nuestras aplicaciones</h3>
  <div class="app-container">
    <a class="app-card" :href="logged? loggedUrlTv : urlTv">
      <img :src="streamingIcon" alt="">
      <h2>La Ruina TV</h2>
    </a>
    <a class="app-card" :href="urlPlay">
      <img :src="musicIcon" alt="">
      <h2>La Ruina Play</h2>
    </a>
    <a class="app-card" :href="urlMerch">
      <img :src="cartIcon" alt="">
      <h2>La Ruina Merch</h2>
    </a>
  </div>
</template>

<style scoped lang="scss" src="./Presentation.component.scss">
</style>