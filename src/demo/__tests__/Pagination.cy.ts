
import Demo from '../Pagination.vue';

describe('component Pagination', () => {

  const selector = '[data-cy="demo-pagination"]';

  it('期望展示总个数', () => {
    cy.mount(Demo, { props: { total: 100 } })
      .iPagination_haveTotal(selector, 100);
  });

  it('期望展示当前第6页', () => {
    cy.mount(Demo, { props: { pageIndex: 6, total: 100 } })
      .iPagination_activePage(selector, 6);
  });

  it('期望展示每页最大数为20', () => {
    cy.mount(Demo, {
      props: {
        pageSize: 20,
        total: 100,
        showSizeChanger: true,
        onChange: cy.spy().as('change'),
      }
    })
      .iPagination_activeSize(selector, 20)
      .iPagination_changeSize(selector, 50)
      .get('@change')
      .should('be.calledOnceWith', 1, 50);
  });

  it('期望分页器被禁用', () => {
    cy.mount(Demo, { props: { total: 100 } })
      .iPagination_disabled(selector, false)
      .get('@vue')
      .invoke('setProps', { disabled: true })
      .iPagination_disabled(selector);
  });

  it('期望跳下一页触发change事件', () => {
    cy.mount(Demo, {
      props: {
        total: 100,
        onChange: cy.spy().as('change'),
      },
    })
      .iPagination_prevDisabled(selector, true)
      .iPagination_nextClick(selector)
      .get('@change')
      .should('be.calledOnceWith', 2, 10);
  });

  it('期望跳上一页触发change事件', () => {
    cy.mount(Demo, {
      props: {
        pageIndex: 2,
        total: 100,
        showQuickJumper: true,
        onChange: cy.spy().as('change'),
      },
    })
      .iPagination_prevDisabled(selector, false)
      .iPagination_prevClick(selector)
      .get('@change')
      .should('be.calledOnceWith', 1, 10);
  });

  it('期望跳到第30页触发change事件', () => {
    cy.mount(Demo, {
      props: {
        total: 100,
        showQuickJumper: true,
        onChange: cy.spy().as('change'),
      },
    })
      .iPagination_inputPage(selector, 4)
      .get('@change')
      .should('be.calledOnceWith', 4, 10);
  });

  it('期望跳到第5页触发change事件', () => {
    cy.mount(Demo, {
      props: {
        total: 100,
        showQuickJumper: true,
        onChange: cy.spy().as('change'),
      },
    })
      .iPagination_itemClick(selector, 5)
      .get('@change')
      .should('be.calledOnceWith', 5, 10);
  });
});
