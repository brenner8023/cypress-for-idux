
export default {
  iInput_setValue(selector: string, value: number | string) {
    return cy.get(selector).find('.ix-input').type(String(value));
  },
};
