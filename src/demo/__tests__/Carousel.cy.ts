
import Demo from '../Carousel.vue';

describe('component Carousel', () => {

  const selector = '[data-cy="demo-carousel"]';

  it('期望可以进行切换', () => {
    cy.mount(Demo)
      .iCarousel_haveLength(selector, 4)
      .iCarousel_activeText(selector, 'Demo1')
      .iCarousel_clickDot(selector, 1)
      .iCarousel_activeText(selector, 'Demo2');
  });

  it('期望可以通过hover触发切换', () => {
    cy.mount(Demo, { props: { trigger: 'hover' } })
      .iCarousel_activeText(selector, 'Demo1')
      .iCarousel_hoverDot(selector, 1)
      .iCarousel_activeText(selector, 'Demo2');
  });

  it('期望可以点击箭头进行切换', () => {
    cy.mount(Demo, { props: { showArrow: true } })
      .iCarousel_activeText(selector, 'Demo1')
      .iCarousel_clickToNext(selector)
      .iCarousel_activeText(selector, 'Demo2')
      .iCarousel_clickToNext(selector)
      .iCarousel_activeText(selector, 'Demo3')
      .iCarousel_clickToPrev(selector)
      .iCarousel_activeText(selector, 'Demo2');
  });
});
