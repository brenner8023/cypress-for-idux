import Demo from '../Select.vue';

describe('component select', () => {

  const select = '[data-cy="demo-select"]';
  const dataSource = [
    { key: 'tom1', label: 'Tom' },
    { key: 'jerry2', label: 'Jerry' },
    { key: 'speike3', label: 'Speike' },
  ];

  it('期望下拉框可以选中数据', () => {
    cy.mount(Demo, { props: { dataSource } })
      .iSelect_click(select)
      .iSelect_haveItems(3)
      .iSelect_haveItemLabel('Jerry')
      .iSelect_clickOption('Speike')
      .iSelect_selectedText(select, 'Speike')
      .get('@vue')
      .invoke('setProps', { multiple: true })
      .iSelect_click(select)
      .iSelect_clickOption('Tom')
      .iSelect_clickOption('Jerry')
      .iSelect_clickOption('Speike')
      .iSelect_selectedText(select, ['Tom', 'Jerry']);
  });

  it('期望下拉框可以禁用', () => {
    cy.mount(Demo, { props: { dataSource } })
      .iSelect_disabled(select, false)
      .get('@vue')
      .invoke('setProps', { disabled: true })
      .iSelect_disabled(select)
  });

  it('期望下拉框可以输入文本', () => {
    cy.mount(Demo, { props: { dataSource, searchable: true } })
      .iSelect_click(select)
      .iSelect_typeText(select, 'Jer')
      .get('@vue')
      .invoke('setProps', { searchable: 'overlay' })
      .iSelect_click(select)
      .iSelect_overlaySearch(select, 'Spe');
  });

  it('期望placeholder可以使用', () => {
    cy.mount(Demo, { props: { dataSource, placeholder: '123' } })
      .iSelect_havePlaceholder(select, '123')
      .get('@vue')
      .invoke('setProps', { placeholder: '456' })
      .iSelect_havePlaceholder(select, '456');
  });

  it('期望可以删除指定已选项', () => {
    cy.mount(Demo, { props: { dataSource, multiple: true } })
      .iSelect_click(select)
      .iSelect_clickOption('Tom')
      .iSelect_clickOption('Jerry')
      .clickoutside()
      .iSelect_removeSelection(select, 'Tom')
      .iSelect_selectedText(select, 'Jerry');
  });
});
