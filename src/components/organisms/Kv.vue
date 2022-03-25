<script setup>
import { reactive } from 'vue'
import slide_01 from '@/assets/img/slide_01.jpg'
import slide_02 from '@/assets/img/slide_02.jpg'
import slide_03 from '@/assets/img/slide_03.jpg'
import slide_04 from '@/assets/img/slide_04.jpg'
import slide_05 from '@/assets/img/slide_05.jpg'

// 画像
const status = reactive({
  currentNumber: 0,
  imgPath: [
    slide_01,
    slide_02,
    slide_03,
    slide_04,
    slide_05
  ]
});

function slideShow() {
	status.currentNumber === status.imgPath.length - 1 ? status.currentNumber = 0 : status.currentNumber++;
};
setInterval(slideShow, 5000);

</script>

<template>
  <section class="kv">
    <div class="kv__text">
      <h3 class="kv__catch">I believe <br class="return1">in <br class="return2">what I see.</h3>
      <div class="kv__keyword">
        <h4 class="kv__lead">my keywords</h4>
        <p class="kv__list m-text">web : HTML5, CSS3, JavaScript</p>
        <p class="kv__list m-text">趣味 : 小説や詩歌</p>
      </div>
    </div>
    <ul ref="bg" class="kv__slide">
			<li v-for="(path, index) in status.imgPath" :key="path" :class="{'is-show': index === status.currentNumber}">
				<img :src="path" alt="">
			</li>
		</ul>
  </section>
</template>

<style lang="scss">
.kv {
	height: 100vh;
	display: flex;
	&__text {
		width: 40vw;
		padding: 50vh 0 0 5vw;
		font-family: $EngFont;
		color: white;
		@include sp {
			padding: 40vh 0 0 5vw;
		}
	}
	&__catch {
		font-size: 72px;
		letter-spacing: 5px;
		line-height: 1.7;
		white-space: nowrap;
		position: relative;
		z-index: 2;
		@include lpc {
			font-size: 52px;
		}
		@include pc {
			font-size: 46px;
		}
		@include sp {
			font-size: 42px;
		}
		@include se {
			font-size: 28px;
		}
		@include sprand {
			font-size: 20px;
		}

		& .return1 {
			display: none;
			@include sp {
				display: block;
			}
		}
		& .return2 {
			display: none;
			@include tab {
				display: block;
			}
			@include sprand {
				display: none;
			}
		}
	}
	&__keyword {
		margin-top: 10vh;
		white-space: nowrap;
	}
	&__lead {
		font-size: 24px;
		letter-spacing: 5px;
		margin-bottom: 20px;
		@include lpc {
			font-size: 20px;
		}
		@include pc {
			font-size: 18px;
			margin-bottom: 10px;
		}
		@include sp {
			font-size: 14px;
		}
		@include sprand {
			font-size: 14px;
		}
	}
	&__list {
		font-size: 14px;
		letter-spacing: 2px;
		@include sp {
			font-size: 12px;
			padding-bottom: 10px;
		}
		@include sprand {
			font-size: 10px;
		}
	}
	&__slide {
		width: 60vw;
		height: 100vh;
		position: relative;
		& > li{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			opacity: 0;
			transition: 2s ease-in-out;
			&.is-show{
				opacity: 1;
			}
			& > img{
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
}
</style>
