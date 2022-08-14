
export default {
  iButton_click(selector: string) {
    return cy.getBy(selector).click();
  },
};
