import { defineStore } from 'pinia'

export type UserRole = 'aluno' | 'professor' | 'admin'

export interface User {
  id: number
  name: string
  role: UserRole
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    user: null as User | null,
    loading: false,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    setAuth(token: string, user: User) {
      this.token = token
      this.user = user
    },

    clearAuth() {
      this.token = null
      this.user = null
    },
  },
})
