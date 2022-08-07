<template>
  <IxDrawerProvider>
    <IxNotificationProvider>
      <IxModalProvider>
        <IxMessageProvider>
          <!-- <IduxProviderRegister></IduxProviderRegister> -->
          <slot></slot>
        </IxMessageProvider>
      </IxModalProvider>
    </IxNotificationProvider>
  </IxDrawerProvider>
</template>

<script setup lang="ts">
// import IduxProviderRegister from './IduxProviderRegister.vue'

// const drawerProviderRef = ref<DrawerProviderInstance>()
// const modalProviderRef = ref<ModalProviderInstance>()
// onMounted(() => {
//   // 每次路由切换时销毁当前的抽屉和弹窗（仅对通过 useDrawer/useModal 创建的生效）
//   router.afterEach(() => {
//     drawerProviderRef.value!.destroyAll()
//     modalProviderRef.value!.destroyAll()
//   })
// })
</script>
