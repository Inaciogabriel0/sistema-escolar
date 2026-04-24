<template>
  <v-row>
    <v-col cols="12" md="4">
      <v-card class="glass-card rounded-xl border-0 h-100 hover-lift">
        <v-card-title class="pa-5 d-flex align-center pb-2">
          <v-avatar color="primary" variant="tonal" rounded="lg" size="40" class="mr-3">
            <v-icon>mdi-school-outline</v-icon>
          </v-avatar>
          <span class="text-h6 font-weight-bold">Informações da Escola</span>
        </v-card-title>
        <v-card-text class="pa-5 pt-0">
          <v-list bg-color="transparent" class="pa-0">
            <v-list-item v-for="(info, index) in schoolInfo" :key="index" class="pa-3 mb-2 rounded-lg item-interactive">
              <template v-slot:prepend>
                <v-avatar color="info" variant="tonal" size="36" class="mr-3">
                  <v-icon size="20">{{ info.icon }}</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title class="font-weight-bold text-body-2">{{ info.label }}</v-list-item-title>
              <v-list-item-subtitle class="text-caption text-medium-emphasis mt-1" style="white-space: normal;">{{ info.value }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="8">
      <v-row>
        <!-- Fatos sobre a Escola -->
        <v-col cols="12">
          <v-card class="glass-card rounded-xl border-0 hover-lift">
            <v-card-title class="pa-5 d-flex align-center pb-2">
              <v-avatar color="success" variant="tonal" rounded="lg" size="40" class="mr-3">
                <v-icon>mdi-information-outline</v-icon>
              </v-avatar>
              <span class="text-h6 font-weight-bold">Sobre a Escola</span>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <v-row>
                <v-col v-for="(fact, index) in schoolFacts" :key="index" cols="6" sm="4" class="text-center py-4">
                  <div class="text-h5 font-weight-bold text-primary">{{ fact.value }}</div>
                  <div class="text-caption text-medium-emphasis font-weight-medium mt-1">{{ fact.label }}</div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Termos e Política -->
        <v-col cols="12" md="6">
          <v-card class="glass-card rounded-xl border-0 h-100 hover-lift">
            <v-card-title class="pa-5 d-flex align-center pb-2">
              <v-avatar color="warning" variant="tonal" rounded="lg" size="40" class="mr-3">
                <v-icon>mdi-file-document-outline</v-icon>
              </v-avatar>
              <span class="text-h6 font-weight-bold">Termos de Uso</span>
            </v-card-title>
            <v-card-text class="pa-5 pt-0 d-flex flex-column justify-space-between h-100">
              <p class="text-body-2 text-medium-emphasis mb-4">{{ termosUso.resumo }}</p>
              <v-btn color="warning" variant="tonal" rounded="pill" class="text-none font-weight-bold" @click="verTermosCompletos">
                Ler termos completos
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="glass-card rounded-xl border-0 h-100 hover-lift">
            <v-card-title class="pa-5 d-flex align-center pb-2">
              <v-avatar color="error" variant="tonal" rounded="lg" size="40" class="mr-3">
                <v-icon>mdi-shield-lock-outline</v-icon>
              </v-avatar>
              <span class="text-h6 font-weight-bold">Privacidade</span>
            </v-card-title>
            <v-card-text class="pa-5 pt-0 d-flex flex-column justify-space-between h-100">
              <p class="text-body-2 text-medium-emphasis mb-4">{{ politicaPrivacidade.resumo }}</p>
              <v-btn color="error" variant="tonal" rounded="pill" class="text-none font-weight-bold" @click="verPoliticaCompleta">
                Ler política completa
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Licenças e Créditos -->
        <v-col cols="12">
          <v-card class="glass-card rounded-xl border-0 hover-lift">
            <v-card-title class="pa-5 d-flex align-center pb-2">
              <v-avatar color="secondary" variant="tonal" rounded="lg" size="40" class="mr-3">
                <v-icon>mdi-star-circle-outline</v-icon>
              </v-avatar>
              <span class="text-h6 font-weight-bold">Licenças e Créditos</span>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <v-row>
                <v-col v-for="(credit, index) in credits" :key="index" cols="6" sm="3" class="mb-2">
                  <div class="font-weight-bold text-body-2">{{ credit.nome }}</div>
                  <div class="text-caption text-medium-emphasis">v{{ credit.versao }} • {{ credit.licenca }}</div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'InstitutionalSection',
  data() {
    return {
      schoolInfo: [
        { icon: 'mdi-map-marker', label: 'Endereço', value: 'Rua da Educação, 123 - Centro' },
        { icon: 'mdi-phone', label: 'Telefone', value: '(11) 3333-4444' },
        { icon: 'mdi-email', label: 'E-mail', value: 'contato@escolaexemplo.edu.br' },
        { icon: 'mdi-calendar-clock', label: 'Funcionamento', value: '7h00 às 19h00' },
        { icon: 'mdi-web', label: 'Site', value: 'www.escolaexemplo.edu.br' }
      ],
      schoolFacts: [
        { label: 'Fundação', value: '1995' },
        { label: 'Alunos', value: '1.240' },
        { label: 'Professores', value: '85' },
        { label: 'Funcionários', value: '42' },
        { label: 'Nota MEC', value: '6.5' }
      ],
      termosUso: {
        resumo: 'Ao usar nossos serviços, você concorda em cumprir estes termos que regulam o uso da plataforma escolar, incluindo responsabilidades do usuário.',
        link: '/termos-de-uso'
      },
      politicaPrivacidade: {
        resumo: 'Protegemos seus dados pessoais com criptografia e seguimos a LGPD. Coletamos informações para a experiência educacional e não vendemos dados.',
        link: '/politica-de-privacidade'
      },
      credits: [
        { nome: 'Vuetify', versao: '3.0.0', licenca: 'MIT' },
        { nome: 'Vue', versao: '3.2.0', licenca: 'MIT' },
        { nome: 'Vue Router', versao: '4.0.0', licenca: 'MIT' },
        { nome: 'Pinia', versao: '2.0.0', licenca: 'MIT' }
      ]
    };
  },
  methods: {
    verTermosCompletos() {
      this.$refs.snackbar?.showInfo('Redirecionando para termos completos...');
    },
    verPoliticaCompleta() {
      this.$refs.snackbar?.showInfo('Redirecionando para política completa...');
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