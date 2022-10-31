
import { defineComponent } from 'vue';

describe('component TimeRangePicker', () => {

  const Demo = defineComponent({
    template: `
      <IxTimeRangePicker v-bind="$attrs" data-cy="demo-time-range-picker" />
    `
  });
  const selector = '[data-cy="demo-time-range-picker"]';

  it('期望可以选择时间', () => {
    cy.mount(Demo)
      .iTimeRangePicker_setValue(selector, ['02:13:24', '04:26:48'])
      .iTimeRangePicker_haveValue(selector, ['02:13:24', '04:26:48']);
  });

  it('期望可以禁用', () => {
    cy.mount(Demo)
      .iTimeRangePicker_disabled(selector, false)
      .get('@vue')
      .invoke('setProps', { disabled: true })
      .iTimeRangePicker_disabled(selector);
  });

  it('期望可以设置只读', () => {
    cy.mount(Demo)
      .iTimeRangePicker_readonly(selector, false)
      .get('@vue')
      .invoke('setProps', { readonly: true })
      .iTimeRangePicker_readonly(selector);
  });

  it('期望可以清空', () => {
    cy.mount(Demo)
      .get('@vue')
      .invoke('setProps', { clearable: true })
      .iTimeRangePicker_setValue(selector, ['02:13:24', '02:13:25'])
      .iTimeRangePicker_haveValue(selector, ['02:13:24', '02:13:25'])
      .iTimeRangePicker_clear(selector)
      .iTimeRangePicker_haveValue(selector, ['', '']);
  });
});
