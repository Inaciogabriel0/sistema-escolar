<template>
  <v-row>
    <v-col cols="12" md="4">
      <v-card class="glass-card rounded-xl border-0 h-100 hover-lift">
        <v-card-title class="pa-5 d-flex align-center pb-2">
          <v-avatar color="primary" variant="tonal" rounded="lg" size="40" class="mr-3">
            <v-icon>mdi-account-settings-outline</v-icon>
          </v-avatar>
          <span class="text-h6 font-weight-bold">Status da Conta</span>
        </v-card-title>
        <v-card-text class="pa-5 pt-0">
          <v-list bg-color="transparent" class="pa-0">
            <v-list-item v-for="(info, index) in accountInfo" :key="index" class="pa-3 mb-2 rounded-lg item-interactive">
              <template v-slot:prepend>
                <v-avatar color="info" variant="tonal" size="36" class="mr-3">
                  <v-icon size="20">{{ info.icon }}</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title class="font-weight-bold text-body-2">{{ info.label }}</v-list-item-title>
              <v-list-item-subtitle class="text-caption text-medium-emphasis mt-1">{{ info.value }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="8">
      <v-row>
        <!-- Sair da Conta -->
        <v-col cols="12">
          <v-card class="glass-card rounded-xl border-0 hover-lift">
            <v-card-title class="pa-5 d-flex align-center pb-2">
              <v-avatar color="warning" variant="tonal" rounded="lg" size="40" class="mr-3">
                <v-icon>mdi-logout-variant</v-icon>
              </v-avatar>
              <span class="text-h6 font-weight-bold">Encerrar Sessão</span>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <p class="text-body-2 text-medium-emphasis mb-4">Deseja realmente sair da sua conta? Você será desconectado deste dispositivo.</p>
              <v-btn color="warning" variant="flat" rounded="pill" class="text-none font-weight-bold px-6" @click="logout">
                Sair da Conta
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Excluir Conta -->
        <v-col cols="12">
          <v-card class="glass-card rounded-xl border-0 hover-lift">
            <v-card-title class="pa-5 d-flex align-center pb-2">
              <v-avatar color="error" variant="tonal" rounded="lg" size="40" class="mr-3">
                <v-icon>mdi-account-delete</v-icon>
              </v-avatar>
              <span class="text-h6 font-weight-bold text-error">Excluir Conta</span>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <p class="text-body-2 text-medium-emphasis mb-4">
                Esta ação é permanente e não pode ser desfeita. Todos os seus dados serão excluídos irreversivelmente.
              </p>
              
              <v-slide-y-transition>
                <div v-if="showConfirm" class="bg-error-lighten-4 pa-4 rounded-lg border-error mb-4" style="border: 1px solid;">
                  <p class="text-body-2 text-error font-weight-bold mb-2">Digite "EXCLUIR" para confirmar a exclusão da conta:</p>
                  <v-text-field
                    v-model="confirmText"
                    placeholder="EXCLUIR"
                    variant="outlined"
                    density="comfortable"
                    color="error"
                    bg-color="surface"
                    hide-details="auto"
                    class="mb-3"
                  ></v-text-field>
                  <div class="d-flex gap-2">
                    <v-btn color="error" variant="flat" rounded="pill" class="text-none font-weight-bold flex-grow-1" @click="deleteAccount" :disabled="confirmText !== 'EXCLUIR'">
                      Confirmar Exclusão
                    </v-btn>
                    <v-btn color="surface-variant" variant="flat" rounded="pill" class="text-none font-weight-bold flex-grow-1" @click="showConfirm = false">
                      Cancelar
                    </v-btn>
                  </div>
                </div>
              </v-slide-y-transition>

              <v-btn
                v-if="!showConfirm"
                color="error"
                variant="outlined"
                rounded="pill"
                class="text-none font-weight-bold px-6"
                @click="showConfirm = true"
              >
                Solicitar Exclusão da Conta
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ContaSection',
  data() {
    return {
      accountInfo: [
        { icon: 'mdi-account-circle', label: 'Nome', value: 'João Silva' },
        { icon: 'mdi-email', label: 'E-mail', value: 'joao.silva@email.com' },
        { icon: 'mdi-calendar', label: 'Data de criação', value: '15/03/2023' },
        { icon: 'mdi-shield-check', label: 'Tipo de conta', value: 'Aluno' },
        { icon: 'mdi-clock-outline', label: 'Último acesso', value: 'Hoje, 10:30' }
      ],
      showConfirm: false,
      confirmText: ''
    };
  },
  methods: {
    logout() {
      if (confirm('Tem certeza que deseja sair da sua conta?')) {
        this.$refs.snackbar?.showSuccess('Logout realizado com sucesso!');
        this.$router.push('/login');
      }
    },
    deleteAccount() {
      if (this.confirmText === 'EXCLUIR') {
        this.$refs.snackbar?.showSuccess('Conta excluída com sucesso!');
        this.$router.push('/');
      }
    }
  }
};
</script>

<style scoped>
.item-interactive {
  transition: all 0.2s ease;
  border: 1px solid transparent;
}
.item-interactive:hover {
  background: rgba(128, 128, 128, 0.05);
  transform: translateY(-2px);
}
.gap-2 {
  gap: 8px;
}
</style>