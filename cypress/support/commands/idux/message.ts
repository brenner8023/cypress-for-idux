
const selector = '.ix-message-container .ix-message:visible';

export default {
  /** 断言message是否显示 */
  iMessage_visible(visible = true) {
    const message = cy.get(selector);
    return visible ?
      message.should('exist') :
      message.should('not.exist');
  },
  /** 断言文本内容 */
  iMessage_haveText(text: string) {
    return cy.get(selector)
      .find('.ix-message-content-text')
      .should('contain.text', text);
  },
  /** 断言提示的类型 */
  iMessage_haveType(type: 'info' | 'success' | 'warning' | 'error' | 'loading') {
    return cy.get(selector)
      .should('have.class', `ix-message-${type}`);
  },
};
