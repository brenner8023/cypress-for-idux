
export default {
  /**
   * 断言当前绑定的数值
   * @param selector 选择器
   * @param value 当前绑定的数值
   * @returns 
   */
  iSlider_haveValue(selector: string, value: number | number[]) {
    const current = Array.isArray(value) ? value : [value];
    return cy.get(selector)
      .find('.ix-slider-thumb')
      .each(($el, index) => {
        cy.wrap($el)
          .should('have.attr', 'aria-valuenow', current[index]);
      });
  },
  /** 断言是否禁用 */
  iSlider_disabled(selector: string, disabled = true) {
    if (disabled) {
      return cy.get(selector)
        .should('have.class', 'ix-slider-disabled');
    }
    return cy.get(selector)
      .should('not.have.class', 'ix-slider-disabled');
  },
  /** 断言最大值 */
  iSlider_haveMax(selector: string, max: number) {
    return cy.get(selector)
      .find('.ix-slider-thumb')
      .eq(0)
      .should('have.attr', 'aria-valuemax', max);
  },
  /** 断言最小值 */
  iSlider_haveMin(selector: string, min: number) {
    return cy.get(selector)
      .find('.ix-slider-thumb')
      .eq(0)
      .should('have.attr', 'aria-valuemin', min);
  },
  /** 断言tooltip */
  iSlider_haveTooltip(selector: string, value: number, text: string) {
    const tooltip = '.ix-tooltip-overlay-container .ix-tooltip-wrapper:visible';

    return cy.get(selector)
      .find(`.ix-slider-thumb[aria-valuenow="${value}"]`)
      .trigger('mouseenter')
      .get(tooltip)
      .should('contain.text', text);
  },
  /** 按下键盘的方向键 */
  iSlider_typeArrow(selector: string, value: number, direction: 'top' | 'bottom' | 'left' | 'right') {

    const arrowMap = {
      top: '{uparrow}',
      bottom: '{downarrow}',
      left: '{leftarrow}',
      right: '{rightarrow}',
    };

    return cy.get(selector)
      .find(`.ix-slider-thumb[aria-valuenow="${value}"]`)
      .click()
      .type(arrowMap[direction]);
  },
};
