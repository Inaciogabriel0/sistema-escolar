<template>
  <v-app-bar color="light-blue-accent-4">
    <v-icon
    class="menu"
    @click="$emit('toggle-drawer')" 
    >
      mdi-menu
    </v-icon>
    <v-toolbar-title>School Express</v-toolbar-title>

     <!-- Login button -->
    <div class="butao_login">
         <v-btn
         @click="$router.push({ name: 'login' })" 
         color="white"
         size="large"
        >
          Login
        </v-btn>
     </div>
  </v-app-bar>
</template>

<script setup lang="ts">
defineEmits(['toggle-drawer'])
</script>

<style>
.menu {
  cursor: pointer;
  position: relative;
  left: 10px;
}
</style>