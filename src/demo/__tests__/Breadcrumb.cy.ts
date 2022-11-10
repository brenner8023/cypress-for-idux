import Breadcrumb from '../Breadcrumb.vue';

describe('component Breadcrumb', () => {
  const selector = '[data-cy="demo-breadcrumb-1"]';
  const item1 = '[data-cy="demo-item-1"]';
  const item2 = '[data-cy="demo-item-2"]';
  const item3 = '[data-cy="demo-item-3"]';

  it('期望展示面包屑文案', () => {
    cy.mount(Breadcrumb)
      .iBreadcrumb_haveText(selector, ['高架桥', '路口', '旅途', '路灯']);
  });

  it('期望展示面包屑分隔符', () => {
    cy.mount(Breadcrumb, { props: { separator: '$' } })
      .iBreadcrumb_haveSeparator(selector, '$')
      .get('@vue')
      .invoke('setProps', { separator: '#' })
      .iBreadcrumb_haveSeparator(selector, '#');
  });

  it('期望展示指定面包屑文案', () => {
    cy.mount(Breadcrumb)
      .iBreadcrumbItem_haveText(item1, '高架桥')
      .iBreadcrumbItem_haveText(item2, '路口')
      .iBreadcrumbItem_haveText(item3, '旅途');
  });

  it('期望展示指定面包屑分隔符', () => {
    cy.mount(Breadcrumb)
      .iBreadcrumbItem_haveSeparator(item1, '>')
      .iBreadcrumbItem_haveSeparator(item2, '~')
      .iBreadcrumbItem_haveSeparator(item3, '→');
  });
});
