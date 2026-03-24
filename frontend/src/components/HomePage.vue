<template>
  <div class="page">

    <!--  HERO -->
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

          <v-btn color="primary" size="large" @click="$router.push('/Ver-camisa')">
            Comprar farda
          </v-btn>
        </div>
      </v-img>
    </v-container>

    <!--  MENU -->
    <v-container class="section alt">
      <v-row class="text-center">

        <v-col cols="12">
          <h2 class="mb-6">Acesse o sistema</h2>
        </v-col>

        <!-- BOTÃO PRINCIPAL -->
        <v-col cols="12" md="4">
          <div class="menu-card destaque" @click="$router.push('/Ver-camisa')">
            <v-icon size="42" class="icon">mdi-tshirt-crew</v-icon>
            <h3>Comprar Farda</h3>
            <p>Veja os modelos disponíveis</p>
          </div>
        </v-col>

        <!-- 🔹 OUTROS -->
        <v-col cols="12" md="4">
          <div class="menu-card" @click="$router.push('/horarios')">
            <v-icon size="42" class="icon">mdi-calendar-clock</v-icon>
            <h3>Horários</h3>
            <p>Veja os horários das aulas</p>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="menu-card" @click="$router.push('/login')">
            <v-icon size="42" class="icon">mdi-account</v-icon>
            <h3>Login</h3>
            <p>Acesse sua conta</p>
          </div>
        </v-col>

      </v-row>
    </v-container>

    <!-- 🔹 CARROSSEL -->
    <v-container class="section text-center">
      <h2 class="h2SS">Nossa escola</h2>

      <v-carousel
        cycle
        interval="3000"
        show-arrows="hover"
      >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          cover
        />
      </v-carousel>
    </v-container>

    <!-- 🔹 FOOTER -->
    <FooterComponent class="footer" />

  </div>
</template>

<script setup>
import FooterComponent from './Footer/FooterComponent.vue'

import adelino1 from '@/assets/img/adelino1.jpg'
import adelino2 from '@/assets/img/adelino2.jpg'
import adelino3 from '@/assets/img/adelino3.jpg'
import adelino4 from '@/assets/img/adelino4.jpeg'
import logo from '@/assets/img/logo.png'

const items = [
  { src: adelino1 },
  { src: adelino2 },
  { src: adelino3 },
  { src: adelino4 },
]
</script>

<style scoped>
.page {
  background-color: #f5f5f5;
}
.hero {
  height: 300px;
}
.section {
  padding: 60px 0;
}

.section.alt {
  background-color: #ffffff;
}
.menu-card {
  background: white;
  border-radius: 20px;
  padding: 30px 20px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}
.menu-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}
.menu-card .icon {
  color: #1976d2;
  margin-bottom: 10px;
  transition: 0.3s;
}
.menu-card h3 {
  margin: 10px 0 5px;
  font-weight: 600;
}

.menu-card p {
  font-size: 14px;
  color: #666;
}
.menu-card.destaque {
  background: linear-gradient(135deg, #1976d2, #42a5f5);
  color: white;
}
.menu-card.destaque .icon {
  color: white;
}
.menu-card.destaque:hover {
  transform: translateY(-12px) scale(1.03);
}

</style>