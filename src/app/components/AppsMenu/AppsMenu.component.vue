<style scoped lang="scss" src="./AppsMenu.component.scss"/>
<script setup lang="ts">
  import { getUserToken } from '../../../helpers';
import { closeMenu } from '../../../helpers/menu';
</script>

<template>
  <li class="mr-1 ml-1">
    <router-link class="menu-letters" to="/" @click="closeMenu()">
      Hub
    </router-link>
  </li>
  <li class="mr-1 ml-1">
    <a class="menu-letters" :href="'https://tv.laruinarecords.cl/#/auth?token=' + getUserToken()" @click="closeMenu()">
      TV
    </a>
  </li>
  <li class="mr-1 ml-1">
    <a class="menu-letters" :href="'https://play.laruinarecords.cl/#/auth?token=' + getUserToken()" target="_blank" @click="closeMenu()">
      Play
    </a>
  </li>
  <li class="mr-1 ml-1">
    <a class="menu-letters" href="https://merch.laruinarecords.cl" target="_blank" @click="closeMenu()">
      Merch 
    </a>
  </li>
</template>