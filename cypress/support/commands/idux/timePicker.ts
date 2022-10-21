
const overlay = '.ix-time-picker-overlay-container .ix-time-picker-overlay:visible';

export default {
  /** 获取input */
  iTimePicker_getInput(selector: string) {
    return cy.get(selector)
      .find('.ix-time-picker-input');
  },
  /** 断言当前值 */
  iTimePicker_haveValue(selector: string, value: string) {
    return cy.iTimePicker_getInput(selector)
      .should('contain.value', value);
  },
  /** 设置指定时间 */
  iTimePicker_setValue(selector: string, value: string) {

    // 判断是否处于只读模式
    let readonly = false;

    return cy.iTimePicker_getInput(selector)
      .then($el => {
        readonly = !!$el.attr('readonly');
        $el.removeAttr('readonly');
      })
      .clear()
      .type(value)
      .then($el => {
        readonly && $el.attr('readonly', 'readonly');
      })
      .clickoutside();
  },
  /** 点击 */
  iTimePicker_click(selector: string) {
    return cy.get(selector).click();
  },
  /** 断言placeholder */
  iTimePicker_havePlaceholder(selector: string, placeholder: string) {
    return cy.iTimePicker_getInput(selector)
      .should('have.attr', 'placeholder', placeholder);
  },
  /** 断言是否禁用 */
  iTimePicker_disabled(selector: string, disabled = true) {
    if (disabled) {
      return cy.get(selector)
        .should('have.class', 'ix-trigger-disabled');
    }
    return cy.get(selector)
      .should('not.have.class', 'ix-trigger-disabled');
  },
  /** 断言是否只读 */
  iTimePicker_readonly(selector: string, readonly = true) {
    if (readonly) {
      return cy.iTimePicker_click(selector)
        .get(overlay)
        .should('not.exist');
    }
    return cy.iTimePicker_click(selector)
      .get(overlay)
      .should('exist')
      .clickoutside();
  },
  /** 断言是否可清空 */
  iTimePicker_clearable(selector: string, clearable = true) {
    if (clearable) {
      return cy.get(selector)
        .find('.ix-trigger-clear-icon')
        .should('exist');
    }
    return cy.get(selector)
      .find('.ix-trigger-clear-icon')
      .should('not.exist');
  },
  /** 清空 */
  iTimePicker_clear(selector: string) {
    return cy.get(selector)
      .find('.ix-trigger-clear-icon')
      .click();
  },
  /** 断言指定小时禁用 */
  iTimePicker_disabledHour(selector: string, hour: number) {
    return cy.iTimePicker_click(selector)
      .get(overlay)
      .find('.ix-time-panel-column')
      .eq(0)
      .contains('.ix-time-panel-cell-disabled', hour);
  },
  /** 断言指定分钟禁用 */
  iTimePicker_disabledMinute(selector: string, minute: number) {
    return cy.iTimePicker_click(selector)
      .get(overlay)
      .find('.ix-time-panel-column')
      .eq(1)
      .contains('.ix-time-panel-cell-disabled', minute);
  },
  /** 断言指定秒禁用 */
  iTimePicker_disabledSecond(selector: string, second: number) {
    return cy.iTimePicker_click(selector)
      .get(overlay)
      .find('.ix-time-panel-column')
      .eq(2)
      .contains('.ix-time-panel-cell-disabled', second);
  },
};
