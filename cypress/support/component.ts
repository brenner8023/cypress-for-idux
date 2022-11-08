import { mount } from 'cypress/vue';
import { type App, defineComponent } from 'vue';
import { IduxProvider } from '@/components/idux-provider';
import 'cypress-real-events/support';
import { idux } from '@/plugins';

import './commands';

declare global {
  namespace Cypress {
    interface Chainable {
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
      name: 'Wrapper',
      template: `<div><IduxProvider>
        <Comp v-bind="$attrs">
          <template v-for="(_, name) in $slots">
            <slot :name="name" />
          </template>
        </Comp>
      </IduxProvider></div>`,
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
