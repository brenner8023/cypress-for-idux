
import common from './private';

export default {
  /** 输入内容 */
  iInputNumber_setValue(selector: string, value: number | string) {
    return cy.iInputNumber_clear(selector)
      .get(selector)
      .type(String(value));
  },
  /** 断言禁用 */
  iInputNumber_disabled(selector: string, disabled = true) {
    return common.itemDisabled(selector, disabled);
  },
  /** 断言readonly */
  iInputNumber_readonly(selector: string, readonly = true) {
    if (readonly) {
      return cy.get(selector)
        .should('have.attr', 'readonly');
    }
    return cy.get(selector)
      .should('not.have.attr', 'readonly');
  },
  /** 清空内容 */
  iInputNumber_clear(selector: string) {
    return cy.get(selector).clear();
  },
  /** 断言placeholder */
  iInputNumber_havePlaceholder(selector: string, placeholder: number | string) {
    return cy.get(selector).should('have.attr', 'placeholder', String(placeholder));
  },
  /** 断言内容 */
  iInputNumber_haveValue(selector: string, value: number | string) {
    return cy.get(selector).should('contain.value', String(value));
  },
  /** 聚焦 */
  iInputNumber_focus(selector: string) {
    return cy.get(selector).focus();
  },
  /** 失焦 */
  iInputNumber_blur(selector: string) {
    return cy.get(selector).blur();
  },
  /** 点击增加数值 */
  iInputNumber_increase(selector: string, times = 1) {
    return cy.then(() => {
      Array.from({ length: times }).forEach(() => {
        cy.get(selector).parent().find('.ix-input-number-increase').click();
      });
    });
  },
  /** 点击减少数值 */
  iInputNumber_decrease(selector: string, times = 1) {
    return cy.then(() => {
      Array.from({ length: times }).forEach(() => {
        cy.get(selector).parent().find('.ix-input-number-decrease').click();
      });
    });
  },
  /** 断言增加按钮禁用 */
  iInputNumber_increaseDisabled(selector: string, disabled = true) {
    if (disabled) {
      return cy.get(selector)
        .parent()
        .find('.ix-input-number-increase')
        .should('have.class', 'ix-input-number-increase--disabled');
    }
    return cy.get(selector)
      .parent()
      .find('.ix-input-number-increase')
      .should('not.have.class', 'ix-input-number-increase--disabled');
  },
  /** 断言减少按钮禁用 */
  iInputNumber_decreaseDisabled(selector: string, disabled = true) {
    if (disabled) {
      return cy.get(selector)
        .parent()
        .find('.ix-input-number-decrease')
        .should('have.class', 'ix-input-number-decrease--disabled');
    }
    return cy.get(selector)
      .parent()
      .find('.ix-input-number-decrease')
      .should('not.have.class', 'ix-input-number-decrease--disabled');
  },
};
