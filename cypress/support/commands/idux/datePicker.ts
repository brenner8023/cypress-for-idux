
const pickerOverlay = '.ix-date-picker-overlay:visible';

export default {
  /** 输入日期 */
  iDatePicker_inputDate(selector: string, date: string) {

    // 判断是否处于只读模式
    let readonly = false;

    return cy.get(selector)
      .find('input.ix-date-picker-input-inner')
      .then($el => {
        readonly = !!$el.attr('readonly');
        $el.removeAttr('readonly');
      })
      .clear()
      .type(date)
      .then($el => {
        readonly && $el.attr('readonly', 'readonly');
      })
      .clickoutside();
  },
  /** 断言日期 */
  iDatePicker_haveValue(selector: string, value: string) {
    return cy.get(selector)
      .find('input.ix-date-picker-input-inner')
      .should('have.value', value);
  },
  /** 断言placeholder */
  iDatePicker_havePlaceholder(selector: string, placeholder: string) {
    return cy.get(selector)
      .find('input.ix-date-picker-input-inner')
      .should('have.attr', 'placeholder', placeholder);
  },
  /** 断言是否禁用 */
  iDatePicker_disabled(selector: string, disabled = true) {
    if (disabled) {
      return cy.get(selector)
        .should('have.class', 'ix-trigger-disabled');
    }
    return cy.get(selector)
        .should('not.have.class', 'ix-trigger-disabled');
  },
  /** 清空选择 */
  iDatePicker_clear(selector: string) {
    return cy.get(selector)
      .find('.ix-trigger-clear-icon')
      .click();
  },
  /** 断言是否可以清空 */
  iDatePicker_clearable(selector: string, clearable = true) {
    if (clearable) {
      return cy.get(selector)
        .find('.ix-trigger-clear-icon')
        .should('exist');
    }
    return cy.get(selector)
      .find('.ix-trigger-clear-icon')
      .should('not.exist');
  },
  /**
   * 断言指定日期是否被禁用
   * @param selector 日期选择器
   * @param date 禁用的日期
   * @returns 
   */
  iDatePicker_disabledDate(selector: string, date: string) {
    let cacheVal = '';
    cy.get(selector)
      .find('input.ix-date-picker-input-inner')
      .then($el => {
        cacheVal = $el.val() as string ?? '';
      });

    return cy.iDatePicker_inputDate(selector, date)
      .iDatePicker_haveValue(selector, '')
      .then(() => {
        cacheVal && cy.iDatePicker_inputDate(selector, String(cacheVal));
      });
  },
};
