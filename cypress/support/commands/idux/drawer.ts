
const selector = '.ix-drawer-wrapper:visible';

export default {
  /** 断言header文本 */
  iDrawer_haveHeader(text: string) {
    return cy.get(selector)
      .find('.ix-header-content .ix-header-title')
      .should('contain.text', text);
  },
  /** 点击关闭图标 */
  iDrawer_clickCloseIcon() {
    return cy.get(selector)
      .find('.ix-header-content .ix-header-suffix')
      .click();
  },
  /** 断言抽屉是否展示 */
  iDrawer_visible(visible = true) {
    const drawer = cy.get(selector);
    return visible ?
      drawer.should('exist') :
      drawer.should('not.exist');
  },
};
