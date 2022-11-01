
import { defineComponent } from 'vue';

describe('component Drawer', () => {

  const Demo = defineComponent({
    template: `
      <IxDrawer v-bind="$attrs">
        <p>Some contents...</p>
      </IxDrawer>
    `,
  });

  it('期望通过visible控制抽屉的显示', () => {
    cy.mount(Demo, { props: { visible: false } })
      .iDrawer_visible(false)
      .get('@vue')
      .invoke('setProps', { visible: true })
      .iDrawer_visible(true);
  });

  it('期望点击关闭图标触发update:visible事件', () => {
    cy.mount(Demo, {
      props: { visible: true, 'onUpdate:visible': cy.spy().as('updateVisible') },
    })
    .get('@updateVisible')
    .should('not.have.been.called')
    .iDrawer_clickCloseIcon()
    .get('@updateVisible')
    .should('have.been.calledOnceWith', false);
  });

  it('期望通过header控制header文本内容', () => {
    cy.mount(Demo, {
      props: { visible: true, header: 'miomio' },
    })
    .iDrawer_haveHeader('miomio')
    .get('@vue')
    .invoke('setProps', { header: 'yjcyjc' })
    .iDrawer_haveHeader('yjcyjc')
  });
});
