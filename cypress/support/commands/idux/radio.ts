
import common from './private';

export default {
  /** 断言选中 */
  iRadio_isChecked(selector: string, checked: boolean) {
    if (checked) {
      return cy.get(selector)
        .should('be.checked');
    }
    return cy.get(selector)
      .should('not.be.checked');
  },
  /** 选中 */
  iRadio_check(selector: string) {
    return cy.get(selector)
      .check();
  },
  /** 断言禁用 */
  iRadio_disabled(selector: string, disabled = true) {
    return common.itemDisabled(selector, disabled);
  },
  /** 断言label */
  iRadio_haveLabel(selector: string, label: string) {
    return cy.get(selector)
      .parent()
      .next()
      .should('contain.text', label);
  },
  /** 断言单选框组选中的label */
  iRadioGroup_isChecked(selector: string, label: string) {
    return cy.get(selector)
      .find('.ix-radio-checked')
      .should('contain.text', label);
  },
  /** 改变单选框组的选值 */
  iRadioGroup_check(selector: string, value: unknown) {
    return cy.get(selector)
      .find(`input[type="radio"][value="${value}"]`)
      .check();
  },
  /** 断言单选框组禁用 */
  iRadioGroup_disabled(selector: string, disabled = true) {
    if (disabled) {
      return cy.get(selector)
        .find('.ix-radio')
        .should('have.class', 'ix-radio-disabled');
    }
    return cy.get(selector)
      .find('.ix-radio')
      .should('not.have.class', 'ix-radio-disabled');
  },
};
