<template>
  <IxInput
    v-model:value="innerValue"
    v-bind="$attrs"
    data-cy="demo-input" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const innerValue = ref('123');
</script>
