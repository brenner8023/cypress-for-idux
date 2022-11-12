
const selector = '.ix-modal-container .ix-modal-wrapper:visible';
const maskSelector = '.ix-modal-container .ix-mask:visible';

export default {
  /** 断言弹窗是否展示 */
  iModal_visible(visible = true) {
    const modal = cy.get(selector);
    return visible ?
      modal.should('exist') :
      modal.should('not.exist');
  },
  /** 断言是否有遮罩 */
  iModal_haveMask(haveMask = true) {
    const modal = cy.get(selector)
    return haveMask ?
      modal.should('have.class', 'ix-modal-with-mask') :
      modal.should('not.have.class', 'ix-modal-with-mask');
  },
  /** 断言弹窗标题 */
  iModal_haveHeader(header: string) {
    return cy.get(selector)
      .find('.ix-header-title')
      .should('contain.text', header);
  },
  /** 点击关闭图标 */
  iModal_clickToHide() {
    return cy.get(selector)
      .find('.ix-header')
      .find('.ix-header-suffix')
      .click();
  },
  /** 点击指定文本的按钮 */
  iModal_clickButton(text: string) {
    return getFooterBtn()
      .contains(text)
      .click();
  },
  /** 断言弹窗标题 */
  iModal_haveTitle(title: string) {
    return cy.get(selector)
      .find('.ix-modal-body-title')
      .should('contain.text', title);
  },
  /** 断言弹窗是否可关闭 */
  iModal_closable(closable = true) {
    const icon = cy.get(selector)
      .find('.ix-header')
      .find('.ix-icon-dialog-close');
    return closable ?
      icon.should('exist') :
      icon.should('not.exist');
  },
};

const getFooterBtn = () => {
  return cy.get(selector)
    .find('.ix-modal-footer')
    .find('.ix-button');
};
