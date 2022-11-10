
export default {
  /** 断言徽标内容 */
  iBadge_haveText(selector: string, text: number | string) {
    return cy.get(selector).find('.ix-badge-count').should('contain.text', String(text));
  },
};
