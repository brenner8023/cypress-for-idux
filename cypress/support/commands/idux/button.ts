
import common from './private';

export default {
  /** 按钮点击 */
  iButton_click(selector: string) {
    return cy.getBy(selector).click();
  },
  /** 断言按钮文字 */
  iButton_haveText(selector: string, text: string) {
    return cy.getBy(selector).should('contain.text', text);
  },
  /** 断言超链接 */
  iButton_haveHref(selector: string, href: string) {
    return cy.getBy(selector)
      .should('have.prop', 'nodeName', 'A')
      .and('have.attr', 'href', href);
  },
  /** 断言按钮是否禁用 */
  iButton_disabled(selector: string, disabled = true) {
    return common.itemDisabled(selector, disabled);
  },
  /** 断言按钮是否加载中 */
  iButton_isLoading(selector: string, isLoading = true) {
    if (isLoading) {
      return cy.getBy(selector)
        .should('have.class', 'ix-button-loading')
        .iButton_disabled(selector);
    }
    return cy.getBy(selector)
      .should('not.have.class', 'ix-button-loading')
      .iButton_disabled(selector, false);
  },
};
