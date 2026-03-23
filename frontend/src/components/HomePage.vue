 <template>
    <div>

      <!--
        <v-container fluid class="d-flex align-center justify-center" >
        <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="align-end text-white"
      height="300"
      :src="imagem"
      cover
    >
    
      <v-card-title class="text-black">
        camisas para seu ano letivo
      </v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4"
   
    >
      camisa escolar
    </v-card-subtitle>

    <v-card-text>
      <div>camisa escolar para seu ano letivo</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="black" text="Comprar">

      </v-btn>

      <v-btn color="black" text="Ver"
       @click="$router.push({ name: 'Ver-camisa' })"
      ></v-btn>
    </v-card-actions>
  </v-card>
         
        </v-container>
        -->

    </div>
   <Footer 
   class="footer"
   />
</template>

<script setup>
import imagem from '@/assets/img/camisa-escolar.png';
import Footer from '@/components/Footer/FooterComponent.vue';


</script>

<style scoped>
  .footer {
   position: fixed;
   bottom: 0;
   width: 100%;

  } 
</style>