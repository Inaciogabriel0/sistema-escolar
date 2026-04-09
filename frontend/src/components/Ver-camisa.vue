<template>
  <div class="product-page">
    <!-- Product Image -->
    <v-container class="pa-0">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10" md="8" lg="6">
          <v-img
            :src="product.image"
            height="400"
            contain
            class="mb-6"
          />
        </v-col>
      </v-row>
    </v-container>

    <!-- Product Details -->
    <v-container>
      <v-row>
        <!-- Product Info -->
        <v-col cols="12" sm="10" md="8" lg="6" class="mx-auto">
          <h1 class="display-5 mb-4">{{ product.name }}</h1>

          <v-row class="mb-4">
            <v-col cols="6">
              <p class="text-body-1"><strong>Referência:</strong> {{ product.reference }}</p>
            </v-col>
            <v-col cols="6">
              <p class="text-body-1"><strong>Disponibilidade:</strong>
                <span v-if="product.inStock" class="success--text">Em estoque</span>
                <span v-else class="error--text">Indisponível</span>
              </p>
            </v-col>
          </v-row>

          <p class="text-body-2 mb-6">{{ product.description }}</p>

          <!-- Price -->
          <div class="mb-6">
            <p class="text-h5 mb-2">Preço</p>
            <p class="display-4 text-primary">R$ {{ product.price.toFixed(2) }}</p>
          </div>

          <!-- Size Selection -->
          <div class="mb-6">
            <p class="text-h5 mb-2">Tamanho</p>
            <v-row>
              <v-col
                v-for="(size, index) in product.sizes"
                :key="index"
                cols="12"
                sm="6"
                md="3"
                class="mb-2"
              >
                <v-btn
                  variant="outlined"
                  color="primary"
                  size="small"
                  class="ma-1"
                  :class="{
                    'primary--text': selectedSize === size,
                    'border': selectedSize !== size
                  }"
                  @click="selectedSize = size"
                  :disabled="!product.inStock"
                >
                  {{ size }}
                </v-btn>
              </v-col>
            </v-row>
          </div>

          <!-- Quantity Selector -->
          <div class="mb-6">
            <p class="text-h5 mb-2">Quantidade</p>
            <v-row align="center">
              <v-col cols="auto">
                <v-btn
                  variant="outlined"
                  color="primary"
                  size="small"
                  class="mr-2"
                  @click="decrementQuantity"
                  :disabled="quantity <= 1 || !product.inStock"
                >
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="auto">
                <p class="text-h6 mb-0 mx-4">{{ quantity }}</p>
              </v-col>
              <v-col cols="auto">
                <v-btn
                  variant="outlined"
                  color="primary"
                  size="small"
                  class="ml-2"
                  @click="incrementQuantity"
                  :disabled="quantity >= 10 || !product.inStock"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>

          <!-- Add to Cart Button -->
          <v-btn
            color="primary"
            size="large"
            block
            class="mb-4"
            @click="addToCart"
            :disabled="!product.inStock || selectedSize === ''"
          >
            <template v-if="isAddingToCart">
              <v-progress-circular
                indeterminate
                size="20"
                color="white"
                class="mr-2"
              />
              Adicionando...
            </template>
            <template v-else>
              <v-icon left>mdi-cart-plus</v-icon>
              Adicionar ao carrinho
            </template>
          </v-btn>

          <!-- Continue Shopping -->
          <v-btn
            variant="text"
            color="primary"
            size="small"
            @click="$router.push('/')"
          >
            ← Continuar comprando
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Product data (in a real app, this would come from an API)
const product = ref({
  id: 1,
  name: 'Camisa Polo Escolar',
  reference: 'CP-001',
  description: 'Camisa polo de alta qualidade, feita com algodão piquet confortável e durável. Possui gola em ribana e três botões na frente. Ideal para uso escolar diário.',
  price: 89.90,
  inStock: true,
  sizes: ['PP', 'P', 'M', 'G', 'GG', 'XG'],
  image: '@/assets/img/camisa-escolar.png' // Using the existing shirt image
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

  // Simulate API call
  setTimeout(() => {
    // In a real app, you would send this to your cart API
    const cartItem = {
      id: product.value.id,
      name: product.value.name,
      reference: product.value.reference,
      price: product.value.price,
      size: selectedSize.value,
      quantity: quantity.value,
      image: product.value.image
    }

    // For now, we'll just show a success message
    // You would typically use a store (like Vuex/Pinia) or emit an event
    alert(`Produto adicionado ao carrinho!\n${product.value.name} - Tamanho: ${selectedSize.value} - Quantidade: ${quantity.value}`)

    isAddingToCart.value = false
    // Reset form after adding to cart
    selectedSize.value = ''
    quantity.value = 1
  }, 1000)
}
</script>

<style scoped>
.product-page {
  background-color: #f8f9fa;
  min-height: calc(100vh - 64px); /* Account for app bar */
}

.v-img {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.v-btn {
  border-radius: 8px;
  text-transform: none;
  transition: all 0.2s ease;
}

.v-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.v-btn:active {
  transform: translateY(0);
}

.v-progress-circular {
  display: inline-block;
  vertical-align: middle;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .product-page {
    padding-bottom: 20px;
  }

  .v-img {
    height: 300px;
  }

  .display-5 {
    font-size: 1.8rem;
  }

  .display-4 {
    font-size: 2.2rem;
  }
}
</style>