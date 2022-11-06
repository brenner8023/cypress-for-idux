export default {
  /** 断言title */
  iStatistic_haveTitle(selector: string, title: string) {
    return cy.get(selector)
      .find('.ix-statistic-title')
      .should('contain.text', title);
  },
  /** 断言value */
  iStatistic_haveValue(selector: string, value: number | string) {
    return cy.get(selector)
      .find('.ix-statistic-content-value')
      .should('contain.text', String(value));
  },
  /** 断言小数部分 */
  iStatistic_haveDecimal(selector: string, decimal: string) {
    return cy.get(selector)
      .find('.ix-statistic-content-value-decimal')
      .should('contain.text', decimal);
  },
};
