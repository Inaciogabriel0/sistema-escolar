<template>
  <v-row>
    <!-- Header para Professores -->
    <v-col cols="12" v-if="userType === 'professor'" class="mb-4">
      <div class="d-flex align-center justify-space-between flex-wrap gap-4">
        <h2 class="text-h5 font-weight-bold text-primary">Gerenciamento Acadêmico</h2>
        <v-btn color="primary" prepend-icon="mdi-plus" rounded="pill" class="text-none font-weight-medium px-6 hover-lift">
          Criar Nova Turma
        </v-btn>
      </div>
    </v-col>

    <!-- Turmas do Professor -->
    <v-col cols="12" md="6" lg="4" v-if="userType === 'professor'">
      <v-card class="glass-card rounded-xl border-0 h-100 hover-lift">
        <v-card-title class="pa-5 pb-2 d-flex align-center">
          <v-avatar color="primary" variant="tonal" rounded="lg" size="40" class="mr-3">
            <v-icon>mdi-chalkboard-outline</v-icon>
          </v-avatar>
          <span class="text-h6 font-weight-bold">Minhas Turmas</span>
        </v-card-title>
        <v-card-text class="pa-5 pt-2">
          <v-list bg-color="transparent" class="pa-0">
            <v-list-item
              v-for="(turma, index) in minhasTurmas"
              :key="index"
              class="rounded-lg mb-2 pa-3 item-interactive"
            >
              <template v-slot:prepend>
                <v-avatar color="indigo-darken-3" class="text-white font-weight-bold mr-3" rounded="lg">
                  {{ turma.nome.charAt(0) }}
                </v-avatar>
              </template>
              <v-list-item-title class="font-weight-bold mb-1">{{ turma.nome }}</v-list-item-title>
              <v-list-item-subtitle class="text-medium-emphasis">
                <v-icon size="14" class="mr-1">mdi-book-open-variant</v-icon> {{ turma.disciplina }}<br>
                <v-icon size="14" class="mr-1">mdi-clock-outline</v-icon> {{ turma.horario }}
              </v-list-item-subtitle>
              <template v-slot:append>
                <v-btn icon="mdi-chevron-right" variant="text" size="small" color="primary"></v-btn>
              </template>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" :md="userType === 'professor' ? 6 : 12" :lg="userType === 'professor' ? 8 : 12">
      <!-- Turmas Vinculadas (Alunos) -->
      <v-card class="glass-card rounded-xl border-0 mb-6 hover-lift">
        <v-card-title class="pa-5 d-flex align-center justify-space-between">
          <div class="d-flex align-center">
            <v-avatar color="secondary" variant="tonal" rounded="lg" size="40" class="mr-3">
              <v-icon>mdi-account-group-outline</v-icon>
            </v-avatar>
            <span class="text-h6 font-weight-bold">Turmas Vinculadas</span>
          </div>
          <v-btn variant="text" color="primary" class="text-none font-weight-medium" @click="verTurmas" append-icon="mdi-arrow-right">Ver todas</v-btn>
        </v-card-title>
        <v-card-text class="pa-5 pt-0">
          <v-row>
            <v-col cols="12" sm="6" md="4" v-for="(turma, index) in turmasVinculadas" :key="index">
              <v-card variant="outlined" class="rounded-lg pa-4 item-interactive border-light-10">
                <div class="d-flex align-center mb-3">
                  <v-avatar color="secondary-darken-1" size="32" rounded class="mr-3 text-caption font-weight-bold">
                    {{ turma.codigo }}
                  </v-avatar>
                  <span class="font-weight-bold text-body-1">{{ turma.nome }}</span>
                </div>
                <div class="text-body-2 text-medium-emphasis d-flex align-center">
                  <v-icon size="16" class="mr-1">mdi-book</v-icon> {{ turma.disciplina }}
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" v-if="turmasVinculadas.length === 0">
              <div class="text-center pa-4 text-medium-emphasis">Nenhuma turma vinculada</div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-row>
        <!-- Minhas Disciplinas -->
        <v-col cols="12" :md="userType === 'aluno' ? 6 : 12">
          <v-card class="glass-card rounded-xl border-0 h-100 hover-lift">
            <v-card-title class="pa-5 d-flex align-center">
              <v-avatar color="info" variant="tonal" rounded="lg" size="40" class="mr-3">
                <v-icon>mdi-book-open-page-variant</v-icon>
              </v-avatar>
              <span class="text-h6 font-weight-bold">Disciplinas</span>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <v-list bg-color="transparent" class="pa-0">
                <v-list-item
                  v-for="(disciplina, index) in disciplinas"
                  :key="index"
                  class="rounded-lg mb-2 pa-2 item-interactive"
                >
                  <v-list-item-title class="font-weight-bold mb-1">{{ disciplina.nome }}</v-list-item-title>
                  <v-list-item-subtitle class="text-medium-emphasis d-flex align-center">
                    <v-chip size="x-small" color="info" variant="flat" class="mr-2 font-weight-bold">{{ disciplina.cargaHoraria }}</v-chip>
                    {{ disciplina.professor }}
                  </v-list-item-subtitle>
                  <template v-slot:append>
                    <v-btn icon="mdi-dots-vertical" variant="text" size="small"></v-btn>
                  </template>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Histórico Escolar -->
        <v-col cols="12" md="6" v-if="userType === 'aluno'">
          <v-card class="glass-card rounded-xl border-0 h-100 hover-lift">
            <v-card-title class="pa-5 d-flex align-center justify-space-between">
              <div class="d-flex align-center">
                <v-avatar color="success" variant="tonal" rounded="lg" size="40" class="mr-3">
                  <v-icon>mdi-folder-account-outline</v-icon>
                </v-avatar>
                <span class="text-h6 font-weight-bold">Histórico</span>
              </div>
              <v-btn icon="mdi-open-in-new" variant="text" size="small" color="primary" @click="verHistoricoCompleto"></v-btn>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <v-list bg-color="transparent" class="pa-0">
                <v-list-item
                  v-for="(ano, index) in historicoEscolar"
                  :key="index"
                  class="rounded-lg mb-2 pa-3 item-interactive"
                >
                  <template v-slot:prepend>
                    <div class="text-center mr-4">
                      <div class="text-caption text-medium-emphasis text-uppercase font-weight-bold">Ano</div>
                      <div class="text-h6 font-weight-black text-primary">{{ ano.ano }}</div>
                    </div>
                  </template>
                  <v-list-item-title class="font-weight-bold mb-1">Média: {{ ano.media }}</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-chip
                      :color="ano.situacao.includes('Aprovado') ? 'success' : 'warning'"
                      size="small"
                      variant="tonal"
                      class="font-weight-bold mt-1"
                    >
                      {{ ano.situacao }}
                    </v-chip>
                  </v-list-item-subtitle>
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
  name: 'AcademicoSection',
  data() {
    return {
      userType: 'aluno', // Would come from auth store
      minhasTurmas: [ // For professors
        { nome: 'Matemática A', disciplina: 'Matemática', horario: '2ª e 5ª - 14h' },
        { nome: 'Física B', disciplina: 'Física', horario: '3ª e 6ª - 10h' }
      ],
      turmasVinculadas: [ // For students
        { nome: 'Matemática A', disciplina: 'Matemática', codigo: 'MAT101' },
        { nome: 'Português B', disciplina: 'Português', codigo: 'POR102' },
        { nome: 'História C', disciplina: 'História', codigo: 'HIS103' }
      ],
      disciplinas: [
        { nome: 'Matemática A', cargaHoraria: '80h', professor: 'Prof. Silva' },
        { nome: 'Português B', cargaHoraria: '80h', professor: 'Prof. Costa' },
        { nome: 'História C', cargaHoraria: '60h', professor: 'Prof. Lima' },
        { nome: 'Física B', cargaHoraria: '80h', professor: 'Prof. Santos' }
      ],
      historicoEscolar: [
        { ano: '2023', media: '8.5', situacao: 'Aprovado' },
        { ano: '2024', media: '7.8', situacao: 'Aprovado' },
        { ano: '2025', media: '9.2', situacao: 'Aprovado (em curso)' }
      ]
    };
  },
  methods: {
    verTurmas() {
      this.$refs.snackbar?.showInfo('Redirecionando para lista de turmas...');
    },
    verDisciplinas() {
      this.$refs.snackbar?.showInfo('Redirecionando para lista de disciplinas...');
    },
    verHistoricoCompleto() {
      this.$refs.snackbar?.showInfo('Redirecionando para histórico completo...');
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
  border-color: rgba(128, 128, 128, 0.1);
  transform: translateY(-2px);
}
.border-light-10 {
  border-color: rgba(128, 128, 128, 0.1) !important;
}
.gap-4 {
  gap: 16px;
}
</style>