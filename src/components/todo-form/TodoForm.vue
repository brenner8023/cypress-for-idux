<template>
  <IxForm :control="formGroup" data-cy="todo-form">
    <IxFormItem messageTooltip>
      <IxInput
          control="todo"
          size="lg"
          placeholder="What needs to be done ?"
          data-cy="todo-form-input" />
      <IxButton
        mode="link"
        style="margin-left: 16px;"
        @click="handleSave"
        data-cy="todo-form-btn">
        Click
      </IxButton>
    </IxFormItem>
  </IxForm>
</template>

<script setup lang="ts">
import { Validators, useFormGroup } from '@idux/cdk/forms';

const emit = defineEmits({
  'update:todo': (v: string) => v,
});

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
