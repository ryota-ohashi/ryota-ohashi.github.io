<template>
  <ul class="works-list">
    <slot></slot>
  </ul>
</template>

<style lang="scss">
  .works-list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 25px 0;
    @include sp{
      grid-template-columns: 1fr;
    }
  }
</style>