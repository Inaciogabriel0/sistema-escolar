<script setup lang="ts">
import { ref } from 'vue'
import GlobalSnackbar from './components/GlobalSnackbar.vue'


const drawer = ref(false)
</script>

<template>
  <v-app>
    <!-- ESCUTANDO O EVENTO -->
  

    <!-- DRAWER CONTROLADO -->
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item title="Home" @click="$router.push('/')"/>
        <v-list-item title="Horários" @click="$router.push('/horarios')"/>
      </v-list>
    </v-navigation-drawer>

    <GlobalSnackbar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>