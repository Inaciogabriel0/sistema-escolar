<template>
  <v-row>
    <v-col cols="12" md="4">
      <v-card class="glass-card rounded-xl border-0 h-100 hover-lift">
        <v-card-title class="pa-5 d-flex align-center pb-2">
          <v-avatar color="primary" variant="tonal" rounded="lg" size="40" class="mr-3">
            <v-icon>mdi-bell-outline</v-icon>
          </v-avatar>
          <span class="text-h6 font-weight-bold">Resumo de Notificações</span>
        </v-card-title>
        <v-card-text class="pa-5 pt-0">
          <v-list bg-color="transparent" class="pa-0">
            <v-list-item v-for="(notif, index) in notificationSummary" :key="index" class="pa-3 mb-2 rounded-lg item-interactive">
              <template v-slot:prepend>
                <v-avatar :color="notif.color" variant="tonal" size="36" class="mr-3">
                  <v-icon size="20">{{ notif.icon }}</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title class="font-weight-bold text-body-2">{{ notif.title }}</v-list-item-title>
              <template v-slot:append>
                <v-chip size="small" :color="notif.color" variant="flat" class="font-weight-bold">{{ notif.count }}</v-chip>
              </template>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="8">
      <v-row>
        <!-- Tipos de Notificação -->
        <v-col cols="12">
          <v-card class="glass-card rounded-xl border-0 hover-lift">
            <v-card-title class="pa-5 d-flex align-center pb-2">
              <v-avatar color="info" variant="tonal" rounded="lg" size="40" class="mr-3">
                <v-icon>mdi-bell-plus-outline</v-icon>
              </v-avatar>
              <span class="text-h6 font-weight-bold">Tipos de Notificação</span>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <v-list bg-color="transparent" class="pa-0">
                <v-list-item
                  v-for="(type, index) in notificationTypes"
                  :key="index"
                  class="px-0 py-2 border-bottom"
                >
                  <v-list-item-title class="font-weight-bold text-body-1">{{ type.title }}</v-list-item-title>
                  <v-list-item-subtitle class="text-medium-emphasis mt-1">{{ type.description }}</v-list-item-subtitle>
                  <template v-slot:append>
                    <v-switch
                      v-model="type.enabled"
                      color="primary"
                      :disabled="type.disabled"
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

        <!-- Canais de Recebimento -->
        <v-col cols="12" md="6">
          <v-card class="glass-card rounded-xl border-0 h-100 hover-lift">
            <v-card-title class="pa-5 d-flex align-center pb-2">
              <v-avatar color="secondary" variant="tonal" rounded="lg" size="40" class="mr-3">
                <v-icon>mdi-email-open-outline</v-icon>
              </v-avatar>
              <span class="text-h6 font-weight-bold">Canais de Recebimento</span>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <v-radio-group
                v-model="notificationChannel"
                color="primary"
                hide-details
                class="mt-2"
              >
                <v-radio label="Sistema (Push)" value="sistema" :disabled="!channelAvailable.sistema" class="mb-2"></v-radio>
                <v-radio label="E-mail" value="email" :disabled="!channelAvailable.email" class="mb-2"></v-radio>
                <v-radio label="Ambos (Sistema e E-mail)" value="ambos" :disabled="!(channelAvailable.sistema && channelAvailable.email)"></v-radio>
              </v-radio-group>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Configurações Avançadas -->
        <v-col cols="12" md="6">
          <v-card class="glass-card rounded-xl border-0 h-100 hover-lift">
            <v-card-title class="pa-5 d-flex align-center pb-2">
              <v-avatar color="warning" variant="tonal" rounded="lg" size="40" class="mr-3">
                <v-icon>mdi-cog-outline</v-icon>
              </v-avatar>
              <span class="text-h6 font-weight-bold">Avançado</span>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <v-list bg-color="transparent" class="pa-0">
                <v-list-item
                  v-for="(setting, index) in advancedSettings"
                  :key="index"
                  class="px-0"
                >
                  <v-list-item-title class="text-body-2 font-weight-medium">{{ setting.label }}</v-list-item-title>
                  <template v-slot:append>
                    <v-switch
                      v-model="setting.value"
                      color="warning"
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
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'NotificacoesSection',
  data() {
    return {
      notificationSummary: [
        { icon: 'mdi-school-outline', color: 'primary', title: 'Atividades', count: 5 },
        { icon: 'mdi-alert-outline', color: 'warning', title: 'Avisos da escola', count: 2 },
        { icon: 'mdi-chat-outline', color: 'secondary', title: 'Mensagens', count: 12 }
      ],
      notificationTypes: [
        { title: 'Atividades', description: 'Notificações sobre tarefas, provas e entregas', enabled: true, disabled: false },
        { title: 'Avisos da escola', description: 'Comunicados oficiais e avisos importantes', enabled: true, disabled: false },
        { title: 'Mensagens', description: 'Mensagens de professores, colegas e coordenadores', enabled: true, disabled: false },
        { title: 'Lembretes', description: 'Lembretes de eventos e datas importantes', enabled: false, disabled: true }
      ],
      notificationChannel: 'ambos',
      channelAvailable: { sistema: true, email: true },
      advancedSettings: [
        { label: 'Notificar apenas em horário comercial', value: false, disabled: false },
        { label: 'Agrupar notificações similares', value: true, disabled: false },
        { label: 'Som de notificação', value: true, disabled: false },
        { label: 'Vibrar ao receber notificação', value: false, disabled: true }
      ]
    };
  },
  watch: {
    notificationChannel(val) {
      this.$refs.snackbar?.showInfo(`Canal de notificação alterado para: ${val}`);
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
.border-bottom {
  border-bottom: 1px solid rgba(128, 128, 128, 0.1);
}
.border-bottom:last-child {
  border-bottom: none;
}
</style>