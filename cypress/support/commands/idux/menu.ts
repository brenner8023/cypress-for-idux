
const defaultContainer = '.ix-menu-overlay-container';
const itemSelector = '.ix-menu-item,.ix-menu-sub';
const visibleItemSelector = '.ix-menu-item:visible,.ix-menu-sub:visible';
const selectedItem = '.ix-menu-item-selected,.ix-menu-sub-selected';
const disabledSelector = '.ix-menu-item-disabled,.ix-menu-sub-disabled';

export default {
  /** 断言menu的子项label */
  iMenu_haveLabel(selector: string, labels: string[], overlayContainer?: string) {
    const container = overlayContainer ?? defaultContainer;
    cy.get(selector)
      .contains(itemSelector, labels[0])
      .realHover();
    return cy.wrap(labels.slice(1))
      .each((label: string) => {
        cy.get(container)
          .contains(visibleItemSelector, label)
          .realHover();
      });
  },
  /** 依次点击menu的子项 */
  iMenu_clickItem(selector: string, labels: string[], overlayContainer?: string) {
    const first = cy.get(selector)
      .contains(itemSelector, labels[0])
      .realClick();

    if (labels.length === 1) {
      return first;
    }
    const container = overlayContainer ?? defaultContainer;
    return cy.wrap(labels.slice(1))
      .each((label: string) => {
        cy.get(container)
          .contains(visibleItemSelector, label)
          .realClick();
      });
  },
  /** 断言当前选中的label */
  iMenu_haveSelectedLabel(selector: string, labels: string[], overlayContainer?: string) {
    const first = cy.get(selector)
      .contains(selectedItem, labels[0])
      .realHover();

    if (labels.length === 1) {
      return first;
    }
    const container = overlayContainer ?? defaultContainer;
    return cy.wrap(labels.slice(1))
      .each((label: string) => {
        cy.get(container)
          .contains(selectedItem, label)
          .realHover();
      });
  },
  /** 断言子项是否禁用 */
  iMenu_haveDisabledLabel(selector: string, labels: string[], overlayContainer?: string) {
    if (labels.length === 1) {
      return cy.get(selector)
        .contains(disabledSelector, labels[0])
        .realHover();
    }
    cy.get(selector)
      .contains(itemSelector, labels[0])
      .realHover();
    const container = overlayContainer ?? defaultContainer;
    return cy.wrap(labels.slice(1))
      .each((label: string, index) => {
        window.console.log(labels.length - 1 - 1)
        const selector = index === labels.length - 1 - 1 ? disabledSelector : itemSelector;
        cy.get(container)
          .contains(selector, label)
          .realHover();
      });
  },
};
