
import Cascader from '../Cascader.vue';

describe('component Cascader', () => {
  const dataSource = [
    {
      label: 'Parent0',
      key: '0',
      children: [
        {
          label: 'c0-0',
          key: '0-0',
        },
        {
          label: 'c0-1',
          key: '0-1',
          children: [{
            label: 'c0-1-0',
            key: '0-1-0',
          }],
        },
      ],
    },
    {
      label: 'Parent1',
      key: '1',
      children: [
        {
          label: 'c1-0',
          key: '1-0',
        },
        {
          label: 'c1-1',
          key: '1-1',
        },
      ],
    },
    {
      label: 'Parent2',
      key: '2',
    },
  ];
  const cascader = '[data-cy="demo-cascader"]';

  it('期望级联组件选择功能正常', () => {
    cy.mount(Cascader, { props: { dataSource } })
      .iCascader_isEmpty(cascader)
      .iCascader_clickItem(cascader, ['Parent0', 'c0-0'])
      .iCascader_haveSelectedText(cascader, 'Parent0/c0-0')
      .iCascader_isEmpty(cascader, false);
  });

  it('期望级联组件可以清空', () => {
    cy.mount(Cascader, { props: { dataSource, clearable: true } })
      .iCascader_clearable(cascader, false)
      .iCascader_clickItem(cascader, ['Parent0', 'c0-0'])
      .iCascader_clearable(cascader)
      .iCascader_isEmpty(cascader, false)
      .iCascader_clear(cascader)
      .iCascader_isEmpty(cascader)
      .get('@vue')
      .invoke('setProps', { clearable: false })
      .iCascader_clearable(cascader, false);
  });

  it('期望级联组件禁用', () => {
    cy.mount(Cascader, { props: { disabled: true } })
      .iCascader_disabled(cascader)
      .get('@vue')
      .invoke('setProps', { disabled: false })
      .iCascader_disabled(cascader, false);
  });

  it('期望级联组件placeholder显示正常', () => {
    cy.mount(Cascader, { props: { dataSource, placeholder: 'mio' } })
      .iCascader_havePlaceholder(cascader, 'mio')
      .get('@vue')
      .invoke('setProps', { placeholder: '电次君' })
      .iCascader_havePlaceholder(cascader, '电次君');
  });

  it('期望级联组件可以进行搜索', () => {
    cy.mount(Cascader, { props: { dataSource, searchable: true } })
      .iCascader_searchable(cascader)
      .iCascader_search(cascader, 'Parent1')
      .iCascader_haveSelectedText(cascader, 'Parent1/c1-0')
      .iCascader_search(cascader, 'Parent1', 1)
      .get('@vue')
      .invoke('setProps', { searchable: false })
      .iCascader_searchable(cascader, false)
  });

  it('期望级联组件只读', () => {
    cy.mount(Cascader, { props: { dataSource, readonly: true } })
      .iCascader_readonly(cascader)
      .get('@vue')
      .invoke('setProps', { readonly: false })
      .iCascader_readonly(cascader, false)
  });
});
