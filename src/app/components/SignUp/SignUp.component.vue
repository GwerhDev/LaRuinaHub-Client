<script setup lang="ts">
</script>

<template>
  <div class="form-container">
    <div class="logo-container">
      <img class="logo" src="../../../assets/png/ruina-records-logo.png" alt="" width="300">
    </div>
    <p>Rellena los siguientes campos:</p>
    <form class="ul-form">
      <li class="li-form">
        <label>Nombre de usuario</label>
        <input class="input-form" type="text" />
      </li>
      <li class="li-form">
        <label>Correo electrónico</label>
        <input class="input-form" type="email" />
      </li>
      <li class="li-form">
        <label>Contraseña</label>
        <input class="input-form" type="password" />
      </li>
      <button class="submit-button">SignUp</button>
    </form>
    <p>O puedes crear una cuenta mediante:</p>
    <a href="https://laruinahub-api.fly.dev/signup-google">
      <div class="google-button">
        Google
      </div>
    </a>
  </div>
</template>

<style scoped lang="scss" src="./SignUp.component.scss">
</style>