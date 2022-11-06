
import { defineComponent } from 'vue';

describe('component Spin', () => {

  const Demo = defineComponent({
    template: `
      <IxSpin v-bind="$attrs" data-cy="demo-spin">
        content-xxx-xxx-xxx
      </IxSpin>
    `,
  });
  const selector = '[data-cy="demo-spin"]';

  it('期望内容显示正常', () => {
    cy.mount(Demo, { props: { spinning: false, tip: '数据加载中...' } })
      .iSpin_spinning(selector, false)
      .get('@vue')
      .invoke('setProps', { spinning: true })
      .iSpin_haveTip(selector, '数据加载中...')
      .iSpin_spinning(selector);
  });
});
