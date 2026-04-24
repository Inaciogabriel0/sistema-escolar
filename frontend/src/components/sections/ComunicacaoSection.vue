<template>
  <v-row>
    <v-col cols="12" md="4">
      <v-card class="glass-card rounded-xl border-0 h-100 hover-lift">
        <v-card-title class="pa-5 d-flex align-center pb-2">
          <v-avatar color="primary" variant="tonal" rounded="lg" size="40" class="mr-3">
            <v-icon>mdi-chat-processing-outline</v-icon>
          </v-avatar>
          <span class="text-h6 font-weight-bold">Estatísticas</span>
        </v-card-title>
        <v-card-text class="pa-5 pt-0">
          <v-list bg-color="transparent" class="pa-0">
            <v-list-item v-for="(stat, index) in messageStats" :key="index" class="pa-3 mb-2 rounded-lg item-interactive">
              <template v-slot:prepend>
                <v-avatar :color="stat.color" variant="tonal" size="36" class="mr-3">
                  <v-icon size="20">{{ stat.icon }}</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title class="font-weight-bold text-body-2">{{ stat.label }}</v-list-item-title>
              <template v-slot:append>
                <v-chip size="small" :color="stat.color" variant="flat" class="font-weight-bold">{{ stat.value }}</v-chip>
              </template>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="8">
      <v-row>
        <!-- Configurações de Mensagens -->
        <v-col cols="12">
          <v-card class="glass-card rounded-xl border-0 hover-lift">
            <v-card-title class="pa-5 d-flex align-center pb-2">
              <v-avatar color="info" variant="tonal" rounded="lg" size="40" class="mr-3">
                <v-icon>mdi-message-settings-outline</v-icon>
              </v-avatar>
              <span class="text-h6 font-weight-bold">Configurações de Mensagens</span>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <v-list bg-color="transparent" class="pa-0">
                <v-list-item
                  v-for="(setting, index) in messageSettings"
                  :key="index"
                  class="px-0 py-1"
                >
                  <v-list-item-title class="text-body-2 font-weight-medium">{{ setting.label }}</v-list-item-title>
                  <template v-slot:append>
                    <v-switch
                      v-model="setting.value"
                      color="primary"
                      :disabled="setting.disabled"
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

        <!-- Permissões de Mensagens -->
        <v-col cols="12" md="6">
          <v-card class="glass-card rounded-xl border-0 h-100 hover-lift">
            <v-card-title class="pa-5 d-flex align-center pb-2">
              <v-avatar color="warning" variant="tonal" rounded="lg" size="40" class="mr-3">
                <v-icon>mdi-shield-account-outline</v-icon>
              </v-avatar>
              <span class="text-h6 font-weight-bold">Permissões</span>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <v-radio-group
                v-model="messagePrivacy"
                color="warning"
                hide-details
                class="mt-2"
              >
                <v-radio label="Receber mensagens de todos" value="todos" class="mb-2"></v-radio>
                <v-radio label="Receber apenas de contatos" value="contatos" class="mb-2"></v-radio>
                <v-radio label="Não receber mensagens" value="nenhum"></v-radio>
              </v-radio-group>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Preferências de Chat -->
        <v-col cols="12" md="6">
          <v-card class="glass-card rounded-xl border-0 h-100 hover-lift">
            <v-card-title class="pa-5 d-flex align-center pb-2">
              <v-avatar color="secondary" variant="tonal" rounded="lg" size="40" class="mr-3">
                <v-icon>mdi-chat-outline</v-icon>
              </v-avatar>
              <span class="text-h6 font-weight-bold">Preferências de Chat</span>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <v-list bg-color="transparent" class="pa-0">
                <v-list-item
                  v-for="(pref, index) in chatPreferences"
                  :key="index"
                  class="px-0 py-1"
                >
                  <v-list-item-title class="text-body-2 font-weight-medium">{{ pref.label }}</v-list-item-title>
                  <template v-slot:append>
                    <v-switch
                      v-model="pref.value"
                      color="secondary"
                      :disabled="pref.disabled"
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
  name: 'ComunicacaoSection',
  data() {
    return {
      messageStats: [
        { icon: 'mdi-chat-outline', color: 'primary', label: 'Mensagens hoje', value: '12' },
        { icon: 'mdi-account-multiple', color: 'secondary', label: 'Conversas ativas', value: '5' },
        { icon: 'mdi-check-circle-outline', color: 'success', label: 'Não lidas', value: '3' }
      ],
      messageSettings: [
        { label: 'Mostrar confirmação de leitura', value: true, disabled: false },
        { label: 'Notificar quando alguém estiver digitando', value: true, disabled: false },
        { label: 'Salvar automaticamente rascunhos', value: true, disabled: false },
        { label: 'Bloquear mensagens de usuários desconhecidos', value: false, disabled: false }
      ],
      messagePrivacy: 'contatos',
      chatPreferences: [
        { label: 'Emojis e stickers', value: true, disabled: false },
        { label: 'Preview de links', value: true, disabled: false },
        { label: 'Compartilhar localização', value: false, disabled: false },
        { label: 'Mensagens por voz', value: true, disabled: false }
      ]
    };
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