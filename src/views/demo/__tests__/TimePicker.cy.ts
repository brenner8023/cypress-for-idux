
import { defineComponent } from 'vue';

describe('component TimePicker', () => {

  const Demo = defineComponent({
    template: `
      <IxTimePicker v-bind="$attrs" data-cy="demo-time-picker" />
    `
  });
  const selector = '[data-cy="demo-time-picker"]';

  it('期望可以选择时间', () => {
    cy.mount(Demo)
      .iTimePicker_setValue(selector, '02:13:24')
      .iTimePicker_haveValue(selector, '02:13:24')
  });

  it('期望可以禁用', () => {
    cy.mount(Demo)
      .iTimePicker_disabled(selector, false)
      .get('@vue')
      .invoke('setProps', { disabled: true })
      .iTimePicker_disabled(selector);
  });

  it('期望可以设置只读', () => {
    cy.mount(Demo)
      .iTimePicker_readonly(selector, false)
      .get('@vue')
      .invoke('setProps', { readonly: true })
      .iTimePicker_readonly(selector);
  });

  it('期望可以清空', () => {
    cy.mount(Demo)
      .iTimePicker_clearable(selector, false)
      .get('@vue')
      .invoke('setProps', { clearable: true })
      .iTimePicker_setValue(selector, '02:13:24')
      .iTimePicker_haveValue(selector, '02:13:24')
      .iTimePicker_clearable(selector)
      .iTimePicker_clear(selector)
      .iTimePicker_haveValue(selector, '');
  });

  it('期望可以禁用指定时间', () => {
    cy.mount(Demo, { props: {
      disabledHours: () => [2, 3],
      disabledMinutes: () => [4, 5],
      disabledSeconds: () => [6, 7],
    } })
      .iTimePicker_disabledHour(selector, 2)
      .iTimePicker_disabledHour(selector, 3)
      .iTimePicker_disabledMinute(selector, 4)
      .iTimePicker_disabledMinute(selector, 5)
      .iTimePicker_disabledSecond(selector, 6)
      .iTimePicker_disabledSecond(selector, 7);
  });
});
