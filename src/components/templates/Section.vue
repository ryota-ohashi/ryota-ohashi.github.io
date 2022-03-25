<script setup>
import { ref } from 'vue'
import H2title from '@/components/atoms/H2title.vue'

const { title, color } = defineProps(['title','color']);
const fontColor = ref("font-" + color);
</script>

<template>
  <section :class="fontColor">
    <H2title
      :title="title"
      :color="color"
    />
    <div class="content">
      <slot name="content"></slot>
    </div>
  </section>
</template>

<style lang="scss">
.font-black{
  color: #000;
}
.font-white{
  color: #fff;
}
</style>