
export default {
  /** 断言面包屑内容 */
  iBreadcrumb_haveText(selector: string, textList: string[]) {
    return cy.get(selector).find('.ix-breadcrumb-item').each(($el, index) => {
      cy.wrap($el).should('contain.text', textList[index]);
    });
  },
  /** 断言面包屑的分隔符 */
  iBreadcrumb_haveSeparator(selector: string, separator: string) {
    return cy.get(selector).find('.ix-breadcrumb-item-separator').each(($el) => {
      cy.wrap($el).should('contain.text', separator);
    });
  },
  /** 断言面包屑内容 */
  iBreadcrumbItem_haveText(selector: string, text: string) {
    return cy.get(selector).should('contain.text', text);
  },
  /** 断言面包屑的分隔符 */
  iBreadcrumbItem_haveSeparator(selector: string, separator: string) {
    return cy.get(selector).find('.ix-breadcrumb-item-separator').should('contain.text', separator);
  },
};
