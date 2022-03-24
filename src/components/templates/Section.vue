<script setup>
import H2title from '@/components/atoms/H2title.vue'

const { title, color } = defineProps(['title','color']);
</script>

<template>
  <section :class="color">
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
.black{
  color: #000;
}
.white{
  color: #fff;
}
</style>