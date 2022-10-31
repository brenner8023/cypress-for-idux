
const overlay = '.ix-time-range-picker-overlay-container .ix-time-range-picker-overlay:visible';

export default {
  /** 获取input */
  iTimeRangePicker_getInput(selector: string) {
    return cy.get(selector)
      .find('.ix-time-range-picker-input-inner');
  },
  /** 断言当前值 */
  iTimeRangePicker_haveValue(selector: string, value: [string, string]) {
    return cy.iTimeRangePicker_getInput(selector)
      .each(($input, index) => {
        cy.wrap($input)
          .should('contain.value', value[index]);
      });
  },
  /** 设置指定时间 */
  iTimeRangePicker_setValue(selector: string, value: [string, string]) {

    // 判断是否处于只读模式
    let readonly = false;

    return cy.iTimeRangePicker_getInput(selector)
      .each(($el, index) => {
        readonly = !!$el.attr('readonly');
        $el.removeAttr('readonly');
        cy.wrap($el)
          .clear()
          .type(value[index])
          .then(() => {
            readonly && $el.attr('readonly', 'readonly');
          });
      })
      .get(overlay)
      .find('.ix-time-range-picker-overlay-footer .ix-button')
      .first()
      .click();
  },
  /** 点击 */
  iTimeRangePicker_click(selector: string) {
    return cy.get(selector).click();
  },
  /** 断言placeholder */
  iTimeRangePicker_havePlaceholder(selector: string, placeholder: [string, string]) {
    return cy.iTimeRangePicker_getInput(selector)
      .each(($input, index) => {
        cy.wrap($input)
          .should('have.attr', 'placeholder', placeholder[index]);
      });
  },
  /** 断言是否禁用 */
  iTimeRangePicker_disabled(selector: string, disabled = true) {
    const target = cy.get(selector);
    return disabled ?
      target.should('have.class', 'ix-trigger-disabled') :
      target.should('not.have.class', 'ix-trigger-disabled');
  },
  /** 断言是否只读 */
  iTimeRangePicker_readonly(selector: string, readonly = true) {
    const target = cy.iTimeRangePicker_click(selector).get(overlay);
    return readonly ?
      target.should('not.exist') :
      target.should('exist').clickoutside();
  },
  /** 清空 */
  iTimeRangePicker_clear(selector: string) {
    return cy.get(selector)
      .find('.ix-trigger-clear-icon')
      .click();
  },
};
