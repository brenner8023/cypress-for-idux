
import { defineComponent } from 'vue';

describe('component TreeSelect', () => {

  const Demo = defineComponent({
    template: `
      <IxTreeSelect v-bind="$attrs" data-cy="demo-tree-select" />
    `
  });
  const selector = '[data-cy="demo-tree-select"]';
  const dataSource = [
    {
      label: 'Node 0',
      key: '0',
      children: [
        {
          label: 'Node 0-0',
          key: '0-0',
          children: [
            {
              label: 'Node 0-0-0',
              key: '0-0-0',
            },
            {
              label: 'Node 0-0-1',
              key: '0-0-1',
            },
          ],
        },
        {
          label: 'Node 0-1',
          key: '0-1',
          children: [
            { label: 'Node 0-1-0', key: '0-1-0' },
            { label: 'Node 0-1-1', key: '0-1-1' },
          ],
        },
      ],
    },
  ];

  it('期望可以选择数据', () => {
    cy.mount(Demo, { props: { dataSource } })
      .iTreeSelect_selectNode(selector, ['Node 0', 'Node 0-1', 'Node 0-1-0'])
      .iTreeSelect_haveValue(selector, 'Node 0-1-0')
      .iTreeSelect_selectNode(selector, ['Node 0', 'Node 0-0', 'Node 0-0-1'])
      .iTreeSelect_haveValue(selector, 'Node 0-0-1')
      .get('@vue')
      .invoke('setProps', { multiple: true })
      .iTreeSelect_selectNode(selector, ['Node 0', 'Node 0-1', 'Node 0-1-1'])
      .iTreeSelect_haveValue(selector, ['Node 0-0-1', 'Node 0-1-1']);
  });

  it('期望可以禁用', () => {
    cy.mount(Demo, { props: { dataSource } })
      .iTreeSelect_disabled(selector, false)
      .get('@vue')
      .invoke('setProps', { disabled: true })
      .iTreeSelect_disabled(selector);
  });

  it('期望可以移除选中项', () => {
    cy.mount(Demo, { props: { dataSource, multiple: true } })
      .iTreeSelect_selectNode(selector, ['Node 0', 'Node 0-0', 'Node 0-0-1'])
      .iTreeSelect_selectNode(selector, ['Node 0', 'Node 0-1', 'Node 0-1-1'])
      .iTreeSelect_haveValue(selector, ['Node 0-0-1', 'Node 0-1-1'])
      .iTreeSelect_removeSelection(selector, 'Node 0-0-1')
      .iTreeSelect_haveValue(selector, ['Node 0-1-1']);
  });

  it('期望可以搜索', () => {
    cy.mount(Demo, { props: { dataSource, searchable: true, multiple: true } })
      .iTreeSelect_search(selector, '0-1-1')
      .iTreeSelect_selectNode(selector, ['Node 0-1-1'])
      .iTreeSelect_haveValue(selector, 'Node 0-1-1');
  });

  it('期望可以清空已选', () => {
    cy.mount(Demo, { props: { dataSource, multiple: true, clearable: true } })
      .iTreeSelect_selectNode(selector, ['Node 0', 'Node 0-0', 'Node 0-0-1'])
      .iTreeSelect_selectNode(selector, ['Node 0', 'Node 0-1', 'Node 0-1-1'])
      .iTreeSelect_haveValue(selector, ['Node 0-0-1', 'Node 0-1-1'])
      .iTreeSelect_clear(selector)
      .iTreeSelect_haveValue(selector, '');
  });

  it('期望可以设置placeholder', () => {
    cy.mount(Demo, { props: { dataSource, placeholder: 'please type' } })
      .iTreeSelect_havePlaceholder(selector, 'please type')
      .get('@vue')
      .invoke('setProps', { placeholder: 'please input' })
      .iTreeSelect_havePlaceholder(selector, 'please input');
  });
});
