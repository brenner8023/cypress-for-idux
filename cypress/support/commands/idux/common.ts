
export default {
  // 断言表单项禁用
  itemDisabled(selector: string, disabled = true) {
    if (disabled) {
      return cy.getBy(selector)
        .should('have.attr', 'disabled', 'disabled');
    }
    return cy.getBy(selector)
      .should('not.have.attr', 'disabled');
  },
};
