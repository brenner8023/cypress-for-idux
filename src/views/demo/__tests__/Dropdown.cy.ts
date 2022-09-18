import Dropdown from '../Dropdown.vue';

describe('component Dropdown', () => {
  it('期望展示trigger内容，悬浮后展示overlay内容', () => {
    cy.mount(Dropdown)
      .iDropdown_haveTriggerText('demo-dropdown-trigger', 'Trigger me')
      .iDropdown_exist('demo-dropdown', false)
      .iDropdown_hover('demo-dropdown-trigger')
      .iDropdown_visible('demo-dropdown')
      .iDropdown_haveOverlayText('demo-dropdown', '123');
  });

  it('期望通过点击展示内容', () => {
    cy.mount(Dropdown, { props: { trigger: 'click' } })
      .iDropdown_exist('demo-dropdown', false)
      .iDropdown_click('demo-dropdown-trigger')
      .iDropdown_visible('demo-dropdown');
  });

  it('期望通过右键点击展示内容', () => {
    cy.mount(Dropdown, { props: { trigger: 'contextmenu' } })
      .iDropdown_exist('demo-dropdown', false)
      .iDropdown_rightClick('demo-dropdown-trigger')
      .iDropdown_visible('demo-dropdown');
  });

  it('期望通过destroyOnHide判断隐藏时是否销毁浮层', () => {
    cy.mount(Dropdown)
      .iDropdown_hover('demo-dropdown-trigger')
      .iDropdown_mouseleave('demo-dropdown-trigger')
      .iDropdown_exist('demo-dropdown')
      .get('@vue')
      .invoke('setProps', { destroyOnHide: true })
      .iDropdown_hover('demo-dropdown-trigger')
      .iDropdown_mouseleave('demo-dropdown-trigger')
      .iDropdown_exist('demo-dropdown', false);
  });
});
