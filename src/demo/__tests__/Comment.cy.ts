
import { defineComponent } from 'vue';

describe('component Comment', () => {

  const Demo = defineComponent({
    template: `
      <IxComment v-bind="$attrs" data-cy="demo-comment" />
    `,
  });
  const selector = '[data-cy="demo-comment"]';

  it('期望内容显示正确', () => {
    cy.mount(Demo, { props: { author: 'Brenner', content: 'Good Good Study' } })
      .iComment_haveAuthor(selector, 'Brenner')
      .iComment_haveContent(selector, 'Good Good Study')
      .get('@vue')
      .invoke('setProps', { author: 'Tara', content: 'Day Day Up' })
      .iComment_haveAuthor(selector, 'Tara')
      .iComment_haveContent(selector, 'Day Day Up');
  });
});
