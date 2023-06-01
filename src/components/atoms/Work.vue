<script setup>
const { path, url } = defineProps(['path', 'url']);
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
    <router-link class="work-item__link" :to="url">
      <slot name="link-text"></slot>
    </router-link>
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
  &__link{
    width: 100%;
    height: 50px;
    margin-top: 10px;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s ease-in-out;
    &:hover{
      background-color: #000;
      color: #fff;
    }
  }
}
</style>