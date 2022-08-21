import Header from '../Header.vue';

describe('component Header', () => {
  it('期望展示文本', () => {
    cy.mount(Header, {
      props: {
        title: '123',
        subTitle: '456',
        description: '789',
      },
    })
      .iHeader_haveTitle('demo-header', '123')
      .iHeader_haveSubtitle('demo-header', '456')
      .iHeader_haveDescription('demo-header', '789')
      .get('@vue')
      .invoke('setProps', {
        title: '123a',
        subTitle: '456b',
        description: '789c',
      })
      .iHeader_haveTitle('demo-header', '123a')
      .iHeader_haveSubtitle('demo-header', '456b')
      .iHeader_haveDescription('demo-header', '789c')
  });

  it('期望禁用', () => {
    cy.mount(Header, {
      props: {
        title: '123',
        disabled: true,
      },
    })
      .iHeader_disabled('demo-header')
      .get('@vue')
      .invoke('setProps', { disabled: false })
      .iHeader_disabled('demo-header', false)
  });
});
