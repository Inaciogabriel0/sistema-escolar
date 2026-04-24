<template>
  <v-container fluid class="product-page py-8">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-btn
          variant="text"
          color="primary"
          prepend-icon="mdi-arrow-left"
          class="text-none font-weight-bold mb-6 px-0 hover-lift"
          @click="$router.push('/')"
        >
          Voltar para a Loja
        </v-btn>

        <v-card class="glass-card rounded-xl border-0 overflow-hidden hover-lift-subtle" elevation="0">
          <v-row no-gutters>
            <!-- Product Image -->
            <v-col cols="12" md="6" class="bg-surface-variant d-flex align-center justify-center pa-8" style="position: relative;">
              <v-img
                :src="product.image"
                height="400"
                class="rounded-lg elevation-4"
                style="max-width: 100%; object-fit: contain;"
              ></v-img>
            </v-col>

            <!-- Product Details -->
            <v-col cols="12" md="6" class="pa-8 d-flex flex-column justify-center">
              <div class="mb-2 d-flex align-center justify-space-between">
                <v-chip size="small" color="primary" variant="tonal" class="font-weight-bold">
                  {{ product.reference }}
                </v-chip>
                <v-chip size="small" :color="product.inStock ? 'success' : 'error'" variant="flat" class="font-weight-bold">
                  <v-icon start size="16">{{ product.inStock ? 'mdi-check-circle' : 'mdi-close-circle' }}</v-icon>
                  {{ product.inStock ? 'Em estoque' : 'Indisponível' }}
                </v-chip>
              </div>

              <h1 class="text-h4 font-weight-black text-primary mb-4">{{ product.name }}</h1>
              
              <p class="text-body-1 text-medium-emphasis mb-6" style="line-height: 1.6;">
                {{ product.description }}
              </p>

              <!-- Price -->
              <div class="mb-6">
                <span class="text-subtitle-2 text-medium-emphasis text-uppercase font-weight-bold">Preço</span>
                <div class="text-h3 font-weight-black text-primary">R$ {{ product.price.toFixed(2).replace('.', ',') }}</div>
              </div>

              <v-divider class="mb-6"></v-divider>

              <!-- Size Selection -->
              <div class="mb-6">
                <div class="d-flex align-center justify-space-between mb-3">
                  <span class="text-subtitle-2 text-medium-emphasis text-uppercase font-weight-bold">Tamanho</span>
                  <a href="#" class="text-caption text-primary text-decoration-none">Guia de tamanhos</a>
                </div>
                <div class="d-flex flex-wrap gap-2">
                  <v-btn
                    v-for="(size, index) in product.sizes"
                    :key="index"
                    :variant="selectedSize === size ? 'flat' : 'outlined'"
                    :color="selectedSize === size ? 'primary' : 'medium-emphasis'"
                    class="rounded-lg font-weight-bold"
                    min-width="60"
                    @click="selectedSize = size"
                    :disabled="!product.inStock"
                  >
                    {{ size }}
                  </v-btn>
                </div>
              </div>

              <!-- Quantity Selector -->
              <div class="mb-8">
                <span class="text-subtitle-2 text-medium-emphasis text-uppercase font-weight-bold mb-3 d-block">Quantidade</span>
                <div class="d-inline-flex align-center bg-surface-variant rounded-lg pa-1">
                  <v-btn
                    icon="mdi-minus"
                    variant="text"
                    size="small"
                    color="primary"
                    @click="decrementQuantity"
                    :disabled="quantity <= 1 || !product.inStock"
                  ></v-btn>
                  <span class="text-h6 font-weight-bold px-6">{{ quantity }}</span>
                  <v-btn
                    icon="mdi-plus"
                    variant="text"
                    size="small"
                    color="primary"
                    @click="incrementQuantity"
                    :disabled="quantity >= 10 || !product.inStock"
                  ></v-btn>
                </div>
              </div>

              <!-- Add to Cart Button -->
              <v-btn
                color="primary"
                size="x-large"
                rounded="pill"
                block
                class="text-none font-weight-bold hover-lift shadow-primary"
                @click="addToCart"
                :disabled="!product.inStock || !selectedSize"
                :loading="isAddingToCart"
              >
                <template v-slot:prepend>
                  <v-icon>mdi-cart-plus</v-icon>
                </template>
                Adicionar ao Carrinho
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import camisaImg from '@/assets/img/camisa-escolar-ad.jpg'

// Product data
const product = ref({
  id: 1,
  name: 'Camisa Polo Escolar Adelino Dantas',
  reference: 'CP-001',
  description: 'Camisa polo de alta qualidade, feita com algodão piquet confortável e durável. Possui gola em ribana, três botões na frente e emblema Adelino Dantas. Ideal para uso escolar diário.',
  price: 45.00,
  inStock: true,
  sizes: ['PP', 'P', 'M', 'G', 'GG'],
  image: camisaImg
})

const selectedSize = ref('')
const quantity = ref(1)
const isAddingToCart = ref(false)

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const incrementQuantity = () => {
  if (quantity.value < 10) {
    quantity.value++
  }
}

const addToCart = () => {
  if (!selectedSize.value || !product.value.inStock) return

  isAddingToCart.value = true

  setTimeout(() => {
    alert(`Produto adicionado ao carrinho!\n${product.value.name}\nTamanho: ${selectedSize.value}\nQuantidade: ${quantity.value}`)

    isAddingToCart.value = false
    selectedSize.value = ''
    quantity.value = 1
  }, 1000)
}
</script>

<style scoped>
.product-page {
  background: radial-gradient(circle at top left, rgba(99, 102, 241, 0.05), transparent 40%),
              radial-gradient(circle at bottom right, rgba(139, 92, 246, 0.05), transparent 40%);
  min-height: calc(100vh - 64px);
}

.hover-lift-subtle {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-lift-subtle:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08) !important;
}

.shadow-primary {
  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3) !important;
}

.gap-2 {
  gap: 8px;
}
</style>