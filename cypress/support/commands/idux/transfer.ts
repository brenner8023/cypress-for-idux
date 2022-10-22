
type Direction = 'source' | 'target';

const btnSelector = '.ix-transfer-operations-btn';

export default {
  /** 获取指定项 */
  iTransfer_getItem(selector: string, index: number, type: Direction) {
    return cy.get(selector)
      .find(`.ix-transfer-content-${type} .ix-transfer-body`)
      .find('.ix-transfer-list-item')
      .eq(index);
  },
  /** 断言指定项文本 */
  iTransfer_haveLabel(selector: string, param: {
    index: number;
    label: string;
    type: Direction;
  }) {
    return cy.iTransfer_getItem(selector, param.index, param.type)
      .should('contain.text', param.label);
  },
  /** 断言指定项禁用 */
  iTransfer_itemDisabled(selector: string, index: number, type: Direction) {
    return cy.iTransfer_getItem(selector, index, type)
      .should('have.class', 'ix-transfer-list-item-disabled');
  },
  /** 点击指定项 */
  iTransfer_clickItem(selector: string, index: number, type: Direction) {
    return cy.iTransfer_getItem(selector, index, type)
      .click();
  },
  /** 选中全部待选 */
  iTransfer_checkAllSource(selector: string) {
    return cy.get(selector)
      .find(`.ix-transfer-content-source .ix-transfer-header`)
      .find('.ix-transfer-header-check-all')
      .click();
  },
  /** 选中全部已选 */
  iTransfer_checkAllTarget(selector: string) {
    return cy.get(selector)
      .find(`.ix-transfer-content-target .ix-transfer-header`)
      .find('.ix-transfer-header-check-all')
      .click();
  },
  /** 点击已选区域的清空按钮 */
  iTransfer_clear(selector: string) {
    return cy.get(selector)
      .find('.ix-transfer-content-target .ix-transfer-header')
      .find('.ix-transfer-header-clear-icon')
      .click();
  },
  /** 断言待选项或已选项数量 */
  iTransfer_haveLength(selector: string, length: number, type: Direction) {
    return cy.get(selector)
      .find(`.ix-transfer-content-${type} .ix-transfer-body`)
      .find('.ix-transfer-list-item')
      .should('have.length', length);
  },
  /** 点击右移按钮 */
  iTransfer_clickMultiAdd(selector: string) {
    return cy.get(selector)
      .find('.ix-transfer-operations')
      .find(btnSelector)
      .first()
      .click();
  },
  /** 点击左移按钮 */
  iTransfer_clickMultiRemove(selector: string) {
    return cy.get(selector)
      .find('.ix-transfer-operations')
      .find(btnSelector)
      .last()
      .click();
  },
  /** 点击把数据添加到已选 */
  iTransfer_selectRecord(selector: string, index: number) {
    return cy.iTransfer_clickItem(selector, index, 'source')
      .get(selector)
      .then(($el) => {
        
        if ($el.has(btnSelector).length) {
          cy.iTransfer_clickMultiAdd(selector);
        }
      });
  },
  /** 点击把数据从已选删除 */
  iTransfer_removeRecord(selector: string, index: number) {
    return cy.iTransfer_clickItem(selector, index, 'target')
      .get(selector)
      .then(($el) => {
        if ($el.has(btnSelector).length) {
          cy.iTransfer_clickMultiRemove(selector);
        } else {
          cy.iTransfer_getItem(selector, index, 'target')
            .find('.ix-transfer-list-item-close-icon')
            .click();
        }
      });
  },
  /** 搜索 */
  iTransfer_search(selector: string, type: Direction, text: string) {
    return cy.get(selector)
      .find(`.ix-transfer-content-${type} .ix-transfer-header`)
      .find('.ix-transfer-header-search-input')
      .find('.ix-input-inner')
      .clear()
      .type(`${text}{enter}`);
  },
  // @todo
  /** 获取分页器selector */
  // iTransfer_getPagination(type: Direction) {
  //   return `.ix-transfer-content-${type} .ix-transfer-footer-pagination`;
  // },
  /** 断言空状态 */
  iTransfer_isEmpty(selector: string, type: Direction) {
    return cy.get(selector)
      .find(`.ix-transfer-content-${type} .ix-transfer-body`)
      .find('.ix-transfer-body-empty-wrapper')
      .should('exist');
  },
};
