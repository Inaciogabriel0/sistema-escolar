 <template>
    <div>
        <!-- Navigation Bar -->
        <v-container fluid class="d-flex align-center justify-center" >
           <v-app-bar scroll-behavior="hide" fluid class="d-flex align-center justify-center"  color="light-blue-accent-4" dark>
            <div class="menu_icon" @click="drawer = !drawer">
            <v-icon>mdi mdi-menu</v-icon>
            </div>

            <v-toolbar-title>School Express</v-toolbar-title>

            <!-- Login button -->
            <div class="butao_login">
             <v-btn
             @click="$router.push({ name: 'login' })" 
             color="white"
             size="large"
             >
                Login
             </v-btn>
            </div>
         </v-app-bar>

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

<script  setup>
import { ref } from 'vue';

const drawer = ref(false)

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