<script setup>
import Header from '@/components/organisms/Header.vue'
import Footer from '@/components/organisms/Footer.vue'
import Top from '@/components/pages/Top.vue'
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
