import { defineStore } from 'pinia'

export const useSnackbarStore = defineStore('snackbar', {
  state: () => ({
    show: false,
    message: '',
    color: 'success', 
    loading: false,
  }),

  actions: {
    success(msg: string) {
      this.message = msg
      this.color = 'success'
      this.show = true
    },

    error(msg: string) {
      this.message = msg
      this.color = 'error'
      this.show = true
    },

    info(msg: string) {
      this.message = msg
      this.color = 'info'
      this.show = true
    },

    startLoading(msg = 'Carregando...') {
      this.message = msg
      this.color = 'info'
      this.loading = true
      this.show = true
    },

    stopLoading() {
      this.loading = false
      this.show = false
    },
  },
})
