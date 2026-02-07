<template>
  <v-app>
    <AppBar @toggle-drawer="drawer = !drawer" />

    <DrawerMenu v-model="drawer" />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppBar from '@/components/layout/AppBar.vue'
import DrawerMenu from '@/components/layout/DrawerMenu.vue'

const drawer = ref(false)
</script>
