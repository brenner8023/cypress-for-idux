
export default {
  /** 断言content内容 */
  iPopover_haveContent(selector: string, text: string) {
    return cy.get(selector)
      .find('.ix-popover-content')
      .should('contain.text', text);
  },
  /** 断言header内容 */
  iPopover_haveHeader(selector: string, text: string) {
    return cy.get(selector)
      .find('.ix-header')
      .should('contain.text', text);
  },
  /** 点击上方关闭按钮 */
  iPopover_close(selector: string) {
    return cy.get(selector)
      .find('.ix-header .ix-header-suffix')
      .then($el => {
        $el.trigger('click')
      })
  },
  /** 断言是否存在 */
  iPopover_exist(selector: string, exist = true) {
    const container = cy.get(selector);
    return exist
      ? container.should('exist')
      : container.should('not.exist');
  },
  /** 断言是否显示 */
  iPopover_visible(selector: string, visible = true) {
    const container = cy.get(selector);
    return visible
      ? container.should('be.visible')
      : container.should('not.be.visible');
  },
};
