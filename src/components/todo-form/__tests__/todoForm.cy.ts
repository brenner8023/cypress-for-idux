import { TodoForm } from '..';

describe('component TodoForm', () => {
  it('aa', () => {
    cy.mount(TodoForm, {
      props: {
        'onUpdate:todo': cy.spy().as('updateTodo')
      },
    })
      .iInput_setValue('todo-form-input', '陪女朋友逛街')
      .iButton_click('todo-form-btn')
      .get('@updateTodo')
      .should('be.calledOnceWith', '陪女朋友逛街');
  });
});
