import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true, // Ativa as funções globais como describe e it
    environment: 'node',
  },
})
