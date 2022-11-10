import Input from '../Input.vue';

describe('component Input', () => {

  const selector = '[data-cy="demo-input"]';

  it('期望内容为123', () => {
    cy.mount(Input)
      .iInput_haveValue(selector, '123')
      .iInput_setValue(selector, '567')
      .iInput_haveValue(selector, '567');
  });

  it('期望输入框禁用', () => {
    cy.mount(Input, {
      props: {
        disabled: true,
      },
    })
      .iInput_disabled(selector)
      .get('@vue')
      .invoke('setProps', { disabled: false })
      .iInput_disabled(selector, false);
  });

  it('期望输入框只读', () => {
    cy.mount(Input, {
      props: {
        readonly: true,
      },
    })
      .iInput_readonly(selector)
      .get('@vue')
      .invoke('setProps', { readonly: false })
      .iInput_readonly(selector, false);
  });

  it('期望placeholder展示abc', () => {
    cy.mount(Input, {
      props: {
        placeholder: 'abc',
      },
    })
      .iInput_havePlaceholder(selector, 'abc')
      .get('@vue')
      .invoke('setProps', { placeholder: 'xyz' })
      .iInput_havePlaceholder(selector, 'xyz');
  });

  it('清空内容', () => {
    cy.mount(Input, {
      props: {
        clearable: true,
      },
    })
      .iInput_haveValue(selector, '123')
      .iInput_clear(selector)
      .iInput_haveValue(selector, '');
  });

  it('聚焦、失焦', () => {
    cy.mount(Input)
      .iInput_focus(selector)
      .iInput_blur(selector);
  });
});
