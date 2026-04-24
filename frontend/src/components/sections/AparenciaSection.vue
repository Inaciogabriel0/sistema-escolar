<template>
  <v-row>
    <v-col cols="12">
      <div class="d-flex align-center justify-space-between flex-wrap gap-4 mb-4">
        <h2 class="text-h5 font-weight-bold text-primary">Preferências</h2>
      </div>
    </v-col>

    <v-col cols="12" md="6">
      <v-card class="glass-card rounded-xl border-0 h-100 hover-lift">
        <v-card-title class="pa-5 d-flex align-center">
          <v-avatar color="info" variant="tonal" rounded="lg" size="40" class="mr-3">
            <v-icon>mdi-translate</v-icon>
          </v-avatar>
          <span class="text-h6 font-weight-bold">Idioma</span>
        </v-card-title>
        <v-card-text class="pa-5 pt-0">
          <v-select
            v-model="language"
            :items="languages"
            label="Selecionar idioma"
            variant="outlined"
            density="comfortable"
            hide-details
            class="mb-4 mt-2"
          ></v-select>
          <v-btn color="primary" block rounded="pill" class="text-none font-weight-bold" @click="saveLanguage">
            Salvar Idioma
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="6">
      <v-card class="glass-card rounded-xl border-0 hover-lift h-100">
        <v-card-title class="pa-5 d-flex align-center">
          <v-avatar color="secondary" variant="tonal" rounded="lg" size="40" class="mr-3">
            <v-icon>mdi-text-size</v-icon>
          </v-avatar>
          <span class="text-h6 font-weight-bold">Tamanho da Fonte</span>
        </v-card-title>
        <v-card-text class="pa-5 pt-0">
          <div class="px-2">
            <v-slider
              v-model="fontSize"
              :min="8"
              :max="24"
              step="2"
              color="primary"
              thumb-label="always"
              hide-details
              class="mt-6 mb-2"
            >
              <template v-slot:prepend>
                <v-icon size="small">mdi-format-font-size-decrease</v-icon>
              </template>
              <template v-slot:append>
                <v-icon size="large">mdi-format-font-size-increase</v-icon>
              </template>
            </v-slider>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AparenciaSection',
  data() {
    return {
      language: 'pt-BR',
      fontSize: 16,
      languages: [
        { title: 'Português (Brasil)', value: 'pt-BR' },
        { title: 'English', value: 'en-US' },
        { title: 'Español', value: 'es-ES' },
        { title: 'Français', value: 'fr-FR' }
      ]
    };
  },
  methods: {
    saveLanguage() {
      this.$refs.snackbar?.showSuccess('Idioma salvo com sucesso!');
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
.cursor-pointer {
  cursor: pointer;
}
.gap-4 {
  gap: 16px;
}
</style>