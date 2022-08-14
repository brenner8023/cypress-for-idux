import { mount } from 'cypress/vue';
import { type App, defineComponent } from 'vue';
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

  return mount(
    defineComponent({
      template: `<IduxProvider><Comp v-bind="$attrs" /></IduxProvider>`,
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
