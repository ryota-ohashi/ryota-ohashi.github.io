<template>
  <ul class="works-list">
    <slot></slot>
  </ul>
</template>

<style lang="scss">
.works-list{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px 40px;
  padding: 25px 0;
  @include sp{
    grid-template-columns: 1fr;
  }
}

.work-item {
  display: grid;
  grid-template-rows: auto auto 1fr auto auto;
}
</style>