<script setup>
const { title, color } = defineProps(['title', 'color']);
</script>
<template>
  <h2 class="hdg2" :class="color">{{ title }}</h2>
</template>

<style lang="scss" scoped>

.hdg2{
  font-size: 42px;
  letter-spacing: 8px;
  font-family: $EngFont;
  padding-bottom: 25px;

  @include lpc {
    font-size: 28px;
  }
}
.black{
  border-bottom: 1px dashed #000;
}
.white{
  border-bottom: 1px dashed #fff;
}
</style>