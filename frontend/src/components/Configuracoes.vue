<template>
  <v-container fluid class="pa-4 pa-md-8 settings-page-wrapper">
    <!-- Header -->
    <div class="d-flex align-center mb-8">
      <v-avatar color="primary" variant="tonal" size="56" class="mr-4">
        <v-icon size="32" color="primary">mdi-cog-outline</v-icon>
      </v-avatar>
      <div>
        <h1 class="text-h4 font-weight-bold mb-1 text-black">Configurações</h1>
        <p class="text-subtitle-1 text-medium-emphasis mb-0">Gerencie suas preferências e conta do School Express</p>
      </div>
    </div>

    <v-row>
      <!-- Sidebar Desktop -->
      <v-col cols="12" md="4" lg="3" class="d-none d-md-block">
        <v-card class="glass-card rounded-xl pa-3 hover-lift" elevation="0">
          <v-list bg-color="transparent" nav>
            <v-list-item
              v-for="section in sections"
              :key="section.id"
              :value="section.id"
              @click="activeSection = section.id"
              :active="activeSection === section.id"
              color="primary"
              class="rounded-lg mb-1 sidebar-item"
              active-class="sidebar-item-active"
            >
              <template v-slot:prepend>
                <v-icon :icon="section.icon" size="22" class="mr-3"></v-icon>
              </template>
              <v-list-item-title class="font-weight-medium text-body-1">{{ section.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <!-- Mobile Tabs -->
      <v-col cols="12" class="d-md-none mb-4">
        <v-card class="glass-card rounded-xl" elevation="0">
          <v-tabs
            v-model="activeSection"
            color="primary"
            show-arrows
            bg-color="transparent"
            slider-color="primary"
          >
            <v-tab
              v-for="section in sections"
              :key="section.id"
              :value="section.id"
              class="text-none font-weight-medium"
            >
              <v-icon start>{{ section.icon }}</v-icon>
              {{ section.title }}
            </v-tab>
          </v-tabs>
        </v-card>
      </v-col>

      <v-col cols="12" md="8" lg="9">
        <transition name="fade" mode="out-in">
          <div :key="activeSection" class="content-wrapper">
            <component :is="currentSectionComponent" />
          </div>
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PerfilSection from './sections/PerfilSection.vue';
import PrivacSegurancaSection from './sections/PrivacSegurancaSection.vue';
import NotificacoesSection from './sections/NotificacoesSection.vue';
import AparenciaSection from './sections/AparenciaSection.vue';
import AcademicoSection from './sections/AcademicoSection.vue';
import ComunicacaoSection from './sections/ComunicacaoSection.vue';
import InstitutionalSection from './sections/InstitutionalSection.vue';
import ContaSection from './sections/ContaSection.vue';

export default {
  name: 'Configuracoes',
  components: {
    PerfilSection,
    PrivacSegurancaSection,
    NotificacoesSection,
    AparenciaSection,
    AcademicoSection,
    ComunicacaoSection,
    InstitutionalSection,
    ContaSection
  },
  data() {
    return {
      activeSection: 'perfil',
      sections: [
        { id: 'perfil', title: 'Perfil', icon: 'mdi-account-circle', component: PerfilSection },
        { id: 'privac-seguranca', title: 'Privacidade e Segurança', icon: 'mdi-shield-lock', component: PrivacSegurancaSection },
        { id: 'notificacoes', title: 'Notificações', icon: 'mdi-bell', component: NotificacoesSection },
        { id: 'aparencia', title: 'Aparência', icon: 'mdi-palette', component: AparenciaSection },
        { id: 'academico', title: 'Acadêmico', icon: 'mdi-school', component: AcademicoSection },
        { id: 'comunicacao', title: 'Comunicação', icon: 'mdi-chat-processing', component: ComunicacaoSection },
        { id: 'institucional', title: 'Institucional', icon: 'mdi-building', component: InstitutionalSection },
        { id: 'conta', title: 'Conta', icon: 'mdi-account-off', component: ContaSection }
      ]
    };
  },
  computed: {
    currentSectionComponent() {
      const section = this.sections.find(s => s.id === this.activeSection);
      return section ? section.component : null;
    }
  }
};
</script>

<style scoped>
.settings-page-wrapper {
  min-height: calc(100vh - 64px);
  background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.15), transparent 40%),
              radial-gradient(circle at bottom left, rgba(139, 92, 246, 0.15), transparent 40%);
}

.sidebar-item {
  transition: all 0.3s ease;
}

.sidebar-item:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateX(4px);
}

.sidebar-item-active {
  background: rgba(99, 102, 241, 0.1) !important;
  border-left: 4px solid var(--v-theme-primary);
}

.content-wrapper {
  animation: fadeSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@keyframes fadeSlideUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.v-window {
  overflow: visible !important;
}
</style>