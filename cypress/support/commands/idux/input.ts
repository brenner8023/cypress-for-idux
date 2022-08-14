
export default {
  iInput_setValue(selector: string, value: number | string) {
    return cy.getBy(selector).type(String(value));
  },
};
