
import { defineComponent, ref } from 'vue';

describe('component Card', () => {

  const Demo = defineComponent({
    template: `
      <IxCard v-model:selected="selected" v-bind="$attrs" data-cy="demo-card">
        <div>Demo</div>
      </IxCard>
    `,
    setup() {
      return { selected: ref(false) };
    },
  });
  const selector = '[data-cy="demo-card"]';

  it('期望可以显示标题', () => {
    cy.mount(Demo, { props: { header: { title: 'Qwik' } } })
      .iCard_haveTitle(selector, 'Qwik')
      .get('@vue')
      .invoke('setProps', { header: { title: 'Astro' } })
      .iCard_haveTitle(selector, 'Astro');
  });

  it('期望可以设置加载状态', () => {
    cy.mount(Demo, { props: { loading: false } })
      .iCard_isLoading(selector, false)
      .get('@vue')
      .invoke('setProps', { loading: true })
      .iCard_isLoading(selector);
  });

  it('期望可以设置禁用', () => {
    cy.mount(Demo, { props: { disabled: false } })
      .iCard_disabled(selector, false)
      .get('@vue')
      .invoke('setProps', { disabled: true })
      .iCard_disabled(selector);
  });

  it('期望可以选中卡片', () => {
    cy.mount(Demo, { props: { selectable: false } })
      .iCard_selectable(selector, false)
      .get('@vue')
      .invoke('setProps', { selectable: true })
      .iCard_selectable(selector)
      .iCard_isSelected(selector, false)
      .get(selector)
      .click()
      .iCard_isSelected(selector);
  });
});
