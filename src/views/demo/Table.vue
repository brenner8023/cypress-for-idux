<template>
  <IxTable
    v-bind="$attrs"
    data-cy="demo-table"
    :columns="columns"
    :dataSource="data">
    <template #action="{ record }">
      <a style="margin-right: 8px">{{ record.name }}</a>
      <a>Delete</a>
    </template>
    <template #expand="{ record }">
      <span>{{ record.name }}</span>
    </template>
  </IxTable>
</template>

<script lang="ts" setup>
import type { TableColumn } from '@idux/components/table';

interface Data {
  key: number;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumn<Data>[] = [
  {
    type: 'expandable',
    disabled: () => false,
    customExpand: 'expand',
  },
  {
    title: 'Name',
    dataKey: 'name',
    customCell: 'name',
  },
  {
    title: 'Age',
    dataKey: 'age',
  },
  {
    title: 'Address',
    dataKey: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    customCell: 'action',
  },
];

const data: Data[] = Array.from({ length: 20 }).map((_, index) => ({
  key: index,
  name: `mio${index}`,
  age: 18 + index,
  address: `China ${index}`,
}));
</script>
