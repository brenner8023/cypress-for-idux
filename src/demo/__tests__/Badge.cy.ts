import Badge from '../Badge.vue';

describe('component Badge', () => {
  const selector = '[data-cy="demo-badge"]';

  it('期望展示数量', () => {
    cy.mount(Badge, { props: { count: 98 } })
      .iBadge_haveText(selector, 98);
  });

  it('期望超过999时，显示999+', () => {
    cy.mount(Badge, { props: { count: 998, overflowCount: 999 } })
      .iBadge_haveText(selector, 998)
      .get('@vue')
      .invoke('setProps', { count: 1001 })
      .iBadge_haveText(selector, '999+');
  });

  it('期望根据showZero判断0是否显示', () => {
    cy.mount(Badge, { props: { count: 0, showZero: true } })
      .iBadge_haveText(selector, 0)
      .get('@vue')
      .invoke('setProps', { showZero: false })
      .iBadge_haveText(selector, '');
  });
});
