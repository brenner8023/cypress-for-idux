
import DatePicker from '../DatePicker.vue';

describe('component DatePicker', () => {

  const picker = '[data-cy="demo-date-picker"]';
  const rangePicker = '[data-cy="demo-date-range-picker"]';

  it('期望日期选择功能可用', () => {
    cy.mount(DatePicker)
      .iDatePicker_inputDate(picker, '2022-10-16')
      .iDatePicker_haveValue(picker, '2022-10-16')
      .iDatePicker_inputDate(picker, '2021-09-15')
      .iDatePicker_haveValue(picker, '2021-09-15')
      .get('@vue')
      .invoke('setProps', { type: 'week' })
      .iDatePicker_inputDate(picker, '2022-42')
      .iDatePicker_haveValue(picker, '2022-42')
      .get('@vue')
      .invoke('setProps', { type: 'quarter' })
      .iDatePicker_inputDate(picker, '2022-Q3')
      .iDatePicker_haveValue(picker, '2022-Q3')
      .get('@vue')
      .invoke('setProps', { type: 'datetime' })
      .iDatePicker_inputDate(picker, '2022-10-09 20:17:35')
      .iDatePicker_haveValue(picker, '2022-10-09 20:17:35')
      .get('@vue')
      .invoke('setProps', { allowInput: true })
      .iDatePicker_inputDate(picker, '2022-10-16 00:12:11')
      .iDatePicker_haveValue(picker, '2022-10-16 00:12:11')
      .get('@vue')
      .invoke('setProps', { format: 'dd/MM/yyyy', type: 'date' })
      .iDatePicker_inputDate(picker, '15/10/2022')
      .iDatePicker_haveValue(picker, '15/10/2022');
  });

  it('期望placeholder正常显示', () => {
    cy.mount(DatePicker, { props: { placeholder: 'can u see me' } })
      .iDatePicker_havePlaceholder(picker, 'can u see me')
      .get('@vue')
      .invoke('setProps', { placeholder: 'please input' })
      .iDatePicker_havePlaceholder(picker, 'please input');
  });

  it('期望date-picker被禁用', () => {
    cy.mount(DatePicker, { props: { disabled: true } })
      .iDatePicker_disabled(picker)
      .get('@vue')
      .invoke('setProps', { disabled: false })
      .iDatePicker_disabled(picker, false);
  });

  it('期望清空选择功能正常', () => {
    cy.mount(DatePicker, { props: { clearable: false } })
      .iDatePicker_clearable(picker, false)
      .get('@vue')
      .invoke('setProps', { clearable: true })
      .iDatePicker_inputDate(picker, '2020-02-02')
      .iDatePicker_haveValue(picker, '2020-02-02')
      .iDatePicker_clearable(picker)
      .iDatePicker_clear(picker)
      .iDatePicker_haveValue(picker, '');
  });

  it('期望可以禁用指定日期', () => {
    cy.mount(DatePicker, { props: {
      disabledDate: (date: Date) => new Date('2020-02-02').toDateString() === date.toDateString(),
    } })
    .iDatePicker_disabledDate(picker, '2020-02-02', '2');
  });
});
