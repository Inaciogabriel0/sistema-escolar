<template>
  <div class="page">

    <!-- 🔹 HERO -->
    <v-container class="hero pa-0">
  <v-img
    :src="logo"
    height="300"
    cover
  >
    <div class="overlay d-flex flex-column align-center justify-center text-center">
      <h1 class="mb-4 text-white">Seja bem vindo!</h1>
      <p class="mb-6 text-white">
        Compre sua farda de forma rápida e prática
      </p>

      <v-btn color="primary" size="large" to="/fardas">
        Comprar farda
      </v-btn>
    </div>
  </v-img>
</v-container>

   <v-container class="section alt">
  <v-row class="text-center">

    <!-- 🔹 Título -->
    <v-col cols="12">
      <h2 class="mb-6">Acesse o sistema</h2>
    </v-col>

    <!-- 🔹 BOTÃO PRINCIPAL -->
    <v-col cols="12" md="4">
      <div class="menu-card destaque" @click="$router.push('/fardas')">
        <h3>Comprar Farda</h3>
        <p>Veja os modelos disponíveis</p>
      </div>
    </v-col>

    <!-- 🔹 OUTROS -->
    <v-col cols="12" md="4">
      <div class="menu-card" @click="$router.push('/horarios')">
        <h3>Horários</h3>
        <p>Veja os horários das aulas</p>
      </div>
    </v-col>

    <v-col cols="12" md="4">
      <div class="menu-card" @click="$router.push('/login')">
        <h3>Login</h3>
        <p>Acesse sua conta</p>
      </div>
    </v-col>

  </v-row>
</v-container>
    <!-- 🔹 CTA -->
    <v-container class="section text-center">
      <h2 class="h2SS">Nossa escola</h2>
      <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>
    </v-container>

    <!-- 🔹 FOOTER -->
    <Footer class="footer" />

  </div>
</template>

<script setup>
import Footer from '@/components/Footer/FooterComponent.vue'
import adelino1 from '@/assets/img/adelino1.jpg'
import adelino2 from '@/assets/img/adelino2.jpg'
import adelino3 from '@/assets/img/adelino3.jpg'
import adelino4 from '@/assets/img/adelino4.jpeg'
import logo from '@/assets/img/logo.png'

 const items = [
    {
      src: adelino1,
    },
    {
      src: adelino2,
    },
    {
      src: adelino3,
    },
    {
      src: adelino4,
    },
  ]
</script>

<style scoped>
/* Fundo geral da página */
.page {
  background-color: #f5f5f5;
}

/* HERO */
.hero {
  height: 300px;
  background-color: #e0e0e0;
}

/* Seções padrão */
.section {
  padding: 60px 0;
  background-color: #f5f5f5;
}

/* Seções alternadas */
.section.alt {
  background-color: #ffffff;
}

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

/* Destaque do botão principal */
.destaque {
  background: linear-gradient(135deg, #100a7f86, #0091EA);
  color: white;
}
</style>