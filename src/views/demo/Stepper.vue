<template>
  <IxStepper
    v-model:activeKey="activeKey"
    v-bind="$attrs"
    data-cy="demo-stepper">
    <IxStepperItem title="title1" description="desc1" key="a"></IxStepperItem>
    <IxStepperItem
      title="title2"
      description="desc2"
      key="b"
      status="error"
      disabled></IxStepperItem>
    <IxStepperItem title="title3" description="desc3" key="c"></IxStepperItem>
  </IxStepper>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeKey = ref('c');
</script>
