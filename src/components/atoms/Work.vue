<script setup>
const { path } = defineProps(['path']);
</script>
<template>
  <li class="work-item">
    <img class="work-item__img" :src="path" alt="">
    <h3 class="work-item__title">
      <slot name="title"></slot>
    </h3>
    <p class="work-item__desc">
      <slot name="desc"></slot>
    </p>
    <p class="work-item__date">
      <slot name="date"></slot>
    </p>
  </li>
</template>

<style lang="scss">
  .work-item{
    &__img{
      width: 100%;
    }
    &__title{
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      padding: 10px 0;

      @include lpc {
        font-size: 20px;
      }
      @include pc {
        font-size: 16px;
      }
    }
    &__desc{
      line-height: 1.7;
		  word-break: break-all;
    }
    &__date{
      font-size: 12px;
      text-align: right;
    }
  }
</style>