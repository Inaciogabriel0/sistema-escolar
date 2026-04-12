<template>
  <v-container fluid class="d-flex align-center justify-center" style="min-height: 100vh; background-color: #00B0FF;">
    <v-card class="pa-12 login-card-animate" elevation="10" max-width="600" width="100%" rounded="lg">
      <v-card-title class="text-h4 text-center mb-6 login-title">Login</v-card-title>
      <v-form v-model="isValid" ref="formRef" >
        <v-select
          v-model="formData.select"
          :items="items"
          label="Função"
          :rules="selectRules"
          variant="solo"
          class="mb-3"
          required
        />
        <v-text-field
          v-model="formData.name"
          :label="formData.select === 'aluno' ? 'Matricula' : 'E-mail'"
          :rules="dynamicIdentityRules"
          variant="solo"
          class="mb-3"
          required
        />
        <v-text-field
          v-model="formData.senha"
          label="senha"
          type="password"
          :rules="passwordRules"
          variant="solo"
          class="mb-3"
          required
        />


        <div class="d-flex justify-center mt-6">
          <v-btn
            :ripple="true"
            color="light-blue-accent-4"
            class="login-btn text-white text-none font-weight-bold"
            :loading="loading"
            :disabled="loading"
            @click="submit"
            size="large"
            min-width="220"
            rounded="xl"
          >
            <v-icon
              start
              class="login-icon"
              :loading="loading"
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
import { ref, computed } from 'vue'
import { useSnackbarStore } from '../store/snackbar'
import { useAuthStore } from '../store/auth'
import { api } from '../services/api'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()
const isValid = ref(false)

const formRef = ref<any>(null)

const formData = ref({
  name: '',
  senha: '',
  select: null as string | null,
  checkbox: false,
})

const items = ['aluno', 'professor', 'administrador']

const matriculaRules = [
  (v: string) => !!v || 'A Matrícula é obrigatória para alunos',
]

const emailRules = [
  (v: string) => !!v || 'O E-mail é obrigatório',
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
]

const dynamicIdentityRules = computed(() => {
  return formData.value.select === 'aluno' ? matriculaRules : emailRules
})

const passwordRules = [
  (v: string) => !!v || 'Senha é obrigatória',
  (v: string) => v.length >= 6 || 'Senha deve ter pelo menos 6 caracteres',
]

const selectRules = [
  (v: string | null) => !!v || 'Selecione sua funçao no sistema',
]



const snackbar = useSnackbarStore()
const loading = ref(false)

async function submit() {
  const { valid } = await formRef.value.validate()

  if (!valid) {
    snackbar.error('Preencha os campos corretamente')
    return
  }

  try {
    loading.value = true
    snackbar.startLoading('Entrando...')

    // Requisição real de login enviando a identidade, senha e role
    const response = await api.post('/auth/login', {
      identity: formData.value.name, // Pode ser matrícula ou email dependendo do select
      password: formData.value.senha,
      role: formData.value.select
    });

    const token = response.data.access_token;
    const user = response.data.user;
    
    // Salva o token no navegador
    localStorage.setItem('@SchoolExpress:token', token);
    localStorage.setItem('@SchoolExpress:user', JSON.stringify(user));
    
    // Salva na Store Global (Pinia)
    authStore.setAuth(token, user);
    
    // Configura o Axios para automaticamente usar esse token depois
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    console.log('Login realizado. Token salvo!');

    snackbar.stopLoading()
    snackbar.success('Login realizado com sucesso!')
    
    // Regra de Redirecionamento
    if (formData.value.select === 'administrador') {
      router.push('/admin') // Tela de admin informada
    } else {
      router.push('/') // Alunos e professores
    }
  } catch (error: any) {
    snackbar.stopLoading()
    snackbar.error('Erro ao realizar login')
  } finally {
    loading.value = false
  }
}


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