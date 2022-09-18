
import Pagination from '../Pagination.vue';

describe('component Pagination', () => {
  it('期望展示总个数', () => {
    cy.mount(Pagination, { props: { total: 100 } })
      .iPagination_haveTotal('demo-pagination', 100);
  });

  it('期望展示当前第6页', () => {
    cy.mount(Pagination, { props: { pageIndex: 6, total: 100 } })
      .iPagination_activePage('demo-pagination', 6);
  });

  it('期望展示每页最大数为20', () => {
    cy.mount(Pagination, {
      props: {
        pageSize: 20,
        total: 100,
        showSizeChanger: true,
        onChange: cy.spy().as('change'),
      }
    })
      .iPagination_activeSize('demo-pagination', 20)
      .iPagination_changeSize('demo-pagination', 50)
      .get('@change')
      .should('be.calledOnceWith', 1, 50);
  });

  it('期望分页器被禁用', () => {
    cy.mount(Pagination, { props: { total: 100 } })
      .iPagination_disabled('demo-pagination', false)
      .get('@vue')
      .invoke('setProps', { disabled: true })
      .iPagination_disabled('demo-pagination');
  });

  it('期望跳下一页触发change事件', () => {
    cy.mount(Pagination, {
      props: {
        total: 100,
        onChange: cy.spy().as('change'),
      },
    })
      .iPagination_prevDisabled('demo-pagination', true)
      .iPagination_nextClick('demo-pagination')
      .get('@change')
      .should('be.calledOnceWith', 2, 10);
  });

  it('期望跳上一页触发change事件', () => {
    cy.mount(Pagination, {
      props: {
        pageIndex: 2,
        total: 100,
        showQuickJumper: true,
        onChange: cy.spy().as('change'),
      },
    })
      .iPagination_prevDisabled('demo-pagination', false)
      .iPagination_prevClick('demo-pagination')
      .get('@change')
      .should('be.calledOnceWith', 1, 10);
  });

  it('期望跳到第30页触发change事件', () => {
    cy.mount(Pagination, {
      props: {
        total: 100,
        showQuickJumper: true,
        onChange: cy.spy().as('change'),
      },
    })
      .iPagination_jumpTo('demo-pagination', 4)
      .get('@change')
      .should('be.calledOnceWith', 4, 10);
  });

  it('期望跳到第5页触发change事件', () => {
    cy.mount(Pagination, {
      props: {
        total: 100,
        showQuickJumper: true,
        onChange: cy.spy().as('change'),
      },
    })
      .iPagination_itemClick('demo-pagination', 5)
      .get('@change')
      .should('be.calledOnceWith', 5, 10);
  });
});
