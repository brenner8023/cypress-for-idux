
export default {
  /** 断言内容 */
  iTag_haveText(selector: string, text: string) {
    return cy.getBy(selector)
      .should('contain.text', text);
  },
  /** 断言数字 */
  iTag_haveNumber(selector: string, text: number | string) {
    return cy.getBy(selector)
      .find('.ix-tag-numeric-prefix')
      .should('contain.text', String(text));
  },
  /** 通过标签文本来点击标签 */
  iTagGroup_clickItem(selector: string, label: string) {
    return cy.getBy(selector)
      .contains('span', label)
      .click();
  },
  /** 关闭标签 */
  iTagGroup_closeItem(selector: string, label: string) {
    return cy.getBy(selector)
      .contains('span', label)
      .next()
      .click();
  },
  /** 断言某个标签是否可关闭 */
  iTagGroup_closeable(selector: string, label: string, closable = true) {
    if (closable) {
      return cy.getBy(selector)
        .contains('span', label)
        .next()
        .should('have.class', 'ix-tag-group-close-icon');
    }
    return cy.getBy(selector)
      .contains('span', label)
      .next()
      .should('have.class', 'ix-tag-group-close-icon');
  },
  /** 断言标签是否存在 */
  iTagGroup_itemExist(selector: string, label: string, exist = true) {
    if (exist) {
      return cy.getBy(selector)
        .contains('span', label)
        .should('exist');
    }
    return cy.getBy(selector)
      .contains('span', label)
      .should('not.exist');
  },
};
