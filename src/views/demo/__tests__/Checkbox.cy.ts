import Checkbox from '../Checkbox.vue';

describe('component Checkbox', () => {

  const checkbox = '[data-cy="demo-checkbox"]';
  const cgSelector = '[data-cy="demo-checkbox-group"]';
  const label = 'vue@mio';
  const dataSource = [
    { key: 'Beijing', label: 'Beijing' },
    { key: 'Shanghai', label: 'Shanghai' },
    { key: 'Guangzhou', label: 'Guangzhou' },
    { key: 'Shenzhen', label: 'Shenzhen', disabled: true },
  ];

  it('期望勾选框勾选功能正常', () => {
    cy.mount(Checkbox, { props: { label } })
      .iCheckbox_isChecked(checkbox, false)
      .iCheckbox_haveLabel(checkbox, label)
      .iCheckbox_check(checkbox)
      .iCheckbox_isChecked(checkbox)
      .get('@vue')
      .invoke('setProps', { label: 'react@mio' })
      .iCheckbox_haveLabel(checkbox, 'react@mio');
  });

  it('期望勾选框禁用', () => {
    cy.mount(Checkbox, { props: { disabled: true, label } })
      .iCheckbox_disabled(checkbox)
      .get('@vue')
      .invoke('setProps', { disabled: false })
      .iCheckbox_disabled(checkbox, false);
  });

  it('期望勾选框处于半选状态', () => {
    cy.mount(Checkbox, { props: { label, indeterminate: true } })
      .iCheckbox_indeterminate(checkbox)
      .get('@vue')
      .invoke('setProps', { indeterminate: false })
      .iCheckbox_indeterminate(checkbox, false);
  });

  it('期望勾选框组勾选功能正常', () => {
    cy.mount(Checkbox, { props: { dataSource } })
      .iCheckboxGroup_itemChecked(cgSelector, 1, false)
      .iCheckGroup_clickItem(cgSelector, 1)
      .iCheckboxGroup_itemChecked(cgSelector, 1)
      .iCheckboxGroup_haveItemLabel(cgSelector, 0, 'Beijing')
      .iCheckboxGroup_haveItemLabel(cgSelector, 1, 'Shanghai');
  });

  it('期望勾选框组禁用功能正常', () => {
    cy.mount(Checkbox, { props: { dataSource } })
      .iCheckboxGroup_itemDisabled(cgSelector, 0, false)
      .iCheckboxGroup_itemDisabled(cgSelector, 3)
      .get('@vue')
      .invoke('setProps', { disabled: true })
      .iCheckboxGroup_allDisabled(cgSelector);
  });
});
