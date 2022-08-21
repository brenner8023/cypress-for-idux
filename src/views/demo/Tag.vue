<template>
  <IxTag
    v-bind="$attrs"
    data-cy="demo-tag">
    <slot></slot>
  </IxTag>
  <div></div>
  <IxTagGroup
    v-model:activeKeys="groupVal"
    v-bind="$attrs"
    data-cy="demo-tag-group" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const groupVal = ref([])
</script>
