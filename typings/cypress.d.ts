import { mount } from 'cypress/vue';
import type { CustomCommands } from '../cypress/support/commands';

declare global {
  namespace Cypress {
    interface Chainable extends CustomCommands {
      mount: typeof mount;
    }
  }
}
