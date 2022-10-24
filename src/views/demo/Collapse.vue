<template>
  <IxCollapse v-bind="$attrs" data-cy="demo-collapse">
    <IxCollapsePanel key="id1" header="header1">
      content1
    </IxCollapsePanel>
    <IxCollapsePanel key="id2" header="header2">
      <span>
        content2
      </span>
    </IxCollapsePanel>
    <IxCollapsePanel key="id3" header="header3" disabled>
      <span>
        content3
      </span>
    </IxCollapsePanel>
  </IxCollapse>
</template>
