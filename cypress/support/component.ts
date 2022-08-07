import { mount } from 'cypress/vue';
import type { App } from 'vue';

import { idux } from '../../src/plugins';

import './commands';

Cypress.Commands.add('mount', (component, options = {}) => {
  options.global = options.global || {};
  options.global.plugins = options.global.plugins || [];

  options.global.plugins.push({
    install(app: App) {
      app.use(idux)
    },
  })

  return mount(component, options).then(() => {
    cy.wrap(Cypress.vueWrapper).as('vue');
  });
});
