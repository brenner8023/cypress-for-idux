<template>
  <TodoForm @update:todo="onUpdateTodo"></TodoForm>
  <TodoList ref="listRef"></TodoList>
</template>

<script setup lang="ts">
import { TodoList } from '@/components/todo-list';
import { TodoForm } from '@/components/todo-form';
import { ref } from 'vue';

const listRef = ref<typeof TodoList | null>(null);

const onUpdateTodo = (v: string) => {
    listRef.value?.add(v);
};
</script>
