
export default {
  /** 断言文本内容 */
  iAlert_haveText(selector: string, text: string) {
    return cy.get(selector)
      .find('.ix-alert-content')
      .should('contain.text', text);
  },
  /** 断言description */
  iAlert_haveDescription(selector: string, desc: string) {
    return cy.get(selector)
      .find('.ix-alert-description')
      .should('contain.text', desc);
  },
  /** 断言是否可关闭 */
  iAlert_closable(selector: string, closable = true) {
    const closeIcon = cy.get(selector).find('.ix-alert-close-icon');
    return closable ?
      closeIcon.should('exist') :
      closeIcon.should('not.exist');
  },
  /** 点击关闭 */
  iAlert_close(selector: string) {
    return cy.get(selector).find('.ix-alert-close-icon').click();
  },
  /** 获取分页器 */
  iAlert_getPagination(selector: string) {
    return cy.get(selector).find('.ix-alert-pagination');
  },
};
