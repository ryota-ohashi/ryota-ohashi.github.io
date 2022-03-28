<script setup>
import { onMounted } from 'vue'
import Kv from '@/components/atoms/Kv.vue'
import H2title from '@/components/atoms/H2title.vue'
import Desc from '@/components/atoms/Desc.vue'
import SkillList from '@/components/molecules/SkillList.vue'
import Skill from '@/components/atoms/Skill.vue'
import WorkList from '@/components/molecules/WorkList.vue'
import Work from '@/components/atoms/Work.vue'
import work_01 from '@/assets/img/work_01.jpg'

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
				2021年よりフロントエンドエンジニアとしてお仕事を始めた。<br>
				主にWEBサイトの構築等をしている。<br>
				趣味は文学全般で、小説や詩歌が好き。<br><br>
				最近は、Vueに触れたりしている。<br>
				アクセシビリティやハイパフォーマンスチューニング辺りにも興味。
			</Desc>
		</section>

		<section class="section section--fz-white js-observe-section" id="skills">
			<H2title color="white">SKILLS</H2title>
			<SkillList>
				<Skill>
					<template v-slot:order>01</template>
					<template v-slot:hdg>HTML</template>
					<template v-slot:text>クラスの命名規則は基本的にはBEMです。</template>
				</Skill>
				<Skill>
					<template v-slot:order>02</template>
					<template v-slot:hdg>CSS</template>
					<template v-slot:text>SCSS記法で書いております。レスポンシブも対応可能。</template>
				</Skill>
				<Skill>
					<template v-slot:order>03</template>
					<template v-slot:hdg>JavaScript</template>
					<template v-slot:text>WEBサイト構築に必要な基礎知識はあり。</template>
				</Skill>
				<Skill>
					<template v-slot:order>04</template>
					<template v-slot:hdg>PhotoShop</template>
					<template v-slot:text>コーディングのために必要な情報を取得できる。</template>
				</Skill>
				<Skill>
					<template v-slot:order>05</template>
					<template v-slot:hdg>XD</template>
					<template v-slot:text>コーディングのために必要な情報を取得できる。</template>
				</Skill>
			</SkillList>
		</section>

		<section class="section section--fz-black js-observe-section" id="works">
			<H2title color="black">WORKS</H2title>
			<Desc>
				これまでに自主制作してきたものを掲載しています。<br>GitHub：
				<a href="https://github.com/ryota-ohashi">https://github.com/ryota-ohashi</a>
			</Desc>
			<WorkList>
				<Work :path="work_01">
					<template v-slot:title>本サイト</template>
					<template v-slot:desc>Vueで書き換えました。<br>今回はViteを使って速さを体感しつつの構築。</template>
					<template v-slot:date>（制作日：2022-03）</template>
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
