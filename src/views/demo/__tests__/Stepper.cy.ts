import Stepper from '../Stepper.vue';

describe('component Stepper', () => {
  const stepper = '[data-cy="demo-stepper"]';

  it('期望激活的标题是title3', () => {
    cy.mount(Stepper)
      .iStepper_haveActiveTitle(stepper, 'title3')
      .iStepper_isVertical(stepper, false)
      .iStepper_activeItem(stepper, 2);
  });

  it('期望步骤可点击', () => {
    cy.mount(Stepper, { props: { clickable: true } })
      .iStepper_haveActiveTitle(stepper, 'title3')
      .iStepper_clickItemByIndex(stepper, 0)
      .iStepper_haveActiveTitle(stepper, 'title1')
      .iStepper_clickItemByTitle(stepper, 'title2')
      .iStepper_haveActiveTitle(stepper, 'title2');
  });

  it('期望有3个步骤', () => {
    cy.mount(Stepper)
      .iStepper_havelength(stepper, 3);
  });

  it('期望步骤2标题为title2', () => {
    cy.mount(Stepper)
      .iStepper_haveTitle(stepper, 0, 'title1')
      .iStepper_haveTitle(stepper, 1, 'title2')
      .iStepper_haveDescription(stepper, 0, 'desc1')
      .iStepper_haveDescription(stepper, 1, 'desc2');
  });

  it('期望步骤2状态为error', () => {
    cy.mount(Stepper)
      .iStepper_haveItemStatus(stepper, 0, 'finish')
      .iStepper_haveItemStatus(stepper, 1, 'error');
  });

  it('期望第二个步骤禁用', () => {
    cy.mount(Stepper, { props: { clickable: true } })
      .iStepper_itemDisabled(stepper, 1)
      .iStepper_clickItemByIndex(stepper, 1)
      .iStepper_haveActiveTitle(stepper, 'title3');
  });
});
