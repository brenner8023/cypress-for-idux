import Header from '../Header.vue';

describe('component Header', () => {
  const selector = '[data-cy="demo-header"]';

  it('期望展示文本', () => {
    cy.mount(Header, {
      props: {
        title: '123',
        subTitle: '456',
        description: '789',
      },
    })
      .iHeader_haveTitle(selector, '123')
      .iHeader_haveSubtitle(selector, '456')
      .iHeader_haveDescription(selector, '789')
      .get('@vue')
      .invoke('setProps', {
        title: '123a',
        subTitle: '456b',
        description: '789c',
      })
      .iHeader_haveTitle(selector, '123a')
      .iHeader_haveSubtitle(selector, '456b')
      .iHeader_haveDescription(selector, '789c')
  });

  it('期望禁用', () => {
    cy.mount(Header, {
      props: {
        title: '123',
        disabled: true,
      },
    })
      .iHeader_disabled(selector)
      .get('@vue')
      .invoke('setProps', { disabled: false })
      .iHeader_disabled(selector, false)
  });
});
