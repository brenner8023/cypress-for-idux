
export default {
  /** 获取第n个步骤 */
  iStepper_getStepperItem(selector: string, index: number) {
    return cy.get(selector)
      .find('.ix-stepper-item')
      .eq(index);
  },
  /** 断言激活的步骤 */
  iStepper_activeItem(selector: string, index: number) {
    return cy.iStepper_getStepperItem(selector, index)
      .should('have.class', 'ix-stepper-item-active');
  },
  /** 断言激活的标题 */
  iStepper_haveActiveTitle(selector: string, text: string) {
    return cy.get(selector)
      .find('.ix-stepper-item .ix-stepper-item-title')
      .should('contain.text', text);
  },
  /** 通过index点击第n个步骤 */
  iStepper_clickItemByIndex(selector: string, index: number) {
    return cy.iStepper_getStepperItem(selector, index).click();
  },
  /** 通过title点击步骤 */
  iStepper_clickItemByTitle(selector: string, title: string) {
    return cy.get(selector)
      .contains('.ix-stepper-item-title', title)
      .click();
  },
  /** 断言步骤个数 */
  iStepper_havelength(selector: string, length: number) {
    return cy.get(selector)
      .find('.ix-stepper-item')
      .should('have.length', length);
  },
  /** 断言第n个步骤的标题 */
  iStepper_haveTitle(selector: string, index: number, title: string) {
    return cy.iStepper_getStepperItem(selector, index)
      .find('.ix-stepper-item-title')
      .should('contain.text', title);
  },
  /** 断言第n个步骤的description */
  iStepper_haveDescription(selector: string, index: number, description: string) {
    return cy.iStepper_getStepperItem(selector, index)
      .find('.ix-stepper-item-description')
      .should('contain.text', description);
  },
  /** 断言第n个步骤的状态 */
  iStepper_haveItemStatus(selector: string, index: number, status: string) {
    return cy.iStepper_getStepperItem(selector, index)
      .should('have.class', `ix-stepper-item-${status}`);
  },
  /** 断言步骤条是否垂直 */
  iStepper_isVertical(selector: string, vertical = true) {
    if (vertical) {
      return cy.get(selector)
        .should('have.class', 'ix-stepper-vertical');
    }
    return cy.get(selector)
      .should('not.have.class', 'ix-stepper-vertical');
  },
  /** 断言第n个步骤是否禁用 */
  iStepper_itemDisabled(selector: string, index: number, disabled = true) {
    if (disabled) {
      return cy.iStepper_getStepperItem(selector, index)
        .should('have.class', 'ix-stepper-item-disabled');
    }
    return cy.iStepper_getStepperItem(selector, index)
      .should('not.have.class', 'ix-stepper-item-disabled');
  },
};
