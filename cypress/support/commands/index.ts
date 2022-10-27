import { iduxCommands } from './idux';

const customCommands = {
  ...iduxCommands,

  clickoutside() {
    return cy.get('[data-cy-root]')
      .then($el => {
        $el.trigger('click');
      });
  },

  getBy(selector: string) {
    return cy.get(`[data-cy="${selector}"]`);
  },
};

export type CustomCommands = typeof customCommands;

Cypress.Commands.addAll(customCommands);
