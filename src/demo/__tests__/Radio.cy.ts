import Radio from '../Radio.vue';

describe('component Radio', () => {
  it('期望checked', () => {
    cy.mount(Radio)
      .iRadio_isChecked('demo-radio', false)
      .get('@vue')
      .invoke('setProps', { checked: true })
      .iRadio_isChecked('demo-radio', true);
  });

  it('期望禁用', () => {
    cy.mount(Radio, {
      props: {
        disabled: false,
      },
    })
      .iRadio_disabled('demo-radio', false)
      .get('@vue')
      .invoke('setProps', { disabled: true })
      .iRadio_disabled('demo-radio', true);
  });

  it('期望文本显示abc', () => {
    cy.mount(Radio, {
      props: {
        label: 'abc',
      },
    })
      .iRadio_haveLabel('demo-radio', 'abc')
      .get('@vue')
      .invoke('setProps', { label: 'xyz' })
      .iRadio_haveLabel('demo-radio', 'xyz');
  });

  describe('component RadioGroup', () => {
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
        .iRadioGroup_isChecked('demo-radio-group', '222')
        .get('@vue')
        .invoke('setProps', { value: '1' })
        .iRadioGroup_isChecked('demo-radio-group', '111');
    });

    it('期望禁用', () => {
      cy.mount(Radio, {
        props: {
          disabled: true,
          dataSource,
        },
      })
        .iRadioGroup_disabled('demo-radio-group')
        .get('@vue')
        .invoke('setProps', { disabled: false })
        .iRadioGroup_disabled('demo-radio-group', false);
    });

    it('期望改变选值', () => {
      cy.mount(Radio, {
        props: {
          dataSource,
        },
      })
        .iRadioGroup_isChecked('demo-radio-group', '2')
        .iRadioGroup_check('demo-radio-group', '1')
        .iRadioGroup_isChecked('demo-radio-group', '111');
    });
  });
});
