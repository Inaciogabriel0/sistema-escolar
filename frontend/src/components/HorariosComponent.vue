<template >
    <div>
    <v-container class="section text-center"
    >

      <h2 class="h2SS">Horários das aulas</h2>
      <p>Confira os horários das aulas para organizar seu dia</p>
      <v-img 
      :src="horarios"
      interval="3000"
      show-arrows="hover"
      >
    
    </v-img>
      
    </v-container>
    </div>
</template>
<script>
import horarios from '@/assets/img/horarios.png'


export default {
    components: {
    
    },

    data() {
        return {
            horarios
        }
    }
}
</script>
<style lang="">
    
</style>