
export default {
  /** 断言title */
  iCard_haveTitle(selector: string, title: string) {
    return cy.get(selector)
      .find('.ix-header-content .ix-header-title')
      .should('contain.text', title);
  },
  /** 断言是否处于加载状态 */
  iCard_isLoading(selector: string, loading = true) {
    if (loading) {
      return cy.get(selector)
        .find('.ix-card-body .ix-card-loading')
        .should('exist');
    }
    return cy.get(selector)
      .find('.ix-card-body .ix-card-loading')
      .should('not.exist');
  },
  /** 断言是否禁用 */
  iCard_disabled(selector: string, disabled = true) {
    if (disabled) {
      return cy.get(selector)
        .should('have.class', 'ix-card-disabled');
    }
    return cy.get(selector)
      .should('not.have.class', 'ix-card-disabled');
  },
  /** 断言当前卡片是否可选 */
  iCard_selectable(selector: string, selectable = true) {
    if (selectable) {
      return cy.get(selector)
        .should('have.class', 'ix-card-selectable');
    }
    return cy.get(selector)
      .should('not.have.class', 'ix-card-selectable');
  },
  /** 断言当前卡片是否选中 */
  iCard_isSelected(selector: string, isSelected = true) {
    if (isSelected) {
      return cy.get(selector)
        .should('have.class', 'ix-card-selected');
    }
    return cy.get(selector)
      .should('not.have.class', 'ix-card-selected');
  },
};
