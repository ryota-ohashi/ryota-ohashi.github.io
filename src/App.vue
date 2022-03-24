<script setup>
import Header from '@/components/organisms/Header.vue'
import Footer from '@/components/organisms/Footer.vue'
import Top from '@/components/pages/Top.vue'
</script>

<template>
  <Header/>
  <Top/>
  <Footer/>
</template>

<style lang="scss">
@import './assets/scss/_destyle';

#app {
  font-family: sans-serif;
}
body{
  background-color: #000;
  transition: background-color .3s ease-in-out;
}
</style>
