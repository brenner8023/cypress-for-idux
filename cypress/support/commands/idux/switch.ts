
export default {
  /** 断言开关是否启用 */
  iSwitch_checked(selector: string, checked = true) {
    if (checked) {
      return cy.get(selector)
        .should('have.class', 'ix-switch-checked');
    }
    return cy.get(selector)
      .should('not.have.class', 'ix-switch-checked');
  },
  /** 点击开关 */
  iSwitch_click(selector: string) {
    return cy.get(selector).click();
  },
  /** 断言是否禁用 */
  iSwitch_disabled(selector: string, disabled = true) {
    if (disabled) {
      return cy.get(selector)
        .should('have.class', 'ix-switch-disabled');
    }
    return cy.get(selector)
      .should('not.have.class', 'ix-switch-disabled');
  },
  /** 断言是否处于加载状态 */
  iSwitch_isLoading(selector: string, loading = true) {
    if (loading) {
      return cy.get(selector)
        .should('have.class', 'ix-switch-loading');
    }
    return cy.get(selector)
      .should('not.have.class', 'ix-switch-loading');
  },
  /** 断言文本内容 */
  iSwitch_haveLabel(selector: string, label: string) {
    return cy.get(selector)
      .find('.ix-switch-label')
      .should('contain.text', label);
  },
};
