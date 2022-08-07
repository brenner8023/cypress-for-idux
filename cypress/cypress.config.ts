import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173'
  },
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
      viteConfig: {
        configFile: '../vite.config.ts',
      },
    },
    indexHtmlFile: 'cypress/support/index.html',
    supportFile: 'cypress/support/component.ts',
    specPattern: 'src/**/__tests__/**/*.cy.{ts,tsx}',
  },
  viewportWidth: 1366,
  viewportHeight: 750,
})
