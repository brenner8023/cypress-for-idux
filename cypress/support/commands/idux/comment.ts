export default {
  /** 断言author */
  iComment_haveAuthor(selector: string, author: string) {
    return cy.get(selector)
      .find('.ix-comment-content-author')
      .should('contain.text', author);
  },
  /** 断言内容 */
  iComment_haveContent(selector: string, content: string) {
    return cy.get(selector)
      .find('.ix-comment-content-detail')
      .should('contain.text', content);
  },
};
