<script setup lang="ts">
  import Presentation from '../components/Presentation/Presentation.component.vue';
  import ConnectedApps from "../components/ConnectedApps/ConnectedApps.component.vue"
</script>

<template>
  <main class="main-container">
    <div class="container w-100 pl-4 pr-4">
      <Presentation/>
    </div>
  </main>
  <ConnectedApps />
</template>