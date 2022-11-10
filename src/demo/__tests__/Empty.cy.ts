
import { defineComponent, ref } from 'vue';

describe('component Empty', () => {

  const Demo = defineComponent({
    template: `
      <IxEmpty v-bind="$attrs" data-cy="demo-empty" />
    `,
    setup () {
      return { visible: ref(false) };
    },
  });
  const selector = '[data-cy="demo-empty"]';

  it('期望文本显示正确', () => {
    cy.mount(Demo, { props: { description: '123' } })
      .iEmpty_haveText(selector, '123')
      .get('@vue')
      .invoke('setProps', { description: '456' })
      .iEmpty_haveText(selector, '456');
  });
});
