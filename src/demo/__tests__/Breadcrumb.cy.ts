import Breadcrumb from '../Breadcrumb.vue';

describe('component Breadcrumb', () => {
  it('期望展示面包屑文案', () => {
    cy.mount(Breadcrumb)
      .iBreadcrumb_haveText('demo-breadcrumb-1', ['高架桥', '路口', '旅途', '路灯']);
  });

  it('期望展示面包屑分隔符', () => {
    cy.mount(Breadcrumb, { props: { separator: '$' } })
      .iBreadcrumb_haveSeparator('demo-breadcrumb-1', '$')
      .get('@vue')
      .invoke('setProps', { separator: '#' })
      .iBreadcrumb_haveSeparator('demo-breadcrumb-1', '#');
  });

  it('期望展示指定面包屑文案', () => {
    cy.mount(Breadcrumb)
      .iBreadcrumbItem_haveText('demo-item-1', '高架桥')
      .iBreadcrumbItem_haveText('demo-item-2', '路口')
      .iBreadcrumbItem_haveText('demo-item-3', '旅途');
  });

  it('期望展示指定面包屑分隔符', () => {
    cy.mount(Breadcrumb)
      .iBreadcrumbItem_haveSeparator('demo-item-1', '>')
      .iBreadcrumbItem_haveSeparator('demo-item-2', '~')
      .iBreadcrumbItem_haveSeparator('demo-item-3', '→');
  });
});
