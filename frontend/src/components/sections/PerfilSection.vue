<template>
  <v-row>
    <v-col cols="12" md="4">
      <v-card class="glass-card rounded-xl border-0 h-100 hover-lift text-center pa-6">
        <v-avatar size="120" color="primary" variant="tonal" class="mb-4 elevation-2">
          <v-img src="/placeholder-user.jpg" cover v-if="false"></v-img>
          <span class="text-h3 font-weight-bold text-primary">{{ userData.nome.charAt(0) || 'U' }}</span>
          <v-btn
            icon="mdi-camera-edit"
            color="primary"
            size="small"
            class="position-absolute"
            style="bottom: 0; right: 0;"
          ></v-btn>
        </v-avatar>

        <h3 class="text-h5 font-weight-bold mb-1">{{ userData.nome || 'Carregando...' }}</h3>
        <p class="text-medium-emphasis mb-6">{{ userData.email }}</p>
        
        <v-chip color="secondary" variant="flat" class="font-weight-bold px-4 mb-6 text-uppercase">
          {{ userData.tipo === 'aluno' ? 'Aluno' : 'Professor' }}
        </v-chip>

        <v-divider class="mb-4"></v-divider>

        <v-list bg-color="transparent" class="text-left pa-0">
          <v-list-item v-for="(info, index) in profileInfo" :key="index" class="pa-0 mb-2">
            <template v-slot:prepend>
              <v-avatar color="info" variant="tonal" size="32" class="mr-3">
                <v-icon size="18">{{ info.icon }}</v-icon>
              </v-avatar>
            </template>
            <v-list-item-title class="font-weight-medium text-caption text-medium-emphasis">{{ info.label }}</v-list-item-title>
            <v-list-item-subtitle class="font-weight-bold text-body-2 text-high-emphasis opacity-100">{{ info.value }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>

    <v-col cols="12" md="8">
      <v-row>
        <!-- Editar Nome -->
        <v-col cols="12">
          <v-card class="glass-card rounded-xl border-0 hover-lift">
            <v-card-title class="pa-5 d-flex align-center pb-2">
              <v-avatar color="primary" variant="tonal" rounded="lg" size="40" class="mr-3">
                <v-icon>mdi-account-edit</v-icon>
              </v-avatar>
              <span class="text-h6 font-weight-bold">Informações Básicas</span>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="editForm.nome"
                    label="Nome completo"
                    variant="outlined"
                    density="comfortable"
                    hide-details="auto"
                    class="mt-2"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="editForm.email"
                    label="E-mail"
                    variant="outlined"
                    density="comfortable"
                    hide-details="auto"
                    class="mt-2"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" class="d-flex justify-end mt-2">
                  <v-btn color="primary" rounded="pill" class="text-none font-weight-bold px-6" @click="saveBasicInfo">
                    Salvar Alterações
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

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
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="senhaForm.senhaAtual"
                      label="Senha atual"
                      type="password"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      class="mt-2"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="senhaForm.novaSenha"
                      label="Nova senha"
                      type="password"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      class="mt-2"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="senhaForm.confirmarSenha"
                      label="Confirmar senha"
                      type="password"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      class="mt-2"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="d-flex justify-end mt-2">
                    <v-btn color="error" variant="flat" rounded="pill" class="text-none font-weight-bold px-6" @click="saveSenha">
                      Atualizar Senha
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'PerfilSection',
  data() {
    return {
      userData: {
        nome: '',
        email: '',
        tipo: 'aluno'
      },
      editForm: {
        nome: '',
        email: ''
      },
      senhaForm: {
        senhaAtual: '',
        novaSenha: '',
        confirmarSenha: ''
      },
      validSenha: true,
      profileInfo: [
        { icon: 'mdi-calendar', label: 'Nascimento', value: '15/03/2005' },
        { icon: 'mdi-phone', label: 'Telefone', value: '(11) 99999-9999' },
        { icon: 'mdi-map-marker', label: 'Endereço', value: 'Rua Exemplo, 123 - SP' },
        { icon: 'mdi-card-account-details', label: 'Matrícula', value: '2023001234' }
      ]
    };
  },
  mounted() {
    this.loadUserData();
  },
  methods: {
    loadUserData() {
      setTimeout(() => {
        this.userData = {
          nome: 'João Silva',
          email: 'joao.silva@email.com',
          tipo: 'aluno'
        };
        this.editForm.nome = this.userData.nome;
        this.editForm.email = this.userData.email;
      }, 500);
    },
    saveBasicInfo() {
      if (this.editForm.nome.trim() && this.editForm.email.trim()) {
        this.userData.nome = this.editForm.nome;
        this.userData.email = this.editForm.email;
        this.$refs.snackbar?.showSuccess('Informações atualizadas com sucesso!');
      }
    },
    saveSenha() {
      if (this.$refs.senhaForm.validate() && this.senhaForm.novaSenha === this.senhaForm.confirmarSenha) {
        this.senhaForm.senhaAtual = '';
        this.senhaForm.novaSenha = '';
        this.senhaForm.confirmarSenha = '';
        this.$refs.snackbar?.showSuccess('Senha alterada com sucesso!');
      }
    }
  }
};
</script>

<style scoped>
.opacity-100 {
  opacity: 1 !important;
}
</style>