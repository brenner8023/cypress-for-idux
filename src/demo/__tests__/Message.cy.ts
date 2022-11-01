
import Demo from '../Message.vue';

describe('component Message', () => {

  const btn = '[data-cy="trigger-btn"]';

  it('期望message组件显示正常', () => {
    cy.mount(Demo)
      .iMessage_visible(false)
      .get(btn)
      .eq(0)
      .click()
      .iMessage_visible()
      .iMessage_haveType('info')
      .iMessage_haveText('Info message')
      .get(btn)
      .eq(1)
      .click()
      .iMessage_haveType('success')
      .iMessage_haveText('Success message');
  });
});
