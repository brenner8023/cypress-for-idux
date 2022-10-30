import Demo from '../Table.vue';

describe('component Table', () => {

  const selector = '[data-cy="demo-table"]';

  it('期望表格数据展示正常', () => {
    cy.mount(Demo)
      .iTable_haveRows(selector, 10)
      .iTable_haveCols(selector, 5)
      .iTable_getCell(selector, [1, 1])
      .should('contain.text', 'mio1')
      .iTable_getHeaderCell(selector, 1)
      .should('contain.text', 'Name');
  });

  it('期望表格分页功能正常', () => {
    cy.mount(Demo)
      .iTable_getPagination(selector)
      .then(($el) => {
        cy.iPagination_haveTotal($el, 18)
          .iPagination_activePage($el, 1)
          .iPagination_nextClick($el)
          .iPagination_activePage($el, 2)
          .iTable_haveRows(selector, 8)
          .iPagination_prevClick($el)
          .iTable_haveRows(selector, 10)
      });
  });

  it('期望表格可以展开收起某一行', () => {
    cy.mount(Demo)
      .iTable_toggleRowExpand(selector, 0)
      .iTable_getExpandedRow(selector, 0)
      .should('contain.text', 'expanded:mio0');
  });
});
