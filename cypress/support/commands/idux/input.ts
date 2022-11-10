
import common from './private';

export default {
  /** 输入内容 */
  iInput_setValue(selector: string, value: number | string) {
    return cy.get(selector)
      .clear()
      .type(String(value));
  },
  /** 断言禁用 */
  iInput_disabled(selector: string, disabled = true) {
    return common.itemDisabled(selector, disabled);
  },
  /** 断言readonly */
  iInput_readonly(selector: string, readonly = true) {
    if (readonly) {
      return cy.get(selector)
        .should('have.attr', 'readonly');
    }
    return cy.get(selector)
      .should('not.have.attr', 'readonly');
  },
  /** 清空内容 */
  iInput_clear(selector: string) {
    return cy.get(selector)
      .trigger('mouseover')
      .get(selector)
      .next()
      .click();
  },
  /** 断言placeholder */
  iInput_havePlaceholder(selector: string, placeholder: number | string) {
    return cy.get(selector).should('have.attr', 'placeholder', String(placeholder));
  },
  /** 断言内容 */
  iInput_haveValue(selector: string, value: number | string) {
    return cy.get(selector).should('contain.value', String(value));
  },
  /** 聚焦 */
  iInput_focus(selector: string) {
    return cy.get(selector).focus();
  },
  /** 失焦 */
  iInput_blur(selector: string) {
    return cy.get(selector).blur();
  },
};
