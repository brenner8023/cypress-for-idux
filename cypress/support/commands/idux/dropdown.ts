
export default {
  /** 断言触发器文本 */
  iDropdown_haveTriggerText(triggerSelector: string, text: string) {
    return cy.getBy(triggerSelector).should('contain.text', text);
  },
  /** 断言浮层文本 */
  iDropdown_haveOverlayText(selector: string, text: string) {
    return cy.getBy(selector).should('contain.text', text);
  },
  /** 断言浮层是否显示 */
  iDropdown_visible(selector: string, visible = true) {
    if (visible) {
      return cy.getBy(selector).should('be.visible');
    }
    return cy.getBy(selector).should('not.be.visible');
  },
  /** 断言浮层是否销毁 */
  iDropdown_exist(selector: string, exist = true) {
    if (exist) {
      return cy.getBy(selector).should('exist');
    }
    return cy.getBy(selector).should('not.exist');
  },
  /** 悬浮触发器 */
  iDropdown_hover(triggerSelector: string) {
    return cy.getBy(triggerSelector).trigger('mouseenter');
  },
  /** 点击触发器 */
  iDropdown_click(triggerSelector: string) {
    return cy.getBy(triggerSelector).click();
  },
  /** 右键点击触发器 */
  iDropdown_rightClick(triggerSelector: string) {
    return cy.getBy(triggerSelector).rightclick();
  },
  /** 鼠标移开触发器 */
  iDropdown_mouseleave(triggerSelector: string) {
    return cy.getBy(triggerSelector).trigger('mouseleave');
  },
};
