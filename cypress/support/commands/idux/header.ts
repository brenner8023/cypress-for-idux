
export default {
  /** 断言标题 */
  iHeader_haveTitle(selector: string, title: string) {
    return cy.get(selector)
      .find('.ix-header-title')
      .should('contain.text', title);
  },
  /** 断言副标题 */
  iHeader_haveSubtitle(selector: string, subtitle: string) {
    return cy.get(selector)
      .find('.ix-header-sub-title')
      .should('contain.text', subtitle);
  },
  /** 断言描述 */
  iHeader_haveDescription(selector: string, description: string) {
    return cy.get(selector)
      .find('.ix-header-description')
      .should('contain.text', description);
  },
  /** 断言禁用 */
  iHeader_disabled(selector: string, disabled = true) {
    if (disabled) {
      return cy.get(selector)
        .should('have.class', 'ix-header-disabled');
    }
    return cy.get(selector)
      .should('not.have.class', 'ix-header-disabled');
  },
};
