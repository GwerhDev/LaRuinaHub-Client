<style scoped lang="scss" src="./Menu.component.scss" />
<script setup lang="ts">
import { closeMenu } from '../../../helpers/menu';


</script>

<template>
  <ul>
    <li>
      <router-link class="menu-text" to="/" @click="closeMenu()">
        Inicio
      </router-link>
    </li>
    <li>
      <router-link class="menu-text" to="/environment/apps" @click="closeMenu()">
        Aplicaciones
      </router-link>
    </li>
    <li>
      <router-link class="menu-text" to="/about" @click="closeMenu()">
        Quiénes somos
      </router-link>
    </li>
  </ul>
</template>