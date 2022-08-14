import Button from '../Button.vue';

describe('component Button', () => {
  it('期望展示文本', () => {
    cy.mount(Button, {
      props: {
        text: '文本'
      },
    })
      .iButton_haveText('demo-btn-text', '文本')
      .get('@vue')
      .invoke('setProps', { text: 'my text' })
      .iButton_haveText('demo-btn-text', 'my text');
  });

  it('期望禁用', () => {
    cy.mount(Button, {
      props: {
        disabled: true,
      },
    })
      .iButton_disabled('demo-btn-disabled')
      .get('@vue')
      .invoke('setProps', { disabled: false })
      .iButton_disabled('demo-btn-disabled', false);
  });

  it('超链接', () => {
    cy.mount(Button, {
      props: {
        href: '//www.baidu.com',
      },
    })
      .iButton_haveHref('demo-btn-link', '//www.baidu.com')
      .get('@vue')
      .invoke('setProps', { href: '//www.sohu.com' })
      .iButton_haveHref('demo-btn-link', '//www.sohu.com');
  });

  it('期望加载中', () => {
    cy.mount(Button, {
      props: {
        loading: true,
      },
    })
      .iButton_isLoading('demo-btn-loading')
      .get('@vue')
      .invoke('setProps', { loading: false })
      .iButton_isLoading('demo-btn-loading', false);
  });

  it('期望点击后emit', () => {
    cy.mount(Button, {
      props: {
        onBtnClick: cy.spy().as('btnClick'),
      },
    })
      .iButton_click('demo-btn-click')
      .get('@btnClick')
      .should('be.calledOnceWith', 12580);
  });
});
