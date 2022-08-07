import { mount } from 'cypress/vue';
import { h, type App } from 'vue';
import { IduxProvider } from '@/components/idux-provider';

import { idux } from '@/plugins';

import './commands';

Cypress.Commands.add('mount', (component, options = {}) => {
  options.global = options.global || {};
  options.global.plugins = options.global.plugins || [];

  options.global.plugins.push({
    install(app: App) {
      app.use(idux);
    },
  });

  return mount(() => {
    return h(IduxProvider, {}, h(component as any))
  }, options).then(() => {
    cy.wrap(Cypress.vueWrapper).as('vue');
  });
});
