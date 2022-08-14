import Input from '../Input.vue';

describe('component Input', () => {
  it('期望内容为123', () => {
    cy.mount(Input)
      .iInput_haveValue('demo-input', '123')
      .iInput_setValue('demo-input', '567')
      .iInput_haveValue('demo-input', '567');
  });

  it('期望输入框禁用', () => {
    cy.mount(Input, {
      props: {
        disabled: true,
      },
    })
      .iInput_disabled('demo-input')
      .get('@vue')
      .invoke('setProps', { disabled: false })
      .iInput_disabled('demo-input', false);
  });

  it('期望输入框只读', () => {
    cy.mount(Input, {
      props: {
        readonly: true,
      },
    })
      .iInput_readonly('demo-input')
      .get('@vue')
      .invoke('setProps', { readonly: false })
      .iInput_readonly('demo-input', false);
  });

  it('期望placeholder展示abc', () => {
    cy.mount(Input, {
      props: {
        placeholder: 'abc',
      },
    })
      .iInput_havePlaceholder('demo-input', 'abc')
      .get('@vue')
      .invoke('setProps', { placeholder: 'xyz' })
      .iInput_havePlaceholder('demo-input', 'xyz');
  });

  it('清空内容', () => {
    cy.mount(Input, {
      props: {
        clearable: true,
      },
    })
      .iInput_haveValue('demo-input', '123')
      .iInput_clear('demo-input')
      .iInput_haveValue('demo-input', '');
  });

  it('聚焦、失焦', () => {
    cy.mount(Input)
      .iInput_focus('demo-input')
      .iInput_blur('demo-input');
  });
});
