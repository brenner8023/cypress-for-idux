
type Selector = string | JQuery<HTMLElement>;

export default {
  /** 断言分页器是否禁用 */
  iPagination_disabled(selector: Selector, disabled = true) {
    const parent = getParent(selector);

    return disabled ?
      parent.should('have.class', 'ix-pagination-disabled') :
      parent.should('not.have.class', 'ix-pagination-disabled');
  },
  /** 断言总页数 */
  iPagination_haveTotal(selector: Selector, total: number) {
    return getParent(selector).find('.ix-pagination-total').should('contain.text', String(total));
  },
  /** 断言当前激活的页码 */
  iPagination_activePage(selector: Selector, page: number) {
    return getParent(selector).find('.ix-pagination-item-active').should('contain.text', String(page));
  },
  /** 断言上一页按钮是否禁用 */
  iPagination_prevDisabled(selector: Selector, disabled = true) {
    return isPageBtnDisabled(true, selector, disabled);
  },
  /** 断言下一页按钮是否禁用 */
  iPagination_nextDisabled(selector: Selector, disabled = true) {
    return isPageBtnDisabled(false, selector, disabled);
  },
  /** 上一页按钮点击 */
  iPagination_prevClick(selector: Selector) {
    return pageBtnClick(true, selector);
  },
  /** 下一页按钮点击 */
  iPagination_nextClick(selector: Selector) {
    return pageBtnClick(false, selector);
  },
  /** 缩略号点击 */
  iPagination_ellipsisClick(selector: Selector, index: 1 | 2) {
    getParent(selector).find('.ix-button.ix-pagination-item-ellipsis');
    const btn = index === 1 ? cy.first() : cy.last();
    return btn.click();
  },
  /** 某一项页码点击 */
  iPagination_itemClick(selector: Selector, text: number | string) {
    return getParent(selector).find('.ix-pagination-item').contains(String(text)).click();
  },
  /** 输入数字跳转到某一页 */
  iPagination_inputPage(selector: Selector, page: number) {
    const parent = getParent(selector);
    return parent.then($el => {
      const isSimple = $el.hasClass('ix-pagination-simple');
      const val = `${page}{enter}`;

      return isSimple ?
        parent.find('.ix-pagination-item input').type(val) :
        parent.find('.ix-pagination-jumper input').type(val);
    });
  },
  /** 改变每一页的最大数 */
  iPagination_changeSize(selector: Selector, size: number) {
    return getParent(selector)
      .find('.ix-pagination-sizes')
      .find('.ix-select')
      .click()
      .get('.ix-select-overlay:visible')
      .find('.ix-select-option')
      .contains(String(size))
      .click();
  },
  /** 断言当前每一页的最大数 */
  iPagination_activeSize(selector: Selector, size: number) {
    return getParent(selector)
      .find('.ix-pagination-sizes')
      .should('contain.text', String(size));
  },
};

const isPageBtnDisabled = (isPrevPageBtn: boolean, selector: Selector, disabled: boolean) => {
  let tmp = getParent(selector).find('.ix-pagination-item.ix-pagination-item-button');

  tmp = isPrevPageBtn ? tmp.first() : tmp.last();

  tmp.find('.ix-button');

  return disabled ?
    tmp.should('have.attr', 'disabled') :
    tmp.should('not.have.attr', 'disabled');
};

const pageBtnClick = (isPrevPageBtn: boolean, selector: Selector) => {
  let tmp = getParent(selector).find('.ix-pagination-item.ix-pagination-item-button');

  tmp = isPrevPageBtn ? tmp.first() : tmp.last();

  return tmp.find('.ix-button').click();
};

const getParent = (selector: Selector) => {
  return typeof selector === 'string' ? cy.get(selector) : cy.wrap(selector);
};
