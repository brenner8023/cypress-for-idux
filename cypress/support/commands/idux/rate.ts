
export default {
  /** 断言当前高亮的数目 */
  iRate_haveValue(selector: string,  value: number) {

    const floorVal = Math.floor(value);

    // 是否含有半选，比如3.5
    const isHalf = value !== floorVal;

    return cy.get(selector)
      .find('.ix-rate-item-full')
      .should('have.length', floorVal)
      .then(() => {
        if (isHalf) {
          cy.get(selector)
            .find('.ix-rate-item-half')
            .should('have.length', 1);
        }
      });
  },
  /** 获取某一项 */
  iRate_getItem(selector: string, index: number) {
    return cy.get(selector)
      .find('.ix-rate-item')
      .eq(index);
  },
  /** 断言全部的数目 */
  iRate_haveItems(selector: string, count: number) {
    return cy.get(selector)
      .find('.ix-rate-item')
      .should('have.length', count);
  },
  /** 点击某一项 */
  iRate_clickItem(selector: string, index: number) {
    return cy.iRate_getItem(selector, index)
      .click();
  },
  /** 断言是否禁用 */
  iRate_disabled(selector: string, disabled = true) {
    if (disabled) {
      return cy.get(selector)
        .should('have.class', 'ix-rate-disabled');
    }
    return cy.get(selector)
      .should('not.have.class', 'ix-rate-disabled');
  },
  /** hover某一项 */
  iRate_hoverItem(selector: string, index: number) {
    return cy.iRate_getItem(selector, index).trigger('mouseenter');
  },
  /** 断言tooltip */
  iRate_haveItemTip(selector: string, index: number, tooltip: string) {
    return cy.iRate_hoverItem(selector, index)
      .get('.ix-tooltip-overlay-container')
      .find('.ix-overlay.ix-tooltip:visible')
      .contains('.ix-tooltip-wrapper', tooltip);
  },
};
