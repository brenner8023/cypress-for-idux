
const cascaderOverlay = '.ix-cascader-overlay:visible';

const clickLabel = (labels: string[]) => {
  return cy.then(() => {
    labels.forEach(label => {
      cy.get(cascaderOverlay)
        .contains('.ix-cascader-option-label:visible', label)
        .click();
    });
  });
};

export default {
  /** 断言当前选中的值 */
  iCascader_haveSelectedText(selector: string, text: string) {
    return cy.get(selector)
      .find('.ix-selector-content .ix-selector-item-label')
      .should('contain.text', text);
  },

  /** 点击选中级联组件的某一项 */
  iCascader_clickItem(selector: string, labels: string[]) {
    cy.get(selector)
      .should('not.have.class', 'ix-selector-opened')
      .click();
    return clickLabel(labels);
  },
  /** 断言级联组件是否展开 */
  iCascader_isExpanded(selector: string, isExpanded = true) {
    if (isExpanded) {
      return cy.get(selector)
        .should('have.class', 'ix-selector-opened');
    }
    return cy.get(selector)
      .should('not.have.class', 'ix-selector-opened');
  },
  /** 点击清空图标 */
  iCascader_clear(selector: string) {
    return cy.get(selector)
      .find('.ix-selector-clear')
      .click();
  },
  /** 断言级联组件是否可清除 */
  iCascader_clearable(selector: string, clearable = true) {
    if (clearable) {
      return cy.get(selector)
        .should('have.class', 'ix-selector-clearable');
    }
    return cy.get(selector)
      .should('not.have.class', 'ix-selector-clearable');
  },
  /** 断言级联组件是否禁用 */
  iCascader_disabled(selector: string, disabled = true) {
    if (disabled) {
      return cy.get(selector)
        .should('have.class', 'ix-selector-disabled');
    }
    return cy.get(selector)
      .should('not.have.class', 'ix-selector-disabled');
  },
  /** 断言级联组件是否为空 */
  iCascader_isEmpty(selector: string, isEmpty = true) {
    if (isEmpty) {
      return cy.get(selector)
        .find('.ix-selector-content .ix-selector-item-label')
        .should('not.exist');
    }
    return cy.get(selector)
      .find('.ix-selector-content .ix-selector-item-label')
      .should('be.visible');
  },
  /** 断言级联组件的placeholder */
  iCascader_havePlaceholder(selector: string, placeholder: string) {
    return cy.get(selector)
      .find('.ix-selector-placeholder')
      .should('contain.text', placeholder);
  },
  /** 断言级联组件是否只读 */
  iCascader_readonly(selector: string, readonly = true) {
    if (readonly) {
      return cy.get(selector)
        .should('have.class', 'ix-selector-readonly');
    }
    return cy.get(selector)
      .should('not.have.class', 'ix-selector-readonly');
  },
  /** 断言级联组件是否可搜索 */
  iCascader_searchable(selector: string, searchable = true) {
    if (searchable) {
      return cy.get(selector)
        .should('have.class', 'ix-selector-searchable')
        .and('have.class', 'ix-selector-searchable');
    }
    return cy.get(selector)
        .should('not.have.class', 'ix-selector-searchable')
        .and('not.have.class', 'ix-selector-searchable');
  },
  /** 级联组件搜索 */
  iCascader_search(selector: string, text: string, index = 0) {
    return cy.get(selector)
      .click()
      .find('.ix-selector-input-inner')
      .type(text)
      .get(cascaderOverlay)
      .find('.ix-cascader-option-label-highlight')
      .eq(index)
      .click();
  }, 
};
