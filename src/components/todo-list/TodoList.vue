<template>
  <IxList
    :borderless="false"
    style="margin-top: 16px;"
    size="sm"
    data-cy="todo-list">
    <IxListItem
      v-for="(item, idx) in listData"
      :key="item.id"
      data-cy="todo-list-item">
      <div class="list-item-container">
        <div style="display: flex; align-items: center; gap: 4px;">
          <IxCheckbox v-model:checked="item.checked" data-cy="todo-list-checkbox"></IxCheckbox>
          <span :class="item.checked ? 'item-checked' : null">
            {{ item.text }}
          </span>
        </div>
        <img :src="DeleteSvg" alt="" class="delete-icon" @click="handleDelete(idx)">
      </div>
    </IxListItem>
    <template v-slot:footer>
      <div>共有: {{ listData.length }}</div>
    </template>
  </IxList>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DeleteSvg from '@/assets/delete.svg';

const listData = ref<{ checked: boolean; text: string; id: number }[]>([]);

const id = ref(0);

defineExpose({
  add (newVal: string) {
    newVal && listData.value.unshift({ checked: false, text: newVal, id: id.value });
    id.value = id.value + 1;
  },
});

const handleDelete = (idx: number) => {
  listData.value.splice(idx, 1);
};
</script>

<style scoped>
.list-item-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete-icon {
  cursor: pointer;
}

.item-checked {
  text-decoration: line-through;
}
</style>
