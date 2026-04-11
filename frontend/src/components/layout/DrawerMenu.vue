<template>
  <v-navigation-drawer
    :model-value="modelValue"
    @update:modelValue="onUpdate"
    temporary
  >
    <v-list density="compact" nav>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :to="item.route"
        link
        @click="closeDrawer"
      >
        <template #prepend>
          <v-icon>{{ item.icon }}</v-icon>
        </template>

        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const menuItems = [
  { title: 'Início', icon: 'mdi-home', route: '/' },
  { title: 'Turma', icon: 'mdi-google-classroom', route: '/turma' },
  { title: 'Horários', icon: 'mdi-calendar-clock', route: '/horarios' },
  { title: 'Configurações', icon: 'mdi-cog', route: '/configuracoes' },
   {title: 'Farda', icon: 'mdi-cart', route: '/Ver-camisa'}
]

function closeDrawer() {
  emit('update:modelValue', false)
}

function onUpdate(value: boolean) {
  emit('update:modelValue', value)
}
</script>
