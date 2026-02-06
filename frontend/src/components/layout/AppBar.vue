<template >
    <div>
        <v-container>
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

        </v-container>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>