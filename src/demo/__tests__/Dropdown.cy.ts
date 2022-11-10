import Dropdown from '../Dropdown.vue';

describe('component Dropdown', () => {

  const triggerSelector = '[data-cy="demo-dropdown-trigger"]';
  const selector = '[data-cy="demo-dropdown"]';

  it('期望展示trigger内容，悬浮后展示overlay内容', () => {
    cy.mount(Dropdown)
      .iDropdown_haveTriggerText(triggerSelector, 'Trigger me')
      .iDropdown_exist(selector, false)
      .iDropdown_hover(triggerSelector)
      .iDropdown_visible(selector)
      .iDropdown_haveOverlayText(selector, '123');
  });

  it('期望通过点击展示内容', () => {
    cy.mount(Dropdown, { props: { trigger: 'click' } })
      .iDropdown_exist(selector, false)
      .iDropdown_click(triggerSelector)
      .iDropdown_visible(selector);
  });

  it('期望通过右键点击展示内容', () => {
    cy.mount(Dropdown, { props: { trigger: 'contextmenu' } })
      .iDropdown_exist(selector, false)
      .iDropdown_rightClick(triggerSelector)
      .iDropdown_visible(selector);
  });

  it('期望通过destroyOnHide判断隐藏时是否销毁浮层', () => {
    cy.mount(Dropdown)
      .iDropdown_hover(triggerSelector)
      .iDropdown_mouseleave(triggerSelector)
      .iDropdown_exist(selector)
      .get('@vue')
      .invoke('setProps', { destroyOnHide: true })
      .iDropdown_hover(triggerSelector)
      .iDropdown_mouseleave(triggerSelector)
      .iDropdown_exist(selector, false);
  });
});
