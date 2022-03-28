<script setup>
import Header from '@/components/globals/Header.vue'
import Footer from '@/components/globals/Footer.vue'
</script>

<template>
  <Header/>
  <router-view></router-view>
  <Footer/>
</template>

<style lang="scss">
@import './assets/scss/_destyle';
body{
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  background-color: #000;
  transition: background-color .3s ease-in-out;
}
</style>
