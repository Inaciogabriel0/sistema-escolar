<script setup lang="ts">
import GlobalSnackbar from './components/GlobalSnackbar.vue'
</script>

<template>
  <v-app>
    <router-view />
    <GlobalSnackbar />
  </v-app>
</template>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.v-app {
  height: 100%;
}
</style>
