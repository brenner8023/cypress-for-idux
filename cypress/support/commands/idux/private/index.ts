
export default {
  /** 断言表单项禁用 */
  itemDisabled(selector: string, disabled = true) {
    if (disabled) {
      return cy.getBy(selector)
        .should('have.attr', 'disabled', 'disabled');
    }
    return cy.getBy(selector)
      .should('not.have.attr', 'disabled');
  },
};

export type ContainerSelector = string | JQuery<HTMLElement>;

/** 根据selector获取组件容器 */
export const getContainer = (selector: ContainerSelector) => {
  return typeof selector === 'string' ? cy.get(selector) : cy.wrap(selector);
};
