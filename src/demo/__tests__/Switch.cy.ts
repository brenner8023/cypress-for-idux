import Demo from '../Switch.vue';

describe('component Switch', () => {

  const selector = '[data-cy="demo-switch"]';

  it('期望开关可以启用和关闭', () => {
    cy.mount(Demo)
      .iSwitch_checked(selector, false)
      .iSwitch_click(selector)
      .iSwitch_checked(selector);
  });

  it('期望开关可以禁用', () => {
    cy.mount(Demo, { props: {
      disabled: false,
    } })
    .iSwitch_disabled(selector, false)
    .get('@vue')
    .invoke('setProps', {
      disabled: true,
    })
    .iSwitch_disabled(selector);
  });

  it('期望开关可以设置加载状态', () => {
    cy.mount(Demo, { props: {
      loading: false,
    } })
    .iSwitch_isLoading(selector, false)
    .get('@vue')
    .invoke('setProps', {
      loading: true,
    })
    .iSwitch_isLoading(selector);
  });

  it('期望文本内容显示开关', () => {
    cy.mount(Demo, { props: {
      labels: ['开', '关'],
    } })
    .iSwitch_haveLabel(selector, '关')
    .iSwitch_click(selector)
    .iSwitch_haveLabel(selector, '开');
  });
});
