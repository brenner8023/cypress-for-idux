
export default {
  // 断言分页器是否禁用
  iPagination_disabled(selector: string, disabled = true) {
    cy.getBy(selector);

    return disabled ? cy.should('have.class', 'ix-pagination-disabled') :
      cy.should('not.have.class', 'ix-pagination-disabled');
  },
  // 断言总页数
  iPagination_haveTotal(selector: string, total: number) {
    return cy.getBy(selector).find('.ix-pagination-total').should('contain.text', String(total));
  },
  // 断言当前激活的页码
  iPagination_activePage(selector: string, page: number) {
    return cy.getBy(selector).find('.ix-pagination-item-active').should('contain.text', String(page));
  },
  // 断言上一页按钮是否禁用
  iPagination_prevDisabled(selector: string, disabled = true) {
    return isPageBtnDisabled(true, selector, disabled);
  },
  // 断言下一页按钮是否禁用
  iPagination_nextDisabled(selector: string, disabled = true) {
    return isPageBtnDisabled(false, selector, disabled);
  },
  // 上一页按钮点击
  iPagination_prevClick(selector: string) {
    return pageBtnClick(true, selector);
  },
  // 下一页按钮点击
  iPagination_nextClick(selector: string) {
    return pageBtnClick(false, selector);
  },
  // 缩略号点击
  iPagination_ellipsisClick(selector: string, index: 1 | 2) {
    cy.getBy(selector).find('.ix-button.ix-pagination-item-ellipsis');
    index === 1 ? cy.first() : cy.last();
    return cy.click();
  },
  // 某一项页码点击
  iPagination_itemClick(selector: string, text: number | string) {
    return cy.getBy(selector).find('.ix-pagination-item').contains(String(text)).click();
  },
  // 跳转到某一页
  iPagination_jumpTo(selector: string, page: number) {
    return cy.getBy(selector).then($el => {
      const isSimple = $el.hasClass('ix-pagination-simple');
      const tmp = cy.getBy(selector);

      return isSimple ? tmp.find('.ix-pagination-item input').type(`${page}{enter}`) :
        tmp.find('.ix-pagination-jumper input').type(`${page}{enter}`);
    });
  },
  // 改变每一页的最大数
  iPagination_changeSize(selector: string, size: number) {
    return cy.getBy(selector)
      .find('.ix-pagination-sizes')
      .find('.ix-select')
      .click()
      .get('.ix-select-overlay:visible')
      .find('.ix-select-option')
      .contains(String(size))
      .click();
  },
  // 断言当前每一页的最大数
  iPagination_activeSize(selector: string, size: number) {
    return cy.getBy(selector)
      .find('.ix-pagination-sizes')
      .should('contain.text', String(size));
  },
};

const isPageBtnDisabled = (isPrevPageBtn: boolean, selector: string, disabled: boolean) => {
  let tmp = cy.getBy(selector).find('.ix-pagination-item.ix-pagination-item-button');

  tmp = isPrevPageBtn ? tmp.first() : tmp.last();

  tmp.find('.ix-button');

  return disabled ? cy.should('have.attr', 'disabled') : cy.should('not.have.attr', 'disabled');
};

const pageBtnClick = (isPrevPageBtn: boolean, selector: string) => {
  let tmp = cy.getBy(selector).find('.ix-pagination-item.ix-pagination-item-button');

  tmp = isPrevPageBtn ? tmp.first() : tmp.last();

  return tmp.find('.ix-button').click();
};
