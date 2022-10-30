<template>
  <IxButton data-cy="demo-btn-text">{{ text }}</IxButton>
  <IxButton :disabled="disabled" data-cy="demo-btn-disabled">禁用</IxButton>
  <IxButton mode="link" :href="href" target="_blank" data-cy="demo-btn-link">Link</IxButton>
  <IxButton mode="primary" :loading="loading" data-cy="demo-btn-loading">Primary</IxButton>
  <IxButton @click="handleClick" data-cy="demo-btn-click">点击</IxButton>
</template>

<script setup lang="ts">
defineProps({
  disabled: { type: Boolean, default: true },
  href: { type: String, default: '' },
  loading: { type: Boolean, default: false },
  text: { type: String, default: '' },
});
const emit = defineEmits(['btnClick']);

const handleClick = () => emit('btnClick', 12580);
</script>
