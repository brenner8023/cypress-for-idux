import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{ts,tsx}',
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.ts',
  },
  component: {
    // 运行卡顿时，可尝试改为false不监听文件改动
    // watchForFileChanges: false,
    watchForFileChanges: true,
    devServer: {
      framework: 'vue',
      bundler: 'vite',
      viteConfig: {
        configFile: '../vite.config.ts',
      },
    },
    indexHtmlFile: 'cypress/support/index.html',
    supportFile: 'cypress/support/component.ts',
    // specPattern: 'src/**/__tests__/**/tag.cy.{ts,tsx}',
    specPattern: 'src/**/__tests__/**/*.cy.{ts,tsx}',
  },
  viewportWidth: 1366,
  viewportHeight: 750,
})
