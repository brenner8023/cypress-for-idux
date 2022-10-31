
import { defineComponent } from 'vue';

describe('component Tab', () => {

  const Demo = defineComponent({
    template: `
      <IxTabs v-bind="$attrs" data-cy="demo-tab" style="width: 246px">
        <IxTab key="tab1" title="Title1"> Content1 </IxTab>
        <IxTab key="tab2" title="Title2"> Content2 </IxTab>
        <IxTab key="tab3" disabled title="Title3"> Content3 </IxTab>
        <IxTab key="tab4" title="Title4"> Content4 </IxTab>
        <IxTab key="tab5" title="Title5"> Content5 </IxTab>
      </IxTabs>
    `
  });
  const selector = '[data-cy="demo-tab"]';

  it('期望数据显示正常', () => {
    cy.mount(Demo)
      .iTab_activeLabel(selector, 'Title1')
      .iTab_haveLength(selector, 5)
      .iTab_itemDiabled(selector, 2);
  });

  it('期望通过点击切换tab', () => {
    cy.mount(Demo)
      .iTab_activeLabel(selector, 'Title1')
      .iTab_clickItem(selector, 1)
      .iTab_activeLabel(selector, 'Title2')
      .iTab_clickLabel(selector, 'Title1')
      .iTab_activeLabel(selector, 'Title1');
  });

  it('期望通过点击进行左移和右移', () => {
    cy.mount(Demo)
      .get(selector)
      .contains('Title4')
      .as('label4')
      .should('not.be.visible')
      .iTab_clickNextIcon(selector)
      .get('@label4')
      .should('be.visible')
      .get(selector)
      .contains('Title1')
      .as('label1')
      .should('not.be.visible')
      .iTab_clickPrevIcon(selector)
      .get('@label1')
      .should('be.visible');
  });
});
