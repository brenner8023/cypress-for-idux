import Demo from '../Slider.vue';

describe('component Slider', () => {

  const slider = '[data-cy="demo-slider"]';

  it('期望数值变化正确', () => {
    cy.mount(Demo)
      .iSlider_haveValue(slider, 0)
      .iSlider_typeArrow(slider, 0, 'right')
      .iSlider_haveValue(slider, 1)
      .iSlider_typeArrow(slider, 1, 'top')
      .iSlider_haveValue(slider, 2);
  });

  it('期望最大值101，最小值50', () => {
    cy.mount(Demo, { props: {
      range: true,
      value: [67, 87],
      max: 101,
      min: 50,
    } })
      .iSlider_haveMax(slider, 101)
      .iSlider_haveMin(slider, 50)
      .get('@vue')
      .invoke('setProps', {
        max: 88,
        min: 66,
      })
      .iSlider_haveMax(slider, 88)
      .iSlider_haveMin(slider, 66);
  });

  it('期望组件可以禁用', () => {
    cy.mount(Demo, { props: {
      disabled: false,
    } })
    .iSlider_disabled(slider, false)
    .get('@vue')
    .invoke('setProps', {
      disabled: true,
    })
    .iSlider_disabled(slider);
  });

  it('期望tooltip默认展示数值', () => {
    cy.mount(Demo, { props: {
      range: true,
      value: [22, 33],
    } })
    .iSlider_haveTooltip(slider, 22, '22')
    .iSlider_haveTooltip(slider, 33, '33');
  });
});
