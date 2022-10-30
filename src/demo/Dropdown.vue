<template>
  <IxDropdown
    data-cy="demo-dropdown"
    :showArrow="true"
    v-bind="$attrs">
    <a data-cy="demo-dropdown-trigger">Trigger me</a>
    <template #overlay>
      123
    </template>
  </IxDropdown>
</template>
