
import { defineComponent } from 'vue';

describe('component Modal', () => {

  const Demo = defineComponent({
    template: `
      <IxModal v-bind="$attrs" data-cy="demo-modal">
        <p>Some contents...</p>
      </IxModal>
    `,
  });

  it('期望数据显示正常', () => {
    cy.mount(Demo, { props: {
      header: '123', title: '456', type: 'info', onOk: cy.spy().as('ok'),
    } })
      .iModal_visible(false)
      .get('@vue')
      .invoke('setProps', { visible: true })
      .iModal_visible(true)
      .iModal_haveHeader('123')
      .iModal_haveTitle('456')
      .get('@ok')
      .should('not.have.been.called')
      .iModal_clickButton('我知道了')
      .get('@ok')
      .should('have.been.calledOnce')
      .iModal_haveMask()
      .get('@vue')
      .invoke('setProps', { mask: false })
      .iModal_haveMask(false);
  });

  it('期望可以通过点击触发事件', () => {
    cy.mount(Demo, { props: {
      visible: true,
      onOk: cy.spy().as('ok'),
      onCancel: cy.spy().as('cancel'),
      onClose: cy.spy().as('close'),
    } })
      .get('@cancel')
      .should('not.have.been.called')
      .iModal_clickButton('取消')
      .get('@cancel')
      .should('have.been.calledOnce')
      .get('@close')
      .should('not.have.been.called')
      .iModal_clickToHide()
      .get('@close')
      .should('have.been.calledOnce')
      .get('@ok')
      .should('not.have.been.called')
      .iModal_clickButton('确定')
      .get('@ok')
      .should('have.been.calledOnce');
  });

  it('期望可以通过closable控制弹窗是否显示关闭图标', () => {
    cy.mount(Demo, { props: { visible: true, header: '678' } })
      .iModal_closable()
      .get('@vue')
      .invoke('setProps', { closable: false })
      .iModal_closable(false);
  });
});
