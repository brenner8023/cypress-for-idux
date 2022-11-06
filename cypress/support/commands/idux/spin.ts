export default {
  /** 断言是否显示加载遮罩 */
  iSpin_spinning(selector: string, spinning = true) {
    const spinner = cy.get(selector).find('.ix-spin-spinner');
    return spinning ?
      spinner.should('exist') :
      spinner.should('not.exist');
  },
  /** 断言tip */
  iSpin_haveTip(selector: string, tip: string) {
    return cy.get(selector).find('.ix-spin-spinner-tip').should('contain.text', tip);
  },
};
