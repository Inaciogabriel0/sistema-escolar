 <template>
    <div>
        <v-container fluid class="d-flex align-center justify-center" >
           <v-app-bar scroll-behavior="hide" fluid class="d-flex align-center justify-center"  color="light-blue-accent-4" dark>
            <div class="menu_icon">
            <v-icon>mdi mdi-menu</v-icon>
            </div>
            <div class="butao_login">
             <v-btn
             @click="$router.push({ name: 'login' })"
             icon="mdi-login"
             color="white"
             size="large"
             >
                 Login
             </v-btn>
            </div>
            <v-toolbar-title>School Express</v-toolbar-title>
           </v-app-bar>
        </v-container>
    </div>
</template>


<script>

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