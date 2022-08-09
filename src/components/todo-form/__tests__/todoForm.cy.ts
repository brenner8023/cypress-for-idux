import { TodoForm } from '..';

describe('component TodoForm', () => {
  it('aa', () => {
    cy.mount(TodoForm)
      .iInput_setValue('todo-form', 123);
  });
});
