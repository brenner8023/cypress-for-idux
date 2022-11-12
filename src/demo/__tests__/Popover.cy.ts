
import { defineComponent, ref } from 'vue';

describe('component Popover', () => {

  const Demo = defineComponent({
    template: `
      <IxPopover v-model:visible="visible" v-bind="$attrs" data-cy="demo-popover">
        <IxButton data-cy="demo-trigger">Demo</IxButton>
      </IxPopover>
    `,
    setup () {
      return { visible: ref(false) };
    },
  });
  const selector = '[data-cy="demo-popover"]';
  const trigger = '[data-cy="demo-trigger"]';

  beforeEach(() => {
    cy.mount(Demo, {
      props: { header: 'qwert', content: '123', placement: 'bottomEnd' },
    });
  });
  
  it('期望可以显示气泡卡片', () => {
    cy.iPopover_exist(selector, false)
      .get(trigger)
      .trigger('mouseenter')
      .iPopover_visible(selector)
      .get(trigger)
      .trigger('mouseleave')
      .iPopover_visible(selector, false);
  });

  it('期望内容显示正确', () => {
    cy.get(trigger)
      .trigger('mouseenter')
      .iPopover_haveHeader(selector, 'qwert')
      .iPopover_haveContent(selector, '123');
  });

  it('期望可以点击关闭', () => {
    cy.get('@vue')
      .invoke('setProps', { closable: true, trigger: 'click' })
      .get(trigger)
      .click()
      .iPopover_visible(selector)
      .iPopover_close(selector)
      .iPopover_visible(selector, false);
  });
});
