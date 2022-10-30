
import DateRangePicker from '../DateRangePicker.vue';

describe('component DatePicker', () => {

  const rangePicker = '[data-cy="demo-date-range-picker"]';

  it('期望placeholder正常显示', () => {
    cy.mount(DateRangePicker, { props: { placeholder: ['p1', 'p2'] } })
      .iDateRangePicker_havePlaceholder(rangePicker, ['p1', 'p2'])
      .get('@vue')
      .invoke('setProps', { placeholder: ['n3', 'n4'] })
      .iDateRangePicker_havePlaceholder(rangePicker, ['n3', 'n4']);
  });

  it('期望可以输入日期', () => {
    cy.mount(DateRangePicker)
      .iDateRangePicker_inputDate(rangePicker, ['2022-01-02', '2022-01-03'])
      .iDateRangePicker_haveValue(rangePicker, ['2022-01-02', '2022-01-03'])
      .iDateRangePicker_inputDate(rangePicker, ['2021-01-01', '2022-12-12'])
      .iDateRangePicker_haveValue(rangePicker, ['2021-01-01', '2022-12-12']);
  });

  it('期望可以禁用日期', () => {
    cy.mount(DateRangePicker, { props: { disabled: false } })
      .iDateRangePicker_disabled(rangePicker, false)
      .get('@vue')
      .invoke('setProps', { disabled: true })
      .iDateRangePicker_disabled(rangePicker);
  });

  it('期望可以清空日期', () => {
    cy.mount(DateRangePicker, { props: { clearable: false } })
      .iDateRangePicker_clearable(rangePicker, false)
      .get('@vue')
      .invoke('setProps', { clearable: true })
      .iDateRangePicker_inputDate(rangePicker, ['2022-01-02', '2022-01-03'])
      .iDateRangePicker_clearable(rangePicker)
      .iDateRangePicker_clear(rangePicker)
      .iDateRangePicker_haveValue(rangePicker, ['', '']);
  });
});
