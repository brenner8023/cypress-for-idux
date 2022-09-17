<template>
  <IxBreadcrumb
    data-cy="demo-breadcrumb-1"
    :separator="separator">
    <IxBreadcrumbItem>高架桥</IxBreadcrumbItem>
    <IxBreadcrumbItem>路口</IxBreadcrumbItem>
    <IxBreadcrumbItem>旅途</IxBreadcrumbItem>
    <IxBreadcrumbItem>路灯</IxBreadcrumbItem>
  </IxBreadcrumb>

  <IxBreadcrumb
    data-cy="demo-breadcrumb-2"
    separator=">">
    <IxBreadcrumbItem data-cy="demo-item-1">高架桥</IxBreadcrumbItem>
    <IxBreadcrumbItem
      data-cy="demo-item-2"
      separator="~">路口</IxBreadcrumbItem>
    <IxBreadcrumbItem data-cy="demo-item-3">
      <template #separator>→</template>
      <a href="#">旅途</a>
    </IxBreadcrumbItem>
    <IxBreadcrumbItem>路灯</IxBreadcrumbItem>
  </IxBreadcrumb>
</template>

<script setup lang="ts">
defineProps({
  separator: { type: String, default: '>' },
});
</script>
