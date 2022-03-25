<script setup>
</script>

<template>
  <ul class="skill-list">
    <slot></slot>
  </ul>
</template>

<style lang="scss">
.skill-list{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 35px;
  row-gap: 50px;
  padding: 50px 0;
  @include tab {
    grid-template-columns: 1fr 1fr;
	}
  @include sp {
    grid-template-columns: 1fr;
	}
}
</style>