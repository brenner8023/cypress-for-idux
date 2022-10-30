import Tag from '../Tag.vue';

describe('component Tag', () => {
  it('期望展示文本', () => {
    cy.mount(Tag, { slots: { default: () => 'abc' } })
      .iTag_haveText('demo-tag', 'abc');
  });

  it('期望展示数字', () => {
    cy.mount(Tag, {
      props: {
        number: 5,
      },
      slots: { default: () => 'abc' },
    })
      .iTag_haveNumber('demo-tag', 5);
  });

  describe('component TagGroup', () => {
    it('点击', () => {
      cy.mount(Tag, {
        props: {
          dataSource: [
            {
              key: 'abc',
              label: 'abc',
            },
            {
              key: 'dnf',
              label: 'dnf',
            },
          ],
          onClick: cy.spy().as('tagClick'),
        },
      })
        .iTagGroup_clickItem('demo-tag-group', 'dnf')
        .get('@tagClick')
        .should('be.calledOnce');
    });

    it('关闭', () => {
      cy.mount(Tag, {
        props: {
          dataSource: [
            {
              key: 'abc',
              label: 'abc',
            },
            {
              key: 'dnf',
              label: 'dnf',
            },
          ],
          closable: true,
          onClose: cy.spy().as('closeTag')
        },
      })
        .iTagGroup_closeItem('demo-tag-group', 'dnf')
        .get('@closeTag')
        .should('be.calledOnce');
    });
  });
});
