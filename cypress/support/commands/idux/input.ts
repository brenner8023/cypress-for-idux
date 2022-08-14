
export default {
  // 输入内容
  iInput_setValue(selector: string, value: number | string) {
    return cy.getBy(selector).type(String(value));
  },
  // 断言禁用
  iInput_disabled(selector: string, disabled = true) {
    if (disabled) {
      return cy.getBy(selector)
        .should('have.attr', 'disabled', 'disabled')
        .and('have.class', 'ix-input-disabled');
    }
    return cy.getBy(selector)
      .should('not.have.attr', 'disabled');
  },
  // 断言readonly
  iInput_readonly(selector: string, readonly = true) {
    if (readonly) {
      return cy.getBy(selector)
        .should('have.attr', 'readonly');
    }
    return cy.getBy(selector)
      .should('not.have.attr', 'readonly');
  },
  // 清空内容
  iInput_clear(selector: string) {
    return cy.getBy(selector)
      .trigger('mouseover')
      .getBy(selector)
      .next()
      .click();
  },
  // 断言placeholder
  iInput_havePlaceholder(selector: string, placeholder: number | string) {
    return cy.getBy(selector).should('have.attr', 'placeholder', String(placeholder));
  },
  // 断言内容
  iInput_haveValue(selector: string, value: number | string) {
    return cy.getBy(selector).should('contain.value', String(value));
  },
  // 聚焦
  iInput_focus(selector: string) {
    return cy.getBy(selector).focus();
  },
  // 失焦
  iInput_blur(selector: string) {
    return cy.getBy(selector).blur();
  },
};
