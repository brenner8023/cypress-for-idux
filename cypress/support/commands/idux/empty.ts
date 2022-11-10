export default {
  /** 断言description */
  iEmpty_haveText(selector: string, description: string) {
    return cy.get(selector)
      .find('.ix-empty-description')
      .should('contain.text', description);
  },
};
