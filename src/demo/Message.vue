<template>
  <IxSpace>
    <IxButton data-cy="trigger-btn" @click="info('Info message')">Info</IxButton>
    <IxButton data-cy="trigger-btn" @click="success('Success message')">Success</IxButton>
  </IxSpace>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useMessage } from '@idux/components/message';

export default defineComponent({
  setup() {
    const { info, success } = useMessage();
    return { info, success };
  },
});
</script>
