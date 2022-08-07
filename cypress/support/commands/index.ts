import { iduxCommands } from './idux';

export type IduxCommands = typeof iduxCommands;

Cypress.Commands.addAll(iduxCommands);
