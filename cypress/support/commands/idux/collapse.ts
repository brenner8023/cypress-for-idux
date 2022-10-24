
export default {
  /** 断言header内容 */
  iCollapse_haveHeader(selector: string, index: number, text: string) {
    return cy.get(selector)
      .find('.ix-collapse-panel .ix-header-title')
      .eq(index)
      .should('contain.text', text);
  },
  /** 断言content内容 */
  iCollapse_haveContent(selector: string, index: number, text: string) {
    return cy.get(selector)
      .find('.ix-collapse-panel .ix-collapse-panel-content')
      .eq(index)
      .should('contain.text', text);
  },
  /** 断言指定面板打开 */
  iCollapse_active(selector: string, index: number) {

    return cy.get(selector)
      .find('.ix-collapse-panel')
      .eq(index)
      .should('have.class', 'ix-collapse-panel-expanded');
  },
  /** 断言指定面板未打开 */
  iCollapse_closed(selector: string, index: number) {

    return cy.get(selector)
      .find('.ix-collapse-panel')
      .eq(index)
      .should('not.have.class', 'ix-collapse-panel-expanded');
  },
  /** 断言当前禁用的面板 */
  iCollapse_disabled(selector: string, index: number, disabled = true) {
    if (disabled) {
      return cy.get(selector)
        .find('.ix-collapse-panel')
        .eq(index)
        .should('have.class', 'ix-collapse-panel-disabled');
    }
    return cy.get(selector)
      .find('.ix-collapse-panel')
      .eq(index)
      .should('not.have.class', 'ix-collapse-panel-disabled');
  },
  /** 点击 */
  iCollapse_click(selector: string, index: number) {
    return cy.get(selector)
      .find('.ix-collapse-panel')
      .eq(index)
      .click();
  },
};
