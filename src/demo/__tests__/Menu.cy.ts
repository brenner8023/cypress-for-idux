import Demo from '../Menu.vue';

describe('component Menu', () => {

  const menu = '[data-cy="demo-menu"]';

  it('期望可以通过点击进行选中', () => {
    cy.mount(Demo)
      .iMenu_haveLabel(menu, ['Sub Menu 1', 'Menu Sub 2', 'Item 6'])
      .iMenu_clickItem(menu, ['Sub Menu 1', 'Menu Sub 2', 'Item 7'])
      .iMenu_haveSelectedLabel(menu, ['Sub Menu 1', 'Menu Sub 2', 'Item 7']);
  });

  it('期望可以禁用选项', () => {
    cy.mount(Demo)
      .iMenu_haveDisabledLabel(menu, ['Sub Menu 1', 'Menu Sub 2', 'Item 6'])
      .iMenu_haveDisabledLabel(menu, ['Item 3'])
      .iMenu_haveDisabledLabel(menu, ['Sub Menu 4'])
  });
});
