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

const InteraUrl = "/intera/";

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
				2021年よりフロントエンドエンジニアとしてお仕事を始めた。<br>
				主にサイトの構築、運用をしている。<br><br>
				趣味は言語表現全般で、短歌、川柳、俳句、詩、小説、どれも好き。<br>
				短歌と川柳は自分でも作ったりする。<br><br>
				会社の勉強会で作成している作品はWORKSセクションにて掲載中。<br>
				このサイトも昔作ったものを突っ込んだだけなので、どこかで改修したいと思っているが、、。
			</Desc>
		</section>

		<section class="section section--fz-white js-observe-section" id="skills">
			<H2title color="white">SKILLS</H2title>
			<SkillList>
				<Skill>
					<template v-slot:order>01</template>
					<template v-slot:hdg>HTML</template>
					<template v-slot:text>セマンティックな構造を意識したコーディング。</template>
				</Skill>
				<Skill>
					<template v-slot:order>02</template>
					<template v-slot:hdg>CSS</template>
					<template v-slot:text>記法はBEMが好き。</template>
				</Skill>
				<Skill>
					<template v-slot:order>03</template>
					<template v-slot:hdg>JavaScript</template>
					<template v-slot:text>WEBサイト構築に必要な知識あり。</template>
				</Skill>
				<Skill>
					<template v-slot:order>04</template>
					<template v-slot:hdg>Type Script</template>
					<template v-slot:text>勉強中。jsモジュールをクラスで分割して書く時に必要な型定義はできる程度。</template>
				</Skill>
				<Skill>
					<template v-slot:order>05</template>
					<template v-slot:hdg>Vue</template>
					<template v-slot:text>本サイトの作成に使用。おおまかな仕組みは理解しつつも、コンポネ設計に悩み。</template>
				</Skill>
				<Skill>
					<template v-slot:order>05</template>
					<template v-slot:hdg>XD, Photoshop</template>
					<template v-slot:text>コーディングに必要な知識はあり。Figmaも使ってみたい。</template>
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
					<template v-slot:link-text>Intera Works</template>
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
