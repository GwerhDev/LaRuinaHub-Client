<style scoped lang="scss" src="./AppsMenu.component.scss"/>
<script setup lang="ts">
  import { getUserToken } from '../../../helpers';
</script>

<template>
  <li class="mr-1 ml-1">
    <router-link class="menu-letters" to="/">
      Hub
    </router-link>
  </li>
  <li class="mr-1 ml-1">
    <a class="menu-letters" :href="'https://tv.laruinarecords.cl/#/auth?token=' + getUserToken()">
      TV
    </a>
  </li>
  <li class="mr-1 ml-1">
    <a class="menu-letters" href='https://play.laruinarecords.cl' target="_blank">
      Play
    </a>
  </li>
  <li class="mr-1 ml-1">
    <a class="menu-letters" href="https://merch.laruinarecords.cl" target="_blank">
      Merch 
    </a>
  </li>
</template>