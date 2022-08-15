import InputNumber from '../InputNumber.vue';

describe('component InputNumber', () => {
  it('期望内容为123', () => {
    cy.mount(InputNumber)
      .iInputNumber_haveValue('demo-input-number', 123)
      .iInputNumber_setValue('demo-input-number', 456)
      .iInputNumber_haveValue('demo-input-number', 456);
  });

  it('期望输入框禁用', () => {
    cy.mount(InputNumber, {
      props: {
        disabled: true,
      },
    })
      .iInputNumber_disabled('demo-input-number')
      .get('@vue')
      .invoke('setProps', { disabled: false })
      .iInputNumber_disabled('demo-input-number', false);
  });

  it('期望输入框只读', () => {
    cy.mount(InputNumber, {
      props: {
        readonly: true,
      },
    })
      .iInputNumber_readonly('demo-input-number')
      .get('@vue')
      .invoke('setProps', { readonly: false })
      .iInputNumber_readonly('demo-input-number', false);
  });

  it('期望placeholder展示abc', () => {
    cy.mount(InputNumber, {
      props: {
        placeholder: 'abc',
      },
    })
      .iInputNumber_havePlaceholder('demo-input-number', 'abc')
      .get('@vue')
      .invoke('setProps', { placeholder: 'xyz' })
      .iInputNumber_havePlaceholder('demo-input-number', 'xyz');
  });

  it('聚焦、失焦', () => {
    cy.mount(InputNumber, {
      props: {
        onFocus: cy.spy().as('focus'),
        onBlur: cy.spy().as('blur'),
      },
    })
      .iInputNumber_focus('demo-input-number')
      .get('@focus')
      .should('be.calledOnce')
      .iInputNumber_blur('demo-input-number')
      .get('@blur')
      .should('be.calledOnce');
  });

  it('已知显示123，期望点击2次后显示125', () => {
    cy.mount(InputNumber, {
      props: {
        onChange: cy.spy().as('change'),
      },
    })
      .iInputNumber_haveValue('demo-input-number', 123)
      .iInputNumber_increase('demo-input-number', 2)
      .get('@change')
      .should('be.calledTwice')
      .iInputNumber_haveValue('demo-input-number', 125);
  });

  it('已知显示123，期望点击2次后显示121', () => {
    cy.mount(InputNumber)
      .iInputNumber_haveValue('demo-input-number', 123)
      .iInputNumber_decrease('demo-input-number', 2)
      .iInputNumber_haveValue('demo-input-number', 121);
  });

  it('已知最大值123，期望增加按钮禁用', () => {
    cy.mount(InputNumber, { props: { max: 123 } })
      .iInputNumber_haveValue('demo-input-number', 123)
      .iInputNumber_increaseDisabled('demo-input-number')
      .get('@vue')
      .invoke('setProps', { max: 124 })
      .iInputNumber_increaseDisabled('demo-input-number', false);
  });

  it('已知最小值123，期望减少按钮禁用', () => {
    cy.mount(InputNumber, { props: { min: 123 } })
      .iInputNumber_haveValue('demo-input-number', 123)
      .iInputNumber_decreaseDisabled('demo-input-number')
      .get('@vue')
      .invoke('setProps', { min: 122 })
      .iInputNumber_decreaseDisabled('demo-input-number', false);
  });
});
