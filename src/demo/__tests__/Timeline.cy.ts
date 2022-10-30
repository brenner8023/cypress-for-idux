import { defineComponent } from 'vue';

describe('component Timeline', () => {

  const Demo = defineComponent({
    template: `
      <IxTimeline v-bind="$attrs" data-cy="demo-timeline">
        <IxTimelineItem label="2019" color="red">red color</IxTimelineItem>
        <IxTimelineItem label="2020" color="yellow">yellow color</IxTimelineItem>
        <IxTimelineItem label="2021" color="black">black color</IxTimelineItem>
        <IxTimelineItem label="2022">default color</IxTimelineItem>
      </IxTimeline>`,
  });

  const selector = '[data-cy="demo-timeline"]';

  it('期望内容显示正常', () => {
    cy.mount(Demo)
      .iTimeline_haveText(selector, 0, 'red color')
      .iTimeline_haveText(selector, 3, 'default color')
      .iTimeline_isPending(selector, false)
      .get('@vue')
      .invoke('setProps', { pending: true })
      .iTimeline_isPending(selector)
      .iTimeline_haveText(selector, 0, '2019')
      .iTimeline_haveText(selector, 3, '2022');
  });
});
