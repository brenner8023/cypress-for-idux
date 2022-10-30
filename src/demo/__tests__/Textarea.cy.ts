import Demo from '../Textarea.vue';

describe('component Textarea', () => {

  const textarea = '[data-cy="demo-textarea"]';

  it('期望可以输入内容', () => {
    cy.mount(Demo, { props: { placeholder: 'please type' } })
      .iTextarea_setValue(textarea, 'can u see me')
      .iTextarea_haveValue(textarea, 'can u see me')
      .iTextarea_havePlaceholder(textarea, 'please type')
      .get('@vue')
      .invoke('setProps', { placeholder: 'changed' })
      .iTextarea_havePlaceholder(textarea, 'changed');
  });

  it('期望可以禁用', () => {
    cy.mount(Demo)
      .iTextarea_disabled(textarea, false)
      .get('@vue')
      .invoke('setProps', { disabled: true })
      .iTextarea_disabled(textarea);
  });

  it('期望可以设置只读', () => {
    cy.mount(Demo)
      .iTextarea_readonly(textarea, false)
      .get('@vue')
      .invoke('setProps', { readonly: true })
      .iTextarea_readonly(textarea);
  });

  it('期望可以清空数据', () => {
    cy.mount(Demo)
      .iTextarea_clearable(textarea, false)
      .iTextarea_setValue(textarea, '12345')
      .iTextarea_haveValue(textarea, '12345')
      .get('@vue')
      .invoke('setProps', { clearable: true })
      .iTextarea_clearable(textarea)
      .iTextarea_clear(textarea)
      .iTextarea_haveValue(textarea, '');
  });

  it('期望可以聚焦、失焦', () => {
    cy.mount(Demo)
      .iTextarea_focus(textarea)
      .iTextarea_blur(textarea);
  });
});
