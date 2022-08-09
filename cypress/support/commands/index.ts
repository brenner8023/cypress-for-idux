import { iduxCommands } from './idux';

const customCommands = {
  ...iduxCommands,
  getBy(selector: string) {
    return cy.get(`[data-cy="${selector}"]`);
  },
};

export type CustomCommands = typeof customCommands;

Cypress.Commands.addAll(customCommands);
