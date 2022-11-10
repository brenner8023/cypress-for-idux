import { iduxCommands } from './idux';

const customCommands = {
  ...iduxCommands,

  clickoutside() {
    return cy.get('[data-cy-root]')
      .then($el => {
        $el.trigger('click');
      });
  },
};

type CustomCommands = typeof customCommands;

declare global {
  namespace Cypress {
    interface Chainable extends CustomCommands {}
  }
}

Cypress.Commands.addAll(customCommands);
