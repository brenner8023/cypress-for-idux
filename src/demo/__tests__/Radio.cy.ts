import Radio from '../Radio.vue';

describe('component Radio', () => {

  const selector = '[data-cy="demo-radio"]';

  it('期望checked', () => {
    cy.mount(Radio)
      .iRadio_isChecked(selector, false)
      .get('@vue')
      .invoke('setProps', { checked: true })
      .iRadio_isChecked(selector, true);
  });

  it('期望禁用', () => {
    cy.mount(Radio, {
      props: {
        disabled: false,
      },
    })
      .iRadio_disabled(selector, false)
      .get('@vue')
      .invoke('setProps', { disabled: true })
      .iRadio_disabled(selector, true);
  });

  it('期望文本显示abc', () => {
    cy.mount(Radio, {
      props: {
        label: 'abc',
      },
    })
      .iRadio_haveLabel(selector, 'abc')
      .get('@vue')
      .invoke('setProps', { label: 'xyz' })
      .iRadio_haveLabel(selector, 'xyz');
  });

  describe('component RadioGroup', () => {
    const selector = '[data-cy="demo-radio-group"]';

    const dataSource = [
      { label: '111', key: '1' },
      { label: '222', key: '2' },
    ];

    it('期望选中', () => {
      cy.mount(Radio, {
        props: {
          dataSource,
        },
      })
        .iRadioGroup_isChecked(selector, '222')
        .get('@vue')
        .invoke('setProps', { value: '1' })
        .iRadioGroup_isChecked(selector, '111');
    });

    it('期望禁用', () => {
      cy.mount(Radio, {
        props: {
          disabled: true,
          dataSource,
        },
      })
        .iRadioGroup_disabled(selector)
        .get('@vue')
        .invoke('setProps', { disabled: false })
        .iRadioGroup_disabled(selector, false);
    });

    it('期望改变选值', () => {
      cy.mount(Radio, {
        props: {
          dataSource,
        },
      })
        .iRadioGroup_isChecked(selector, '2')
        .iRadioGroup_check(selector, '1')
        .iRadioGroup_isChecked(selector, '111');
    });
  });
});
