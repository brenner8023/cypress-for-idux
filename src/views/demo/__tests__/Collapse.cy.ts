
import Demo from '../Collapse.vue';

describe('component Collapse', () => {

  const selector = '[data-cy="demo-collapse"]';

  it('期望折叠面板内容显示正常', () => {
    cy.mount(Demo)
      .iCollapse_haveHeader(selector, 0, 'header1')
      .iCollapse_haveHeader(selector, 1, 'header2')
      .iCollapse_haveContent(selector, 1, 'content2')
      .iCollapse_haveContent(selector, 2, 'content3')
  });
  
  it('期望可以打开折叠面板', () => {
    cy.mount(Demo)
      .iCollapse_closed(selector, 1)
      .iCollapse_click(selector, 1)
      .iCollapse_active(selector, 1);
  });

  it('期望折叠面板可以禁用', () => {
    cy.mount(Demo)
      .iCollapse_disabled(selector, 1, false)
      .iCollapse_disabled(selector, 2);
  });
});
