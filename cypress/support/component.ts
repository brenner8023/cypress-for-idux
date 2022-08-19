import { mount } from 'cypress/vue';
import { type App, defineComponent } from 'vue';
import type { CustomCommands } from './commands';
import { IduxProvider } from '@/components/idux-provider';

import { idux } from '@/plugins';

import './commands';

declare global {
  namespace Cypress {
    interface Chainable extends CustomCommands {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', (component, options = {}) => {
  options.global = options.global || {};
  options.global.plugins = options.global.plugins || [];

  options.global.plugins.push({
    install(app: App) {
      app.use(idux);
    },
  });

  return mount(
    defineComponent({
      template: `<div><IduxProvider><Comp v-bind="$attrs" /></IduxProvider></div>`,
      components: {
        IduxProvider,
        // @ts-ignore
        Comp: component,
      },
    }),
    options,
  ).then(() => {
    cy.wrap(Cypress.vueWrapper).as('vue');
  });
});
