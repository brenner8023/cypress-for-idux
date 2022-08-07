<template>
  <IduxProvider>
    <TodoApp />
  </IduxProvider>
</template>

<script setup lang="ts">
import { IduxProvider } from './components/idux-provider';
import { TodoApp } from './views/todo-app';
</script>

<style>
#app {
  width: 60%;
  margin-top: 100px;
  padding-left: 33%;
}
</style>
