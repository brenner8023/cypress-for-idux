<template>
  <IxRadio
    v-bind="$attrs"
    data-cy="demo-radio" />
  <div></div>
  <IxRadioGroup
    v-model:value="groupVal"
    v-bind="$attrs"
    data-cy="demo-radio-group" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const groupVal = ref('2');
</script>
