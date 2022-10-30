
import { getContainer, type ContainerSelector } from './private';

export default {
  /** 断言分页器是否禁用 */
  iPagination_disabled(selector: ContainerSelector, disabled = true) {
    const parent = getContainer(selector);

    return disabled ?
      parent.should('have.class', 'ix-pagination-disabled') :
      parent.should('not.have.class', 'ix-pagination-disabled');
  },
  /** 断言总页数 */
  iPagination_haveTotal(selector: ContainerSelector, total: number) {
    return getContainer(selector).find('.ix-pagination-total').should('contain.text', String(total));
  },
  /** 断言当前激活的页码 */
  iPagination_activePage(selector: ContainerSelector, page: number) {
    return getContainer(selector).find('.ix-pagination-item-active').should('contain.text', String(page));
  },
  /** 断言上一页按钮是否禁用 */
  iPagination_prevDisabled(selector: ContainerSelector, disabled = true) {
    return isPageBtnDisabled(true, selector, disabled);
  },
  /** 断言下一页按钮是否禁用 */
  iPagination_nextDisabled(selector: ContainerSelector, disabled = true) {
    return isPageBtnDisabled(false, selector, disabled);
  },
  /** 上一页按钮点击 */
  iPagination_prevClick(selector: ContainerSelector) {
    return pageBtnClick(true, selector);
  },
  /** 下一页按钮点击 */
  iPagination_nextClick(selector: ContainerSelector) {
    return pageBtnClick(false, selector);
  },
  /** 缩略号点击 */
  iPagination_ellipsisClick(selector: ContainerSelector, index: 1 | 2) {
    getContainer(selector).find('.ix-button.ix-pagination-item-ellipsis');
    const btn = index === 1 ? cy.first() : cy.last();
    return btn.click();
  },
  /** 某一项页码点击 */
  iPagination_itemClick(selector: ContainerSelector, text: number | string) {
    return getContainer(selector).find('.ix-pagination-item').contains(String(text)).click();
  },
  /** 输入数字跳转到某一页 */
  iPagination_inputPage(selector: ContainerSelector, page: number) {
    const parent = getContainer(selector);
    return parent.then($el => {
      const isSimple = $el.hasClass('ix-pagination-simple');
      const val = `${page}{enter}`;

      return isSimple ?
        parent.find('.ix-pagination-item input').type(val) :
        parent.find('.ix-pagination-jumper input').type(val);
    });
  },
  /** 改变每一页的最大数 */
  iPagination_changeSize(selector: ContainerSelector, size: number) {
    return getContainer(selector)
      .find('.ix-pagination-sizes')
      .find('.ix-select')
      .click()
      .get('.ix-select-overlay:visible')
      .find('.ix-select-option')
      .contains(String(size))
      .click();
  },
  /** 断言当前每一页的最大数 */
  iPagination_activeSize(selector: ContainerSelector, size: number) {
    return getContainer(selector)
      .find('.ix-pagination-sizes')
      .should('contain.text', String(size));
  },
};

const isPageBtnDisabled = (isPrevPageBtn: boolean, selector: ContainerSelector, disabled: boolean) => {
  let tmp = getContainer(selector).find('.ix-pagination-item.ix-pagination-item-button');

  tmp = isPrevPageBtn ? tmp.first() : tmp.last();

  tmp.find('.ix-button');

  return disabled ?
    tmp.should('have.attr', 'disabled') :
    tmp.should('not.have.attr', 'disabled');
};

const pageBtnClick = (isPrevPageBtn: boolean, selector: ContainerSelector) => {
  let tmp = getContainer(selector).find('.ix-pagination-item.ix-pagination-item-button');

  tmp = isPrevPageBtn ? tmp.first() : tmp.last();

  return tmp.find('.ix-button').click();
};
