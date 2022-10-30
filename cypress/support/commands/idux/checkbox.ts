import type { ContainerSelector } from './private';

const getContainer = (selector: ContainerSelector) => {
  return typeof selector === 'string' ?
    cy.get(selector).parents('.ix-checkbox').first() :
    cy.wrap(selector);
};

export default {
  /** 断言是否勾选 */
  iCheckbox_isChecked(selector: ContainerSelector, checked = true) {
    if (checked) {
      return getContainer(selector).should('have.class', 'ix-checkbox-checked');
    }
    return getContainer(selector).should('not.have.class', 'ix-checkbox-checked');
  },
  /** 点击勾选 */
  iCheckbox_check(selector: ContainerSelector) {
    return getContainer(selector).click();
  },
  /** 断言勾选是否禁用 */
  iCheckbox_disabled(selector: ContainerSelector, disabled = true) {
    if (disabled) {
      return getContainer(selector).should('have.class', 'ix-checkbox-disabled');
    }
    return getContainer(selector).should('not.have.class', 'ix-checkbox-disabled');
  },
  /** 断言是否处于半选状态 */
  iCheckbox_indeterminate(selector: ContainerSelector, indeterminate = true) {
    if (indeterminate) {
      return getContainer(selector).should('have.class', 'ix-checkbox-indeterminate');
    }
    return getContainer(selector).should('not.have.class', 'ix-checkbox-indeterminate');
  },
  /** 断言勾选框的文本 */
  iCheckbox_haveLabel(selector: ContainerSelector, label: string) {
    return getContainer(selector)
      .find('.ix-checkbox-label')
      .should('contain.text', label);
  },
  /** 获取勾选组中的勾选框，传all表示获取所有 */
  iCheckboxGroup_getItem(selector: string, index: number | 'all') {
    if (index !== 'all') {
      return cy.get(selector)
        .find('.ix-checkbox')
        .eq(index);
    }
    return cy.get(selector)
      .find('.ix-checkbox');
  },
  /** 断言勾选组里某一项是否勾选 */
  iCheckboxGroup_itemChecked(selector: string, index: number, isChecked = true) {
    if (isChecked) {
      return cy.iCheckboxGroup_getItem(selector, index)
        .should('have.class', 'ix-checkbox-checked');
    }
    return cy.iCheckboxGroup_getItem(selector, index)
      .should('not.have.class', 'ix-checkbox-checked');
  },
  /** 点击勾选 */
  iCheckGroup_clickItem(selector: string, index: number) {
    return cy.iCheckboxGroup_getItem(selector, index)
      .click();
  },
  /** 断言勾选组的文本 */
  iCheckboxGroup_haveItemLabel(selector: string, index: number, label: string) {
    return cy.iCheckboxGroup_getItem(selector, index)
      .find('.ix-checkbox-label')
      .should('contain.text', label);
  },
  /** 断言勾选组是否禁用 */
  iCheckboxGroup_itemDisabled(selector: string, index: number, disabled = true) {
    if (disabled) {
      return cy.iCheckboxGroup_getItem(selector, index)
        .should('have.class', 'ix-checkbox-disabled');
    }
    return cy.iCheckboxGroup_getItem(selector, index)
      .should('not.have.class', 'ix-checkbox-disabled');
  },
  /** 断言勾选组是否禁用 */
  iCheckboxGroup_allDisabled(selector: string, disabled = true) {
    if (disabled) {
      return cy.iCheckboxGroup_getItem(selector, 'all').each($el => {
        cy.wrap($el)
          .should('not.have.class', '.ix-checkbox-disabled');
      });
    }
    return cy.iCheckboxGroup_getItem(selector, 'all').each($el => {
      cy.wrap($el)
        .should('have.class', '.ix-checkbox-disabled');
    });
  },
};
