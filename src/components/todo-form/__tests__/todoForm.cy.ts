import { TodoForm } from '..';

describe('component TodoForm', () => {
  it('aa', () => {
    cy.mount(TodoForm)
      .iInput_setValue('[data-cy="todo-form"]', 123);
  });
});
