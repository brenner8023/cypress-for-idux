import { mount } from 'cypress/vue';
import type { IduxCommands } from '../cypress/support/commands';

declare global {
  namespace Cypress {
    interface Chainable extends IduxCommands {
      mount: typeof mount;
    }
  }
}
