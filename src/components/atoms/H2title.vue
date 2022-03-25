<script setup>
import { ref } from 'vue'
const { title, color } = defineProps(['title', 'color']);
const colorClass = ref("bb-" + color);
</script>
<template>
  <h2 class="hdg2" :class="colorClass">{{ title }}</h2>
</template>

<style lang="scss">
.hdg2{
  font-size: 42px;
  letter-spacing: 8px;
  font-family: $EngFont;
  padding-bottom: 25px;
  @include lpc {
    font-size: 28px;
  }
}
.bb-black{
  border-bottom: 1px dashed #000;
}
.bb-white{
  border-bottom: 1px dashed #fff;
}
</style>