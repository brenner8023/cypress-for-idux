
import Demo from '../Rate.vue';

describe('component Demo', () => {

  const rate = '[data-cy="demo-rate"]';

  it('期望高亮数目为3.6', () => {
    cy.mount(Demo, { props: { value: 3.6, count: 6 } })
      .iRate_haveValue(rate, 3.6)
      .iRate_haveItems(rate, 6)
      .get('@vue')
      .invoke('setProps', { value: 5.5, count: 10 })
      .iRate_haveValue(rate, 5.5)
      .iRate_haveItems(rate, 10);
  });

  it('期望通过点击改变高亮数目', () => {
    cy.mount(Demo, { props: { value: 2.5 } })
      .iRate_haveValue(rate, 2.5)
      .iRate_clickItem(rate, 3)
      .iRate_haveValue(rate, 4);
  });

  it('期望可以禁用', () => {
    cy.mount(Demo, { props: { disabled: false } })
      .iRate_disabled(rate, false)
      .get('@vue')
      .invoke('setProps', { disabled: true })
      .iRate_disabled(rate);
  });

  it('期望显示文案提示', () => {
    cy.mount(Demo, { props: { tooltips: ['11', '22', '33', '44', '55'] } })
      .iRate_haveItemTip(rate, 0, '11')
      // .iRate_haveItemTip(rate, 2, '33')
      // .iRate_haveItemTip(rate, 4, '55');
  });
});
