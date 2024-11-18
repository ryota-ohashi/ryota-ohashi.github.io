<script setup>
import WorkList from '@/components/molecules/WorkList.vue'
import Work from '@/components/atoms/Work.vue'
import intera_01 from '@/assets/img/intera_01.jpg'
import intera_02 from '@/assets/img/intera_02.jpg'
import intera_03 from '@/assets/img/intera_03.jpg'
import intera_04 from '@/assets/img/intera_04.jpg'
import intera_05 from '@/assets/img/intera_05.jpg'
import intera_06 from '@/assets/img/intera_06.jpg'
import intera_07 from '@/assets/img/intera_07.jpg'
import intera_08 from '@/assets/img/intera_08.jpg'
import intera_09 from '@/assets/img/intera_09.jpg'
import intera_10 from '@/assets/img/intera_10.jpg'
import intera_11 from '@/assets/img/intera_11.jpg'
import intera_12 from '@/assets/img/intera_12.jpg'
import intera_13 from '@/assets/img/intera_13.jpg'
import intera_14 from '@/assets/img/intera_14.jpg'
import intera_15 from '@/assets/img/intera_15.jpg'
import intera_16 from '@/assets/img/intera_16.jpg'

const interaList = [
  {
    img: intera_01,
    theme: "追従",
    desc: "マウスに追従するように動く作品として、ギャラリーのように作品が配置されている時に、その画像にマウスが重なった時に、その画像を囲うようにした。",
    url: "https://ryota-ohashi.github.io/practice-mouse-stalker/",
    linkText: "見てみる"
  },
  {
    img: intera_02,
    theme: "反復",
    desc: "同じ動きを軸をずらしながら反復して描画することで墨絵風の花を作成した。",
    url: "https://ryota-ohashi.github.io/practice-p5js-flower/",
    linkText: "見てみる"
  },
  {
    img: intera_03,
    theme: "寄り道する動き",
    desc: "画面の外からランダムに寄り道しながら真ん中におさあっていくアニメーション。",
    url: "https://ryota-ohashi.github.io/practice-intera3/",
    linkText: "見てみる"
  },
  {
    img: intera_04,
    theme: "スクロール連動",
    desc: "gsapを用いて、ページスクロールの途中で横スクロールが入るようにしている。gsapはライセンスに注意。",
    url: "https://ryota-ohashi.github.io/practice-intera4/",
    linkText: "見てみる"
  },
  {
    img: intera_05,
    theme: "ロールオーバー",
    desc: "花の画像にマウスで触れると、触れたところからピクセルが垂れ下がっていく。",
    url: "https://ryota-ohashi.github.io/practice-intera5/",
    linkText: "見てみる"
  },
  {
    img: intera_06,
    theme: "引っ張る",
    desc: "シャッターをマウスでドラッグすると、シャッターが開いていき、その奥に風景（ランダム）が見える。",
    url: "https://ryota-ohashi.github.io/practice-intera6/",
    linkText: "見てみる"
  },
  {
    img: intera_07,
    theme: "ランダム",
    desc: "文字列をギザギザさせるグリッチ表現。",
    url: "https://ryota-ohashi.github.io/practice-intera7/",
    linkText: "見てみる"
  },
  {
    img: intera_08,
    theme: "グラデーション",
    desc: "あまり使われないconic-gradientの使用用途を探るべく、ルーレットを実装。本勉強会の発表順を決めるのに大活躍。",
    url: "https://ryota-ohashi.github.io/practice-intera8/",
    linkText: "見てみる"
  },
  {
    img: intera_09,
    theme: "ゆらゆら",
    desc: "vaporwave風のゆらゆらした風景を描画。",
    url: "https://ryota-ohashi.github.io/practice-intera9/",
    linkText: "見てみる"
  },
  {
    img: intera_10,
    theme: "マスク",
    desc: "曇っている窓を吹くと、窓の向こうに夜景が見える。",
    url: "https://ryota-ohashi.github.io/practice-intera10/",
    linkText: "見てみる"
  },
  {
    img: intera_11,
    theme: "気持ち良さ",
    desc: "画面に散らばった文字が一定の周期で俳句になるアニメーション。",
    url: "https://ryota-ohashi.github.io/practice-intera11/",
    linkText: "見てみる"
  },
  {
    img: intera_12,
    theme: "ふわふわ",
    desc: "シャボン玉のふわふわを再現すべく実装した。",
    url: "https://ryota-ohashi.github.io/practice-intera12/",
    linkText: "見てみる"
  },
  {
    img: intera_13,
    theme: "くるくる",
    desc: "くるくる回るハンドスピナーを作ってみた。",
    url: "https://ryota-ohashi.github.io/practice-intera13/",
    linkText: "見てみる"
  },
  {
    img: intera_14,
    theme: "フィルター",
    desc: "cssのfilterの全ての効果を知るべく、全ての効果を使ってモザイク処理風のエフェクトを作成。",
    url: "https://ryota-ohashi.github.io/practice-intera14/",
    linkText: "見てみる"
  },
  {
    img: intera_15,
    theme: "時計",
    desc: "デジタルなフォントを用いたデジタル時計。ついでにパラメータのgui操作を試すべく、lil-guiを導入。",
    url: "https://ryota-ohashi.github.io/practice-intera15/",
    linkText: "見てみる"
  },
  {
    img: intera_16,
    theme: "回転",
    desc: "backface-visibilityを用いて、神経衰弱ゲームを作成。",
    url: "https://ryota-ohashi.github.io/practice-intera16/",
    linkText: "見てみる"
  },
]

</script>

<template>
  <main>
    <div class="intera_cont">
			<WorkList>
				<Work v-for="item in interaList" :key="item.img" :path="item.img" :url="item.url">
					<template v-slot:title>{{ item.theme }}</template>
					<template v-slot:desc>{{ item.desc }}</template>
					<template v-slot:link-text>{{ item.linkText }}</template>
				</Work>
			</WorkList>
    </div>
  </main>
</template>

<style lang="scss">
  .intera_cont{
    padding-top: 250px;
    color: #fff;
    width: 90vw;
    margin: 0 auto;
    @include lpc{
      padding-top: 150px;
    }

    .work-item__link{
      color: #fff;
      border: 1px solid #fff;
      &:hover{
        background-color: #fff;
        color: #000;
      }
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
