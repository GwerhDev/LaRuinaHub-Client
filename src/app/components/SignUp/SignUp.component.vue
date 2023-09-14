<script setup lang="ts">
</script>

<template>
  <div class="form-container">
    <div class="logo-container">
      <img class="logo" src="../../../assets/png/ruina-records-logo.png" alt="" width="300">
    </div>
    <h1>La Ruina Hub</h1>
    <p>Rellena los siguientes campos:</p>
    <ul class="ul-form">
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
    </ul>
    <p>O puedes crear una cuenta mediante:</p>
    <a href="https://laruinahub-api.fly.dev/login-google">Google</a>
  </div>
</template>

<style scoped lang="scss" src="./SignUp.component.scss">
</style>