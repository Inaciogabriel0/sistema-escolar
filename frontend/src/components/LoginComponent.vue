<template>
  <v-container fluid class="d-flex align-center justify-center" style="min-height: 100vh; background: linear-gradient(135deg, #FFEE58 0%, #0091EA 100%);">
    <v-card class="pa-12" elevation="10" max-width="600" width="100%" rounded="lg">
      <v-card-title class="text-h4 text-center mb-6">Login</v-card-title>
      <v-form v-model="isValid" >
        <v-text-field
          v-model="form.name"
          label="Name"
          :counter="10"
          :rules="nameRules"
          variant="solo"
          class="mb-3"
          required
        />
        <v-text-field
          v-model="form.email"
          label="E-mail"
          :rules="emailRules"
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
  email: '',
  select: null,
  checkbox: false,
})

const items = ['aluno', 'professor', 'administrador']

const nameRules = [
  (v: string) => !!v || 'Nome é obrigatório',
  (v: string) => v.length <= 10 || 'Máximo de 10 caracteres',
]

const emailRules = [
  (v: string) => !!v || 'E-mail é obrigatório',
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail inválido',
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
.v-btn:hover {
  filter: brightness(1.1); /* Dá um brilho extra ao passar o mouse */
  transition: 0.3s;
}
</style>