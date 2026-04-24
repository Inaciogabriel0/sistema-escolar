import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const premiumDark = {
  dark: true,
  colors: {
    background: '#0f172a',
    surface: '#1e293b',
    primary: '#6366f1',
    secondary: '#8b5cf6',
    error: '#ef4444',
    info: '#3b82f6',
    success: '#10b981',
    warning: '#f59e0b',
    'surface-variant': '#334155',
  }
}

const premiumLight = {
  dark: false,
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    primary: '#4f46e5',
    secondary: '#7c3aed',
    error: '#ef4444',
    info: '#3b82f6',
    success: '#10b981',
    warning: '#f59e0b',
    'surface-variant': '#f1f5f9',
  }
}

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'premiumLight',
    themes: {
      premiumDark,
      premiumLight,
    },
  },
})