
import { defineComponent } from 'vue';

describe('component Alert', () => {

  const Demo = defineComponent({
    template: `
      <IxAlert v-bind="$attrs" data-cy="demo-alert" />
    `,
  });
  const selector = '[data-cy="demo-alert"]';

  it('期望可以正常显示信息', () => {
    cy.mount(Demo, {
      props: {
        title: '假面骑士',
        description: '铠甲勇士',
      },
    })
    .iAlert_haveText(selector, '假面骑士')
    .iAlert_haveDescription(selector, '铠甲勇士');
  });

  it('期望可以关闭', () => {
    cy.mount(Demo, {
      props: {
        title: '假面骑士亚极陀',
        closable: false,
      },
    })
    .iAlert_closable(selector, false)
    .get('@vue')
    .invoke('setProps', { closable: true })
    .iAlert_closable(selector)
    .iAlert_close(selector);
  });

  it('期望可以分页展示内容', () => {
    cy.mount(Demo, {
      props: {
        title: ['炎龙侠', '风鹰侠', '黑犀侠', '地虎侠', '雪獒侠'],
        pagination: true,
      },
    })
    .iAlert_haveText(selector, '炎龙侠')
    .iAlert_getPagination(selector)
    .then($pagination => {
      cy.iPagination_haveTotal($pagination, 5)
        .iPagination_nextClick($pagination)
        .iAlert_haveText(selector, '风鹰侠');
    })
    .iAlert_getPagination(selector)
    .then($pagination => {
      cy.iPagination_prevClick($pagination)
        .iAlert_haveText(selector, '炎龙侠');
    })
  });
});
