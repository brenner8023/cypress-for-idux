<template>
  <IxCarousel v-bind="$attrs" data-cy="demo-carousel">
    <div class="card-item">Demo1</div>
    <div class="card-item">Demo2</div>
    <div class="card-item">Demo3</div>
    <div class="card-item">Demo4</div>
  </IxCarousel>
</template>

<style scoped>
.card-item {
  height: 160px;
  line-height: 160px;
  background-color: #364d79;
  text-align: center;
  font-size: 16px;
  color: #fff;
}
</style>
