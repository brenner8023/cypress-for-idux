<template>
  <IxForm :control="formGroup" data-cy="todo-form">
    <IxFormItem messageTooltip>
      <IxInput
          control="todo"
          size="lg"
          placeholder="What needs to be done ?" />
      <IxButton
        mode="link"
        style="margin-left: 16px;"
        @click="handleSave">Click</IxButton>
    </IxFormItem>
  </IxForm>
</template>

<script setup lang="ts">
import { Validators, useFormGroup } from '@idux/cdk/forms';

const emit = defineEmits<{ (name: 'update:todo', v: string): void }>();

const { required } = Validators;

Validators.setMessages({
  required: '不允许为空',
});

const formGroup = useFormGroup({
  todo: ['', required],
});

const handleSave = () => {
  if (formGroup.valid.value) {
    emit('update:todo', formGroup.getValue().todo);
    formGroup.reset();
  } else {
    formGroup.markAsDirty();
  }
}
</script>
