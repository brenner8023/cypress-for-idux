
export default {
  /** 获取两个日期输入框 */
  iDateRangePicker_getInput(selector: string, index: number) {
    return cy.get(selector)
      .find('.ix-date-range-picker-input')
      .find('.ix-date-range-picker-input-inner')
      .eq(index);
  },
  /** 输入日期 */
  iDateRangePicker_inputDate(selector: string, date: string[]) {

    // 判断是否处于只读模式
    let readonly = false;

    const typeVal = (index = 0) => {
      return cy.iDateRangePicker_getInput(selector, index)
        .then($el => {
          readonly = !!$el.attr('readonly');
          $el.removeAttr('readonly');
        })
        .clear()
        .type(date[index])
        .then($el => {
          readonly && $el.attr('readonly', 'readonly');
        })
        .then(() => {
          if (index < date.length - 1) {
            typeVal(index + 1);
          }
        });
    };

    return typeVal()
      .iDateRangePicker_getOverlay()
      .find('.ix-date-range-picker-overlay-footer .ix-button')
      .first()
      .click();
  },
  /** 断言日期 */
  iDateRangePicker_haveValue(selector: string, value: [string, string]) {
    return cy.iDateRangePicker_getInput(selector, 0)
      .should('have.value', value[0])
      .iDateRangePicker_getInput(selector, 1)
      .should('have.value', value[1]);
  },
  /** 断言placeholder */
  iDateRangePicker_havePlaceholder(selector: string, placeholder: [string, string]) {
    return cy.iDateRangePicker_getInput(selector, 0)
      .should('have.attr', 'placeholder', placeholder[0])
      .iDateRangePicker_getInput(selector, 1)
      .should('have.attr', 'placeholder', placeholder[1]);
  },
  /** 断言是否禁用 */
  iDateRangePicker_disabled(selector: string, disabled = true) {
    if (disabled) {
      return cy.get(selector)
        .should('have.class', 'ix-trigger-disabled')
        .iDateRangePicker_getInput(selector, 0)
        .should('have.attr', 'disabled')
        .iDateRangePicker_getInput(selector, 1)
        .should('have.attr', 'disabled');
    }
    return cy.get(selector)
        .should('not.have.class', 'ix-trigger-disabled');
  },
  /** 清空选择 */
  iDateRangePicker_clear(selector: string) {
    return cy.get(selector)
      .find('.ix-trigger-clear-icon')
      .click();
  },
  /** 断言是否可以清空 */
  iDateRangePicker_clearable(selector: string, clearable = true) {
    if (clearable) {
      return cy.get(selector)
        .find('.ix-trigger-clear-icon')
        .should('exist');
    }
    return cy.get(selector)
      .find('.ix-trigger-clear-icon')
      .should('not.exist');
  },
  /** 获取浮层 */
  iDateRangePicker_getOverlay() {
    const pickerOverlay = '.ix-date-range-picker-overlay:visible';
    return cy.get(pickerOverlay);
  },
};
