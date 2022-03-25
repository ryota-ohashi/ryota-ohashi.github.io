<script setup>
</script>

<template>
  <li class="skill-item">
    <p class="skill-item__order">
      <slot name="order"></slot>
    </p>
    <p class="skill-item__hdg">
      <slot name="hdg"></slot>
    </p>
    <p class="skill-item__text">
      <slot name="text"></slot>
    </p>
  </li>
</template>

<style lang="scss">
.skill-item{
  &__order{
    font-family: $EngFont;
    letter-spacing: 3px;
  }
  &__hdg{
    font-family: $EngFont;
    line-height: 2;
    letter-spacing: 2px;
    font-size: 36px;
    @include lpc {
      font-size: 28px;
    }
  }
  &__text{
    letter-spacing: 2px;
    word-break: break-all;
  }
}
</style>