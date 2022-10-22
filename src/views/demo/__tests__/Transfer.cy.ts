
import { defineComponent } from 'vue';

describe('component TimePicker', () => {

  const Demo = defineComponent({
    template: `
      <IxTransfer v-bind="$attrs" data-cy="demo-transfer" />
    `
  });
  const selector = '[data-cy="demo-transfer"]';
  const dataSource = [
    {
      key: 'id1',
      value: 'val1',
      label: 'Option1',
      disabled: false,
    },
    {
      key: 'id2',
      value: 'val2',
      label: 'Option2',
      disabled: true,
    },
    {
      key: 'id3',
      value: 'val3',
      label: 'Option3',
      disabled: false,
    },
    {
      key: 'id4',
      value: 'val4',
      label: 'Option4',
      disabled: true,
    },
  ]

  it('期望可以选中数据', () => {
    cy.mount(Demo, {
      props: { dataSource },
    })
    .iTransfer_haveLength(selector, 4, 'source')
    .iTransfer_haveLabel(selector, {
      index: 0,
      label: 'Option1',
      type: 'source',
    })
    .iTransfer_isEmpty(selector, 'target')
    .iTransfer_selectRecord(selector, 0)
    .iTransfer_haveLength(selector, 3, 'source')
    .iTransfer_haveLabel(selector, {
      index: 0,
      label: 'Option2',
      type: 'source',
    })
    .iTransfer_haveLength(selector, 1, 'target')
    .iTransfer_haveLabel(selector, {
      index: 0,
      label: 'Option1',
      type: 'target',
    });
  });

  it('期望immediate模式正常选择数据', () => {
    cy.mount(Demo, {
      props: { dataSource, mode: 'immediate' },
    })
    .iTransfer_haveLength(selector, 4, 'source')
    .iTransfer_haveLabel(selector, {
      index: 0,
      label: 'Option1',
      type: 'source',
    })
    .iTransfer_isEmpty(selector, 'target')
    .iTransfer_selectRecord(selector, 0)
    .iTransfer_haveLength(selector, 4, 'source')
    .iTransfer_haveLength(selector, 1, 'target')
    .iTransfer_haveLabel(selector, {
      index: 0,
      label: 'Option1',
      type: 'target',
    });
  });

  it('期望第2、4项是禁用的', () => {
    cy.mount(Demo, {
      props: { dataSource },
    })
    .iTransfer_itemDisabled(selector, 1, 'source')
    .iTransfer_itemDisabled(selector, 3, 'source');
  });

  it('期望可以清空数据', () => {
    cy.mount(Demo, {
      props: { dataSource },
    })
    .iTransfer_selectRecord(selector, 0)
    .iTransfer_haveLength(selector, 1, 'target')
    .iTransfer_clear(selector)
    .iTransfer_isEmpty(selector, 'target');
  });

  it('期望可以选择全部待选，移除全部已选', () => {
    cy.mount(Demo, {
      props: { dataSource },
    })
    .iTransfer_checkAllSource(selector)
    .iTransfer_clickMultiAdd(selector)
    .iTransfer_haveLength(selector, 2, 'source')
    .iTransfer_haveLength(selector, 2, 'target')
    .iTransfer_checkAllTarget(selector)
    .iTransfer_clickMultiRemove(selector)
    .iTransfer_haveLength(selector, 4, 'source')
    .iTransfer_isEmpty(selector, 'target');
  });

  it('期望可以进行搜索', () => {
    const searchFn = (_: boolean, item: any, searchValue: string | undefined) => {
      return !searchValue || item.label.includes(searchValue);
    };
    cy.mount(Demo, {
      props: { dataSource, searchable: true, searchFn },
    })
    .iTransfer_haveLength(selector, 4, 'source')
    .iTransfer_search(selector, 'source', 'mio')
    .iTransfer_isEmpty(selector, 'source')
    .iTransfer_search(selector, 'source', 'Option2')
    .iTransfer_haveLength(selector, 1, 'source')
    .iTransfer_haveLabel(selector, {
      index: 0,
      label: 'Option2',
      type: 'source',
    });
  });

  // @todo
  // it('期望可以分页', () => {

  //   const sourcePage = cy.iTransfer_getPagination('source');

  //   cy.mount(Demo, {
  //     props: { dataSource, pagination: { pageSize: [2, 1], } },
  //   })
  //   .iPagination_haveTotal(sourcePage, 2)
  // });
});
