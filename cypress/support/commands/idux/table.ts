
const dropdown = '.ix-dropdown-overlay-container .ix-dropdown:visible';

export default {
  /** 断言行数 */
  iTable_haveRows(selector: string, rows: number) {
    return cy.get(selector)
      .find('.ix-table-tbody .ix-table-row')
      .should('have.length', rows);
  },
  /** 断言列数 */
  iTable_haveCols(selector: string, cols: number) {
    return cy.get(selector)
      .find('.ix-table-thead .ix-table-cell')
      .should('have.length', cols);
  },
  /** 获取指定行 */
  iTable_getRow(selector: string, row: number) {
    return cy.get(selector)
      .find('.ix-table-tbody .ix-table-row')
      .eq(row);
  },
  /**
   * 获取指定的单元格
   * @param selector 表格selector
   * @param cell [row, col]，取第row行第col列
   * @returns {Object}
   */
  iTable_getCell(selector: string, cell: [number, number]) {
    return cy.iTable_getRow(selector, cell[0])
      .find('.ix-table-cell')
      .eq(cell[1]);
  },
  /** 获取指定的头部 */
  iTable_getHeaderCell(selector: string, col: number) {
    return cy.get(selector)
      .find('.ix-table-thead .ix-table-cell')
      .eq(col);
  },
  /** 获取表格的分页器 */
  iTable_getPagination(selector: string) {
    return cy.get(selector).find('.ix-table-pagination');
  },
  /** 点击跳到下一页 */
  iTable_clickToNext(selector: string) {
    return cy.get(selector)
      .find('.ix-table-pagination')
      .find('.ix-pagination-item-button')
      .last()
      .click();
  },
  /** 点击跳到上一页 */
  iTable_clickToPrev(selector: string) {
    return cy.get(selector)
      .find('.ix-table-pagination')
      .find('.ix-pagination-item-button')
      .first()
      .click();
  },
  /** 展开或者收起指定行 */
  iTable_toggleRowExpand(selector: string, row: number) {
    return cy.iTable_getRow(selector, row)
      .find('.ix-table-expandable-trigger')
      .click();
  },
  /** 获取指定的展开行 */
  iTable_getExpandedRow(selector: string, expandedRow: number) {
    return cy.get(selector)
      .find('.ix-table-tbody .ix-table-expanded-row')
      .eq(expandedRow);
  },
  /** 点击排序 */
  iTable_clickToSort(selector: string, col: number) {
    return cy.iTable_getHeaderCell(selector, col)
      .find('.ix-table-sortable-trigger')
      .click();
  },
  /** 点击选中全部或者取消选中 */
  iTable_toggleSelectAll(selector: string) {
    return cy.get(selector)
      .find('.ix-table-thead .ix-table-selectable')
      .click();
  },
  /** 点击选中某行或者取消选中某一行 */
  iTableCheckboxSelect_click(selector: string, row: number) {
    return cy.iTable_getRow(selector, row)
      .find('.ix-checkbox')
      .first()
      .click();
  },
  /** 点击选中某行或者取消选中某一行 */
  iTableRadioSelect_click(selector: string, row: number) {
    return cy.iTable_getRow(selector, row)
      .find('.ix-radio')
      .first()
      .click();
  },
  /** 点击进行筛选 */
  iTable_clickToFilter(selector: string, col: number) {
    return cy.iTable_getHeaderCell(selector, col)
      .find('.ix-table-filterable-trigger')
      .click();
  },
  /** 断言指定行是否被选中 */
  iTable_isRowSelected(selector: string, row: number, isSelected = true) {
    if (isSelected) {
      return cy.iTable_getRow(selector, row)
        .should('have.class', 'ix-table-row-selected');
    }
    return cy.iTable_getRow(selector, row)
      .should('not.have.class', 'ix-table-row-selected');
  },
  /** 筛选点击选项 */
  iTableFilter_ClickItem(label: string) {
    return cy.get(dropdown)
      .contains('.ix-menu-dropdown .ix-menu-item', label)
      .click();
  },
  /** 筛选点击确定 */
  iTableFilter_clickSubmit() {
    return cy.get(dropdown)
      .find('.ix-table-filterable-trigger-footer .ix-button')
      .first()
      .click();
  },
  /** 筛选点击重置 */
  iTableFilter_clickReset() {
    return cy.get(dropdown)
      .find('.ix-table-filterable-trigger-footer .ix-button')
      .last()
      .click();
  },
};
