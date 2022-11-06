
import { defineComponent } from 'vue';

describe('component Popover', () => {

  const Demo = defineComponent({
    template: `
      <IxStatistic v-bind="$attrs" data-cy="demo-statistic" />
    `,
  });
  const selector = '[data-cy="demo-statistic"]';

  it('期望内容显示正常', () => {
    cy.mount(Demo, { props: { title: 'Online', value: 54321.678, precision: 2 } })
      .iStatistic_haveTitle(selector, 'Online')
      .iStatistic_haveValue(selector, '54321')
      .iStatistic_haveDecimal(selector, '.67');
  });
});
