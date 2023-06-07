<script setup>

const interaList = [
  {
    name: "intera1",
    url: "/practice-mouse-stalker/",
    theme: "追従"
  },
  {
    name: "intera2",
    url: "/practice-p5js-flower/",
    theme: "反復"
  },
  {
    name: "intera3",
    url: "/practice-intera3/",
    theme: "寄り道する動き"
  },
  {
    name: "intera4",
    url: "/practice-intera4/",
    theme: "スクロール連動"
  },
  {
    name: "intera5",
    url: "/practice-intera5/",
    theme: "ロールオーバー"
  },
  {
    name: "intera6",
    url: "/practice-intera6/",
    theme: "引っ張る"
  },
  {
    name: "intera7",
    url: "/practice-intera7/",
    theme: "ランダム"
  },
  {
    name: "intera8",
    url: "/practice-intera8/",
    theme: "グラデーション"
  },
  {
    name: "intera9",
    url: "/practice-intera9/",
    theme: "ゆらゆら"
  },
  {
    name: "intera10",
    url: "/practice-intera10/",
    theme: ""
  },
  {
    name: "intera11",
    url: "/practice-intera11/",
    theme: "気持ち良さ"
  },
  {
    name: "intera12",
    url: "/practice-intera12/",
    theme: "ふわふわ"
  },
  {
    name: "intera13",
    url: "/practice-intera13/",
    theme: "くるくる"
  },
]

</script>

<template>
  <main>
    <div class="intera_cont">
      <ul class="intera_list">
        <li v-for="intera in interaList"><a :href="intera.url" target="_blank">{{ intera.name }}：{{ intera.theme }}</a></li>
      </ul>
    </div>
  </main>
</template>

<style lang="scss">
  .intera_cont{
    padding-top: 300px;
    color: #fff;
    width: 90vw;
    margin: 0 auto;
    @include tab {
			padding-top: 150px;
		}
  }
  .intera_list{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    font-size: 20px;
    & a{
      transition: .3s ease-in-out;
      &:hover{
        opacity: 0.7;
      }
    }
  }
</style>