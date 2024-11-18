<script setup>
import { onMounted } from 'vue'
import Kv from '@/components/atoms/Kv.vue'
import H2title from '@/components/atoms/H2title.vue'
import Desc from '@/components/atoms/Desc.vue'
import SkillList from '@/components/molecules/SkillList.vue'
import Skill from '@/components/atoms/Skill.vue'
import WorkList from '@/components/molecules/WorkList.vue'
import Work from '@/components/atoms/Work.vue'
import work_01_img from '@/assets/img/work_01.jpg'
import work_02_img from '@/assets/img/work_02.jpg'
import work_03_img from '@/assets/img/work_03.jpg'
import work_04_img from '@/assets/img/work_04.jpg'


const InteraUrl = "/intera/";
const ryotakobashiUrl = "http://ryota_kobashi.gitlab.io/profile/";
const githubEleventyTemplate = "https://github.com/ryota-ohashi/eleventy-template/";
const githubEleventyViteTemplate = "https://github.com/ryota-ohashi/eleventy-vite-template/";

// 背景色の変更機能
const options = {
	root: null,
	rootMargin: "-50% 0px",
	threshold: 0
};

const doWhenIntersect = (entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			toggleClass(entry.target);
		}
	});
}

const body = document.body;
const toggleClass = (el) => {
	el.classList.contains('section--fz-black') ? body.classList.add('bg-white') : body.classList.remove('bg-white');
}

onMounted(() => {
	const observer = new IntersectionObserver(doWhenIntersect, options);
	const targets = document.querySelectorAll('.js-observe-section');
	targets.forEach(el => {
		observer.observe(el);
	});
})

</script>

<template>
  <main>
		<Kv class="js-observe-section"></Kv>
		<section class="section section--fz-black js-observe-section" id="about">
			<H2title color="black">ABOUT</H2title>
			<Desc>
				1996年生まれ。<br>
				出身は新潟県。<br><br>
				2021年4月から2024年4月までフロントエンドエンジニアとしてIT会社に勤務した。<br>
				今後はフリーランスとして活動予定。<br>
				主にウェブサイトの構築から運用保守の業務を経験しており、この辺りの領域が好み。<br><br>
				趣味は言語表現全般で、短歌、川柳、俳句、詩、小説、どれも好き。<br>
				短歌と川柳は自分でも作ったりする。<br><br>
				友人との勉強会の中で作成している小作品はIntera Worksに掲載中。<br>

			</Desc>
		</section>

		<section class="section section--fz-white js-observe-section" id="skills">
			<H2title color="white">SKILLS</H2title>
			<SkillList>
				<Skill>
					<template v-slot:order>01</template>
					<template v-slot:hdg>HTML</template>
					<template v-slot:text>テンプレートエンジンとしてはnunjucksが好き。</template>
				</Skill>
				<Skill>
					<template v-slot:order>02</template>
					<template v-slot:hdg>CSS</template>
					<template v-slot:text>scssで書いており、記法はBEMとFLOCSSを組み合わせたものが好き。</template>
				</Skill>
				<Skill>
					<template v-slot:order>03</template>
					<template v-slot:hdg>JavaScript</template>
					<template v-slot:text>WEBサイト構築全般を経験しており、アニメーション周りへの関心も高い。UXを損なうほどのアニメーションは好まないけれど、注意を軽く引く程度のものは好き。</template>
				</Skill>
				<Skill>
					<template v-slot:order>04</template>
					<template v-slot:hdg>Type Script</template>
					<template v-slot:text>勉強中。業務でも経験しある程度の型定義はできるが、あまりにも奥が深いと感じる。</template>
				</Skill>
				<Skill>
					<template v-slot:order>05</template>
					<template v-slot:hdg>Framework</template>
					<template v-slot:text>本サイトの作成にはVueを使用。最近では11tyがウェブ制作にはちょうどいいのではないかと感じており、11tyを用いた環境テンプレートを作っている。</template>
				</Skill>
				<Skill>
					<template v-slot:order>05</template>
					<template v-slot:hdg>Design Tool</template>
					<template v-slot:text>XD, Photoshop, Figmaの経験があり、コーディングに必要な操作には慣れている。</template>
				</Skill>
			</SkillList>
		</section>

		<section class="section section--fz-black js-observe-section" id="works">
			<H2title color="black">WORKS</H2title>
			<Desc>
				GitHub：
				<a href="https://github.com/ryota-ohashi">https://github.com/ryota-ohashi</a>
			</Desc>
			<WorkList>
				<Work :path="work_01_img" :url="InteraUrl">
					<template v-slot:title>インタラ会</template>
					<template v-slot:desc>インタラ会と称して、各回決められたお題に対して小作品を見せ合っている会。</template>
					<template v-slot:link-text>見てみる</template>
				</Work>
				<Work :path="work_02_img" :url="ryotakobashiUrl">
					<template v-slot:title>詩歌系個人サイト</template>
					<template v-slot:desc>詩歌周りでの活動記録を載せています。自己紹介用のサイトです。</template>
					<template v-slot:link-text>見てみる</template>
				</Work>
				<Work :path="work_03_img" :url="githubEleventyTemplate">
					<template v-slot:title>eleventy環境のテンプレート</template>
					<template v-slot:desc>eleventyのテンプレートを作成しています。</template>
					<template v-slot:link-text>見てみる</template>
				</Work>
				<Work :path="work_04_img" :url="githubEleventyViteTemplate">
					<template v-slot:title>eleventy × vite環境のテンプレート</template>
					<template v-slot:desc>eleventyとviteを用いたテンプレートを作成しています。</template>
					<template v-slot:link-text>見てみる</template>
				</Work>
			</WorkList>
		</section>
  </main>
</template>

<style lang="scss">
.section{
	width: 100%;
  padding: 10vh 10%;
	@include sp{
		padding: 5vh 10%;
	}
	&--fz-black{
		color: #000;
	}
	&--fz-white{
		color: #fff;
	}
}
.bg-white{
	background-color: #ccc;
}
</style>
