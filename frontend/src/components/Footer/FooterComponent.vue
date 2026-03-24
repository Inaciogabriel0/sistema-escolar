<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" color="#039BE5">
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        density="comfortable"
        variant="text"
      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="text-body-small font-weight-regular opacity-60">
      Esse sistema foi feito  para ajudar escolas que tenham dificuldades em vender camisas escolares, e para ajudar os pais a comprar camisas escolares de forma mais fácil.
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>School Express</strong>
    </div>
  </v-footer>
</template>

<script setup>
  const icons = [
    'mdi-facebook',
    'mdi-whatsapp',
    'mdi-instagram',
  ]
</script>
<style scoped>
 /* Footer */
.footer {
  margin-top: 40px;
}
.h2SS {
  font-size: 2.5rem;
  font-weight: bold;
  color: #0091EA;
  margin-bottom: 20px;
}
.menu-card {
  padding: 30px;
  border-radius: 12px;
  background-color: white;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.menu-card:hover {
  transform: translateY(-5px);
}
</style>