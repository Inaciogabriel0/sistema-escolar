<template>
  <v-snackbar
    v-model="snackbar.show"
    :color="snackbar.color"
    location="bottom right"
    timeout="3000"
  >
    <div class="d-flex align-center">
      <v-progress-circular
        v-if="snackbar.loading"
        indeterminate
        size="20"
        class="mr-3"
        color="white"
      />
      {{ snackbar.message }}
    </div>
  </v-snackbar>
</template>

<script setup lang="ts">
import { useSnackbarStore } from '../store/snackbar'

const snackbar = useSnackbarStore()
</script>
