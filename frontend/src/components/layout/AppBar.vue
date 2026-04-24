<template>
  <v-app-bar color="light-blue-accent-4">
    <v-icon
      class="menu"
      @click="$emit('toggle-drawer')" 
    >
      mdi-menu
    </v-icon>

    <v-toolbar-title>Adelino Dantas</v-toolbar-title>

    <div class="butao_login d-flex align-center pr-4">
      <template v-if="authStore.isAuthenticated">
        <span class="mr-4 text-white font-weight-bold" style="text-transform: capitalize;">
          {{ authStore.user?.name }} ({{ authStore.user?.role }})
        </span>
        <v-btn
          @click="logout"
          color="white"
          variant="outlined"
          size="small"
        >
          Sair
        </v-btn>
      </template>
      <template v-else>
        <v-btn
          @click="$router.push({ name: 'login' })" 
          color="white"
          size="large"
        >
          Login
        </v-btn>
      </template>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../store/auth'
import { api } from '../../services/api'

defineEmits(['toggle-drawer'])

const router = useRouter()
const authStore = useAuthStore()

// Recarrega do localStorage se o usuário der F5 na página
onMounted(() => {
  const token = localStorage.getItem('@SchoolExpress:token')
  const user = localStorage.getItem('@SchoolExpress:user')

  if (token && user && !authStore.isAuthenticated) {
    authStore.setAuth(token, JSON.parse(user))
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
})

async function logout() {
  try {
    await api.post('/auth/logout')
  } catch (error) {
    console.error('Logout error', error)
  } finally {
    authStore.clearAuth()
    localStorage.removeItem('@SchoolExpress:token')
    localStorage.removeItem('@SchoolExpress:user')
    api.defaults.headers.common['Authorization'] = ''
    router.push('/login')
  }
}
</script>

<style>
.menu {
  cursor: pointer;
  position: relative;
  left: 10px;
}
</style>