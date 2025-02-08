<style scoped lang="scss" src="./Logo.component.scss" />
<script setup lang="ts">
import { closeMenu } from '../../../helpers/menu';
</script>

<template>
  <router-link class="d-flex align-cent logotype" to='/'>
    <img src="../../../assets/svg/laruinarecords-logo.svg" @click="closeMenu()" height="40" alt="">
    <p class="type">LA RUINA</p>
  </router-link>
</template>