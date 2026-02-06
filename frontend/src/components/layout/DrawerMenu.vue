<template >
    <div>
        <v-container>
            <!-- Navigation Drawer -->
         <v-navigation-drawer
            v-model="drawer"
            app
            temporary
            location="left"
            >
            <v-list density="compact" nav>
                <v-list-item
                    v-for="item in menuItems"
                    :key="item.title"
                    :to="item.route"
                    :prepend-icon="item.icon"
                    :title="item.title"
                    @click="drawer = false"
                >
                </v-list-item>
             </v-list>
        </v-navigation-drawer>
        </v-container>
    </div>
</template>
<script>
import { ref } from 'vue';

const menuItems = ref([
  { title: 'Início', icon: 'mdi-home', route: '/' },
  { title: 'Professores', icon: 'mdi-account-tie', route: '/professores' },
  { title: 'Turma', icon: 'mdi-google-classroom', route: '/turma' },
  { title: 'Horários', icon: 'mdi-calendar-clock', route: '/horarios' },
  { title: 'Notas', icon: 'mdi-clipboard-text', route: '/notas' },
  { title: 'Configurações', icon: 'mdi-cog', route: '/configuracoes' },
])

</script>
<style scoped>
     .menu_icon {
        cursor: pointer;
        padding-left: 1%;
    }
    .butao_login {
        position: absolute;
        right: 1%;
        cursor: pointer;
        box-sizing: border-box;
    }
</style>