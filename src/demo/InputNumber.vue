<template>
  <IxInputNumber
    v-model:value="innerValue"
    v-bind="$attrs"
    data-cy="demo-input-number" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const innerValue = ref(123);
</script>
