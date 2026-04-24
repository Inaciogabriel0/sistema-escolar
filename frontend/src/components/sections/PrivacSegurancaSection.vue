<template>
  <v-row>
    <v-col cols="12" md="4">
      <v-card class="glass-card rounded-xl border-0 h-100 hover-lift">
        <v-card-title class="pa-5 d-flex align-center pb-2">
          <v-avatar color="primary" variant="tonal" rounded="lg" size="40" class="mr-3">
            <v-icon>mdi-shield-account</v-icon>
          </v-avatar>
          <span class="text-h6 font-weight-bold">Status de Segurança</span>
        </v-card-title>
        <v-card-text class="pa-5 pt-0">
          <v-list bg-color="transparent" class="pa-0">
            <v-list-item v-for="(status, index) in securityStatus" :key="index" class="pa-3 mb-2 rounded-lg item-interactive">
              <template v-slot:prepend>
                <v-avatar :color="status.color" variant="tonal" size="36" class="mr-3">
                  <v-icon size="20">{{ status.icon }}</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title class="font-weight-bold text-body-2">{{ status.title }}</v-list-item-title>
              <v-list-item-subtitle class="text-caption text-medium-emphasis mt-1" style="white-space: normal;">{{ status.subtitle }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="8">
      <v-row>
        <!-- Alterar Senha -->
        <v-col cols="12">
          <v-card class="glass-card rounded-xl border-0 hover-lift">
            <v-card-title class="pa-5 d-flex align-center pb-2">
              <v-avatar color="error" variant="tonal" rounded="lg" size="40" class="mr-3">
                <v-icon>mdi-lock-reset</v-icon>
              </v-avatar>
              <span class="text-h6 font-weight-bold">Alterar Senha</span>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <v-form ref="senhaForm" v-model="validSenha" lazy-validation>
                <v-row>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      v-model="senhaForm.senhaAtual"
                      label="Senha atual"
                      type="password"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      class="mt-2"
                    />
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      v-model="senhaForm.novaSenha"
                      label="Nova senha"
                      type="password"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      class="mt-2"
                    />
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      v-model="senhaForm.confirmarSenha"
                      label="Confirmar nova senha"
                      type="password"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      class="mt-2"
                    />
                  </v-col>
                  <v-col cols="12" class="d-flex justify-end mt-2">
                    <v-btn color="error" rounded="pill" variant="flat" class="text-none font-weight-bold px-6" @click="alterarSenha">
                      Salvar Alterações
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Autenticação em Dois Fatores -->
        <v-col cols="12">
          <v-card class="glass-card rounded-xl border-0 hover-lift">
            <v-card-title class="pa-5 d-flex align-center justify-space-between pb-2">
              <div class="d-flex align-center">
                <v-avatar color="success" variant="tonal" rounded="lg" size="40" class="mr-3">
                  <v-icon>mdi-authenticator</v-icon>
                </v-avatar>
                <span class="text-h6 font-weight-bold">Autenticação (2FA)</span>
              </div>
              <v-switch
                v-model="twoFaEnabled"
                color="success"
                :disabled="!twoFaAvailable"
                hide-details
                inset
                @change="handleTwoFaToggle"
              />
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <p class="text-medium-emphasis text-body-2 mb-0">Adiciona uma camada extra de segurança usando um aplicativo autenticador no seu celular.</p>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Gerenciar Sessões Ativas -->
        <v-col cols="12">
          <v-card class="glass-card rounded-xl border-0 hover-lift">
            <v-card-title class="pa-5 d-flex align-center justify-space-between pb-2">
              <div class="d-flex align-center">
                <v-avatar color="info" variant="tonal" rounded="lg" size="40" class="mr-3">
                  <v-icon>mdi-account-switch</v-icon>
                </v-avatar>
                <span class="text-h6 font-weight-bold">Sessões Ativas</span>
              </div>
              <v-btn color="error" variant="text" size="small" class="text-none font-weight-bold" @click="logoutAllOther">
                Desconectar Outros
              </v-btn>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <v-list bg-color="transparent" class="pa-0">
                <v-list-item
                  v-for="(session, index) in activeSessions"
                  :key="index"
                  class="rounded-lg mb-2 pa-3 item-interactive"
                >
                  <template v-slot:prepend>
                    <v-icon :color="index === 0 ? 'success' : 'medium-emphasis'" class="mr-3">
                      {{ session.device.includes('iPhone') || session.device.includes('Android') ? 'mdi-cellphone' : 'mdi-laptop' }}
                    </v-icon>
                  </template>
                  <v-list-item-title class="font-weight-bold mb-1">{{ session.device }} <v-chip size="x-small" color="success" v-if="index === 0" class="ml-2">Atual</v-chip></v-list-item-title>
                  <v-list-item-subtitle class="text-medium-emphasis">
                    {{ session.location }} • {{ session.time }}
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Controle de Visibilidade de Dados -->
        <v-col cols="12">
          <v-card class="glass-card rounded-xl border-0 hover-lift">
            <v-card-title class="pa-5 d-flex align-center pb-2">
              <v-avatar color="secondary" variant="tonal" rounded="lg" size="40" class="mr-3">
                <v-icon>mdi-eye-off</v-icon>
              </v-avatar>
              <span class="text-h6 font-weight-bold">Privacidade de Dados</span>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <v-list bg-color="transparent" class="pa-0">
                <v-list-item
                  v-for="(item, index) in visibilityControls"
                  :key="index"
                  class="px-0"
                >
                  <v-list-item-title class="text-body-2 font-weight-medium">{{ item.label }}</v-list-item-title>
                  <template v-slot:append>
                    <v-switch
                      v-model="item.value"
                      color="primary"
                      :disabled="item.disabled"
                      hide-details
                      inset
                      density="compact"
                    />
                  </template>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'PrivacSegurancaSection',
  data() {
    return {
      senhaForm: {
        senhaAtual: '',
        novaSenha: '',
        confirmarSenha: ''
      },
      validSenha: true,
      twoFaEnabled: false,
      twoFaAvailable: true,
      activeSessions: [
        { device: 'Chrome no Windows', location: 'São Paulo, Brasil', time: 'Há 2 horas' },
        { device: 'Safari no iPhone', location: 'Rio de Janeiro, Brasil', time: 'Há 1 dia' }
      ],
      securityStatus: [
        { icon: 'mdi-check-circle', color: 'success', title: 'Senha forte', subtitle: 'Sua senha atende aos requisitos de segurança' },
        { icon: 'mdi-shield-off-outline', color: 'warning', title: '2FA não configurado', subtitle: 'Ative para maior segurança' },
        { icon: 'mdi-account-check', color: 'success', title: 'Sessões seguras', subtitle: '2 sessões ativas em dispositivos confiáveis' }
      ],
      visibilityControls: [
        { label: 'Mostrar meu status online', value: true, disabled: false },
        { label: 'Permitir que outros vejam minha foto', value: true, disabled: false },
        { label: 'Compartilhar meu progresso acadêmico', value: false, disabled: false },
        { label: 'Receber recomendações personalizadas', value: true, disabled: false }
      ]
    };
  },
  methods: {
    alterarSenha() {
      if (this.$refs.senhaForm.validate() && this.senhaForm.novaSenha === this.senhaForm.confirmarSenha) {
        this.senhaForm.senhaAtual = '';
        this.senhaForm.novaSenha = '';
        this.senhaForm.confirmarSenha = '';
        this.$refs.snackbar?.showSuccess('Senha alterada com sucesso!');
        this.securityStatus[0] = {
          icon: 'mdi-check-circle',
          color: 'success',
          title: 'Senha forte',
          subtitle: 'Senha recentemente alterada'
        };
      }
    },
    handleTwoFaToggle() {
      if (this.twoFaEnabled) {
        this.$refs.snackbar?.showInfo('Iniciando configuração de 2FA...');
        setTimeout(() => {
          this.securityStatus[1] = {
            icon: 'mdi-shield-check',
            color: 'success',
            title: '2FA configurado',
            subtitle: 'Autenticação em dois fatores ativada'
          };
          this.$refs.snackbar?.showSuccess('2FA configurado com sucesso!');
        }, 1000);
      } else {
        if (confirm('Tem certeza que deseja desativar a autenticação em dois fatores?')) {
          this.securityStatus[1] = {
            icon: 'mdi-shield-off-outline',
            color: 'warning',
            title: '2FA não configurado',
            subtitle: 'Ative para maior segurança'
          };
          this.$refs.snackbar?.showSuccess('2FA desativado!');
        } else {
          this.twoFaEnabled = true;
        }
      }
    },
    logoutAllOther() {
      if (confirm('Isso irá desconectar você de todos os outros dispositivos. Continuar?')) {
        this.activeSessions = this.activeSessions.slice(0, 1);
        this.$refs.snackbar?.showSuccess('Sessões em outros dispositivos encerradas!');
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
</style>