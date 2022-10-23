
const overlay = '.ix-tree-select-overlay-container .ix-tree-select-overlay:visible';

export default {
  /** 断言当前选中的值 */
  iTreeSelect_haveValue(selector: string, value: string | string[]) {

    const values = Array.isArray(value) ? value : [value];

    if (value.length === 0 || value === '') {
      return cy.get(selector)
        .find('.ix-selector-item-label')
        .should('not.exist');
    }

    return cy.then(() => {
      values.forEach(currVal => {
        cy.get(selector)
          .contains('.ix-selector-item-label', currVal);
      });
    });
  },
  /** 断言placeholder */
  iTreeSelect_havePlaceholder(selector: string, placeholder: string) {
    return cy.get(selector)
      .find('.ix-selector-placeholder')
      .should('contain.text', placeholder);
  },
  /** 断言是否禁用 */
  iTreeSelect_disabled(selector: string, disabled = true) {
    if (disabled) {
      return cy.get(selector)
        .should('have.class', 'ix-selector-disabled');
    }
    return cy.get(selector)
      .should('not.have.class', 'ix-selector-disabled');
  },
  /** 移除指定选中项 */
  iTreeSelect_removeSelection(selector: string, label: string) {
    return cy.get(selector)
      .find('.ix-selector-content')
      .contains('.ix-selector-item-label', label)
      .next('.ix-selector-item-remove')
      .click();
  },
  /** 点击 */
  iTreeSelect_clickSelector(selector: string) {
    return cy.get(selector).click();
  },
  /** 依次展开节点 */
  iTreeSelect_expandNode(selector: string, labels: string[]) {
    return toggleNode(selector, labels, 'expand');
  },
  /** 依次收起节点 */
  iTreeSelect_collapseNode(selector: string, labels: string[]) {
    return toggleNode(selector, labels, 'collapse');
  },
  /** 依次点击节点进行选择 */
  iTreeSelect_selectNode(selector: string, labels: string[]) {
    return cy.iTreeSelect_expandNode(selector, labels.slice(0, -1))
      .get(overlay)
      .find('.ix-tree-content')
      .contains('.ix-tree-node', labels[labels.length - 1])
      .click();
  },
  /** 搜索 */
  iTreeSelect_search(selector: string, text: string) {
    return cy.get(selector)
      .then($el => {
        if (!$el.hasClass('ix-selector-opened')) {
          cy.iTreeSelect_clickSelector(selector);
        }
        if ($el.hasClass('ix-selector-searchable')) {
          cy.get(selector)
            .find('.ix-selector-input-inner')
            .clear()
            .type(text);
          return;
        }
        cy.get(overlay)
          .find('.ix-tree-select-overlay-search-wrapper')
          .find('.ix-input-inner')
          .clear()
          .type(text);
      });
  },
  /** 清空已选 */
  iTreeSelect_clear(selector: string) {
    return cy.get(selector)
      .find('.ix-selector-clear')
      .click();
  },
};

const toggleNode = (selector: string, labels: string[], type: 'collapse' | 'expand') => {
  return cy.get(selector)
    .then($el => {
      if (!$el.hasClass('ix-selector-opened')) {
        cy.iTreeSelect_clickSelector(selector);
      }
      labels.forEach(label => {
        cy.get(overlay)
          .find('.ix-tree-content')
          .contains('.ix-tree-node', label)
          .then($node => {
            const hasExpandClass = $node.hasClass('ix-tree-node-expanded');
            const flag = type === 'collapse' ? hasExpandClass : !hasExpandClass;
            if (flag) {
              cy.wrap($node)
                .find('.ix-tree-node-expand')
                .click();
            }
          });
      });
    });
};
