
const selectOverlay = '.ix-select-overlay-container .ix-select-overlay:visible';

export default {
  /** 断言下拉框选中的内容 */
  iSelect_selectedText(selector: string, text: string[] | string) {
    
    const list = Array.isArray(text) ? text : [text];

    return cy.get(selector)
      .find('.ix-selector-item-label')
      .each(($el, index) => {
        cy.wrap($el)
          .should('contain.text', list[index]);
      });
  },
  /** 输入文本 */
  iSelect_typeText(selector: string, text: string) {
    return cy.get(selector)
      .find('.ix-selector-input-inner')
      .focus()
      .clear()
      .type(text);
  },
  /** 搜索 */
  iSelect_overlaySearch(selector: string, searchText: string) {
    const searchInput = '.ix-select-overlay-search-wrapper input.ix-input-inner';
    return cy.iSelect_click(selector)
      .get(selectOverlay)
      .find(searchInput)
      .clear()
      .type(searchText);
  },
  /** 断言某一项的label */
  iSelect_haveItemLabel(label: string) {
    return cy.get(selectOverlay)
      .find('.ix-select-option')
      .contains('.ix-select-option-label', label);
  },
  /** 点击下拉框 */
  iSelect_click(selector: string) {
    return cy.get(selector)
      .click();
  },
  /** 断言options的个数 */
  iSelect_haveItems(length: number) {
    return cy.get(selectOverlay)
      .find('.ix-select-option')
      .should('have.length', length);
  },
  /** 点击某一项 */
  iSelect_clickOption(label: string) {
    return cy.get(selectOverlay)
      .find('.ix-select-option')
      .contains('.ix-select-option-label', label)
      .click();
  },
  /** 断言是否禁用 */
  iSelect_disabled(selector: string, disabled = true) {
    if (disabled) {
      return cy.get(selector)
        .should('have.class', 'ix-selector-disabled');
    }
    return cy.get(selector)
      .should('not.have.class', 'ix-selector-disabled');
  },
  /** 删除某一个已选项 */
  iSelect_removeSelection(selector: string, label: string) {
    return cy.get(selector)
      .find('.ix-selector-content')
      .contains('.ix-selector-item-label', label)
      .next('.ix-selector-item-remove')
      .click();
  },
  /** 断言placeholder */
  iSelect_havePlaceholder(selector: string, placeholder: string) {
    return cy.get(selector)
      .find('.ix-selector-content')
      .find('.ix-selector-placeholder')
      .should('contain.text', placeholder);
  },
};
