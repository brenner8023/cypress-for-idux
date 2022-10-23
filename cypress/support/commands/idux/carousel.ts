
export default {
  /** 点击面板指示点跳转 */
  iCarousel_clickDot(selector: string, index: number) {
    return cy.get(selector)
      .find('.ix-carousel-dots')
      .find('.ix-carousel-dot')
      .eq(index)
      .click();
  },
  /** 鼠标悬浮面板指示点跳转 */
  iCarousel_hoverDot(selector: string, index: number) {
    return cy.get(selector)
      .find('.ix-carousel-dots')
      .find('.ix-carousel-dot')
      .eq(index)
      .trigger('mouseenter');
  },
  /** 断言当前激活的面板文本 */
  iCarousel_activeText(selector: string, text: string) {
    return cy.get(selector)
      .find('.ix-carousel-slider-active')
      .should('contain.text', text);
  },
  /** 断言数量 */
  iCarousel_haveLength(selector: string, length: number) {
    return cy.get(selector)
      .find('.ix-carousel-sliders')
      .find('.ix-carousel-slider')
      .should('have.length', length);
  },
  /** 点击下一张的箭头图标 */
  iCarousel_clickToNext(selector: string) {
    return cy.get(selector)
      .find('.ix-carousel-arrow-next')
      .click();
  },
  /** 点击上一张的箭头图标 */
  iCarousel_clickToPrev(selector: string) {
    return cy.get(selector)
      .find('.ix-carousel-arrow-prev')
      .click();
  },
};
