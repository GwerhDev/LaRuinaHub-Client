<style scoped lang="scss" src="./MenuDesktop.component.scss" />
<script setup lang="ts">
import { closeMenu } from '../../../helpers/menu';

</script>

<template>
    <ul class="lateral-menu-text">
      <li>
        <router-link class="lateral-menu-link" to="/" @click="closeMenu()">
          Página principal
        </router-link>
      </li>
      <li>
        <router-link class="lateral-menu-link" to="/environment/apps" @click="closeMenu()">
          Aplicaciones
        </router-link>
      </li>
      <li>
        <router-link class="lateral-menu-link" to="/about" @click="closeMenu()">
          Soporte técnico
        </router-link>
      </li>
      <li>
        <router-link class="lateral-menu-link" to="/about" @click="closeMenu()">
          About
        </router-link>
      </li>
    </ul>
</template>