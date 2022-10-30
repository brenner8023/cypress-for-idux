
export default {
  /** 断言文本 */
  iTimeline_haveText(selector: string, index: number, text: string) {
    return cy.get(selector)
      .find('.ix-timeline-item .ix-timeline-item-content')
      .eq(index)
      .should('contain.text', text);
  },
  /** 断言是否pending */
  iTimeline_isPending(selector: string, isPending = true) {
    const target = cy.get(selector).find('.ix-timeline-item-pending');
    return isPending ?
      target.should('exist') :
      target.should('not.exist');
  },
  /** 断言标签 */
  iTimeline_haveLabel(selector: string, index: number, label: string) {
    return cy.get(selector)
      .find('.ix-timeline-item .ix-timeline-item-content-label')
      .eq(index)
      .should('contain.text', label);
  },
};
