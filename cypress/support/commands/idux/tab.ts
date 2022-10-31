
export default {
  /** 断言当前显示的tab */
  iTab_activeLabel(selector: string, title: string) {
    return cy.get(selector)
      .find('.ix-tabs-nav-tab-selected .ix-tabs-nav-tab-label')
      .should('contain.text', title);
  },
  /** 获取tab */
  iTab_getItem(selector: string, index: number) {
    return cy.get(selector).find('.ix-tabs-nav-tab').eq(index);
  },
  /** 断言tab个数 */
  iTab_haveLength(selector: string, length: number) {
    return cy.get(selector).find('.ix-tabs-nav-tab')
      .should('have.length', length);
  },
  /** 通过索引点击tab */
  iTab_clickItem(selector: string, index: number) {
    return cy.iTab_getItem(selector, index)
      .click();
  },
  /** 通过label点击tab */
  iTab_clickLabel(selector: string, label: string) {
    return cy.get(selector).find('.ix-tabs-nav-tab')
      .contains('.ix-tabs-nav-tab-label', label)
      .click();
  },
  /** 断言是否禁用 */
  iTab_itemDiabled(selector: string, index: number, disabled = true) {
    const item = cy.iTab_getItem(selector, index);
    return disabled ?
      item.should('have.class', 'ix-tabs-nav-tab-disabled') :
      item.should('not.have.class', 'ix-tabs-nav-tab-disabled');
  },
  /** 点击左移icon */
  iTab_clickPrevIcon(selector: string) {
    return cy.get(selector)
      .find('.ix-tabs-nav-pre')
      .click();
  },
  /** 点击右移icon */
  iTab_clickNextIcon(selector: string) {
    return cy.get(selector)
      .find('.ix-tabs-nav-next')
      .click();
  },
};
