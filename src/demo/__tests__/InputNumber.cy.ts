import InputNumber from '../InputNumber.vue';

describe('component InputNumber', () => {

  const selector = '[data-cy="demo-input-number"]';

  it('期望内容为123', () => {
    cy.mount(InputNumber)
      .iInputNumber_haveValue(selector, 123)
      .iInputNumber_setValue(selector, 456)
      .iInputNumber_haveValue(selector, 456);
  });

  it('期望输入框禁用', () => {
    cy.mount(InputNumber, {
      props: {
        disabled: true,
      },
    })
      .iInputNumber_disabled(selector)
      .get('@vue')
      .invoke('setProps', { disabled: false })
      .iInputNumber_disabled(selector, false);
  });

  it('期望输入框只读', () => {
    cy.mount(InputNumber, {
      props: {
        readonly: true,
      },
    })
      .iInputNumber_readonly(selector)
      .get('@vue')
      .invoke('setProps', { readonly: false })
      .iInputNumber_readonly(selector, false);
  });

  it('期望placeholder展示abc', () => {
    cy.mount(InputNumber, {
      props: {
        placeholder: 'abc',
      },
    })
      .iInputNumber_havePlaceholder(selector, 'abc')
      .get('@vue')
      .invoke('setProps', { placeholder: 'xyz' })
      .iInputNumber_havePlaceholder(selector, 'xyz');
  });

  it('聚焦、失焦', () => {
    cy.mount(InputNumber, {
      props: {
        onFocus: cy.spy().as('focus'),
        onBlur: cy.spy().as('blur'),
      },
    })
      .iInputNumber_focus(selector)
      .get('@focus')
      .should('be.calledOnce')
      .iInputNumber_blur(selector)
      .get('@blur')
      .should('be.calledOnce');
  });

  it('已知显示123，期望点击2次后显示125', () => {
    cy.mount(InputNumber, {
      props: {
        onChange: cy.spy().as('change'),
      },
    })
      .iInputNumber_haveValue(selector, 123)
      .iInputNumber_increase(selector, 2)
      .get('@change')
      .should('be.calledTwice')
      .iInputNumber_haveValue(selector, 125);
  });

  it('已知显示123，期望点击2次后显示121', () => {
    cy.mount(InputNumber)
      .iInputNumber_haveValue(selector, 123)
      .iInputNumber_decrease(selector, 2)
      .iInputNumber_haveValue(selector, 121);
  });

  it('已知最大值123，期望增加按钮禁用', () => {
    cy.mount(InputNumber, { props: { max: 123 } })
      .iInputNumber_haveValue(selector, 123)
      .iInputNumber_increaseDisabled(selector)
      .get('@vue')
      .invoke('setProps', { max: 124 })
      .iInputNumber_increaseDisabled(selector, false);
  });

  it('已知最小值123，期望减少按钮禁用', () => {
    cy.mount(InputNumber, { props: { min: 123 } })
      .iInputNumber_haveValue(selector, 123)
      .iInputNumber_decreaseDisabled(selector)
      .get('@vue')
      .invoke('setProps', { min: 122 })
      .iInputNumber_decreaseDisabled(selector, false);
  });
});
