<template>
  <v-container fluid class="d-flex align-center justify-center" style="min-height: 100vh; background: linear-gradient(135deg, #FFEE58 0%, #0091EA 100%);">
    <v-card class="pa-12 login-card-animate" elevation="10" max-width="600" width="100%" rounded="lg">
      <v-card-title class="text-h4 text-center mb-6 login-title">Login</v-card-title>
      <v-form v-model="isValid" >
        <v-text-field
          v-model="form.name"
          label="Matricula"
          :counter="10"
          :rules="matriculaRules"
          variant="solo"
          class="mb-3"
          required
        />
        <v-text-field
          v-model="form.senha"
          label="senha"
          :rules="passwordRules"
          variant="solo"
          class="mb-3"
          required
        />
        <v-select
          v-model="form.select"
          :items="items"
          label="oque voce é"
          :rules="selectRules"
          variant="solo"
          class="mb-3"
          required
        />

        <div class="d-flex justify-center mt-6">
          <v-btn
            :ripple="true"
            color="light-blue-accent-4"
            class="login-btn text-white text-none font-weight-bold"
            :disabled="!isValid || loading"
            :loading="loading"
            @click="submit"
            size="large"
            min-width="220"
            rounded="xl"
          >
            <v-icon
              start
              class="login-icon"
              icon="mdi-login"
            />
            Entrar
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isValid = ref(false)
const form = ref({
  name: '',
  senha: '',
  select: null,
  checkbox: false,
})

const items = ['aluno', 'professor', 'administrador']

const matriculaRules = [
  (v: string) => !!v || 'Matricula é obrigatória',
  (v: string) => v.length <= 10 || 'Máximo de 10 caracteres',
]

const passwordRules = [
  (v: string) => !!v || 'Senha é obrigatória',
  (v: string) => v.length >= 6 || 'Senha deve ter pelo menos 6 caracteres',
]

const selectRules = [
  (v: string | null) => !!v || 'Selecione um item',
]



function submit() {
  if (!isValid.value) return
  console.log('Form enviado:', form.value)
}

const loading = ref(false)

</script>

<style scoped>

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes buttonPulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(0, 145, 234, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(0, 145, 234, 0);
  }
}

@keyframes buttonGlow {
  0%, 100% {
    filter: drop-shadow(0 0 5px rgba(0, 145, 234, 0.5));
  }
  50% {
    filter: drop-shadow(0 0 15px rgba(0, 145, 234, 0.8));
  }
}

@keyframes iconSpin {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}

.login-card-animate {
  animation: slideInUp 1s ease-out forwards;
}

.v-container {
  animation: fadeIn 0.8s ease-out;
}

.login-btn {
  position: relative;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  background: linear-gradient(135deg, #0091EA 0%, #0073cc 100%);
}

.login-btn:hover:not(:disabled) {
  filter: brightness(1.15) drop-shadow(0 8px 20px rgba(0, 145, 234, 0.4));
  transform: translateY(-3px);
  animation: buttonGlow 1.5s ease-in-out infinite;
}

.login-btn:active:not(:disabled) {
  transform: translateY(-1px);
}

.login-icon {
  animation: iconSpin 1s ease-in-out infinite;
}

.login-btn:hover:not(:disabled) .login-icon {
  animation: iconSpin 0.6s ease-in-out infinite;
}

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@600&display=swap');

.login-title {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 2.5rem !important;
  background: linear-gradient(135deg, #0091EA 0%, #0073cc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.login-title:hover {
  filter: drop-shadow(0 5px 15px rgba(0, 145, 234, 0.3));
  transform: scale(1.05);
}

</style>