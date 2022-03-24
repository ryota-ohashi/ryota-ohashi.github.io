<script setup>
</script>

<template>
  <li class="skill-item">
    <p class="order">
      <slot name="order"></slot>
    </p>
    <p class="hdg">
      <slot name="hdg"></slot>
    </p>
    <p class="text">
      <slot name="text"></slot>
    </p>
  </li>
</template>

<style lang="scss">

  .order{
    font-family: $EngFont;
		letter-spacing: 3px;
  }
  .hdg{
    font-family: $EngFont;
		line-height: 2;
		letter-spacing: 2px;
		font-size: 36px;

		@include lpc {
			font-size: 28px;
		}
  }
  .text{
		font-family: $JapFont;
		letter-spacing: 2px;
		word-break: break-all;
  }
</style>