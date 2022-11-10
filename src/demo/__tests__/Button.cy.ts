import Button from '../Button.vue';

describe('component Button', () => {

  it('期望展示文本', () => {
    const selector = '[data-cy="demo-btn-text"]';

    cy.mount(Button, {
      props: {
        text: '文本'
      },
    })
      .iButton_haveText(selector, '文本')
      .get('@vue')
      .invoke('setProps', { text: 'my text' })
      .iButton_haveText(selector, 'my text');
  });

  it('期望禁用', () => {
    const selector = '[data-cy="demo-btn-disabled"]';

    cy.mount(Button, {
      props: {
        disabled: true,
      },
    })
      .iButton_disabled(selector)
      .get('@vue')
      .invoke('setProps', { disabled: false })
      .iButton_disabled(selector, false);
  });

  it('超链接', () => {
    const selector = '[data-cy="demo-btn-link"]';

    cy.mount(Button, {
      props: {
        href: '//www.baidu.com',
      },
    })
      .iButton_haveHref(selector, '//www.baidu.com')
      .get('@vue')
      .invoke('setProps', { href: '//www.sohu.com' })
      .iButton_haveHref(selector, '//www.sohu.com');
  });

  it('期望加载中', () => {
    const selector = '[data-cy="demo-btn-loading"]';

    cy.mount(Button, {
      props: {
        loading: true,
      },
    })
      .iButton_isLoading(selector)
      .get('@vue')
      .invoke('setProps', { loading: false })
      .iButton_isLoading(selector, false);
  });

  it('期望点击后emit', () => {
    const selector = '[data-cy="demo-btn-click"]';

    cy.mount(Button, {
      props: {
        onBtnClick: cy.spy().as('btnClick'),
      },
    })
      .iButton_click(selector)
      .get('@btnClick')
      .should('be.calledOnceWith', 12580);
  });
});
