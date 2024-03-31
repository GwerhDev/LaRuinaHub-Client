<script setup lang="ts">
import logo from "../../../assets/png/ruina-records-logo.png";

</script>

<template>
  <div class="logo-container">
    <img class="logo" :src="logo" alt="" width="300">
  </div>
  <h1>La Ruina Hub</h1>
  <p>Centro de cuentas</p>
  <section>
    <div class="services">
      <div class="section">
        <img src="../../../assets/svg/user-shield-icon.svg" alt="" width="25">
        <div class="vertical-separator"></div>
      </div>
      <ul>
        <h2>Administración de cuentas "La Ruina"</h2>
        <p>Aquí puedes gestionar los datos de tus cuentas de nuestro entorno de aplicaciones web.</p>
      </ul>
    </div>
    <div class="services">
      <div class="section">
        <img src="../../../assets/svg/app-icon.svg" alt="" width="25">
        <div class="vertical-separator"></div>
      </div>
      <ul>
        <h2>Acceso a tus aplicaciones</h2>
        <p>Navega entre nuestras aplicaciones, y descubre el contenido que tenemos disponible para ti.</p>
      </ul>
    </div>
    <div class="services">
      <div class="section">
        <img src="../../../assets/svg/support-icon.svg" alt="" width="25">
        <div class="vertical-separator"></div>
      </div>
      <ul>
        <h2>Soporte técnico</h2>
        <p>Puedes comunicarte con nuestro equipo para solucionar problemas y despejar dudas.</p>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss" src="./Presentation.component.scss"></style>