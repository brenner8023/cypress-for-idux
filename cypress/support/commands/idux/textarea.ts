
export default {
  /** 输入内容 */
  iTextarea_setValue(selector: string, value: number | string) {
    return cy.get(selector)
      .clear()
      .type(String(value));
  },
  /** 断言禁用 */
  iTextarea_disabled(selector: string, disabled = true) {
    if (disabled) {
      return getContainer(selector).should('have.class', 'ix-textarea-disabled');
    }
    return getContainer(selector).should('not.have.class', 'ix-textarea-disabled');
  },
  /** 断言readonly */
  iTextarea_readonly(selector: string, readonly = true) {
    if (readonly) {
      return cy.get(selector)
        .should('have.attr', 'readonly');
    }
    return cy.get(selector)
      .should('not.have.attr', 'readonly');
  },
  /** 断言clearable */
  iTextarea_clearable(selector: string, clearable = true) {
    if (clearable) {
      return getContainer(selector)
        .find('.ix-textarea-clear')
        .should('exist');
    }
    return getContainer(selector)
      .find('.ix-textarea-clear')
      .should('not.exist');
  },
  /** 清空内容 */
  iTextarea_clear(selector: string) {
    return getContainer(selector)
      .find('.ix-textarea-clear:visible')
      .click();
  },
  /** 断言placeholder */
  iTextarea_havePlaceholder(selector: string, placeholder: number | string) {
    return cy.get(selector).should('have.attr', 'placeholder', String(placeholder));
  },
  /** 断言内容 */
  iTextarea_haveValue(selector: string, value: number | string) {
    return cy.get(selector).should('contain.value', String(value));
  },
  /** 聚焦 */
  iTextarea_focus(selector: string) {
    return cy.get(selector).focus();
  },
  /** 失焦 */
  iTextarea_blur(selector: string) {
    return cy.get(selector).blur();
  },
};

const getContainer = (selector: string) => cy.get(selector).parent('.ix-textarea');
