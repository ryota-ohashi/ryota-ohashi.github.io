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
import work_05_img from '@/assets/img/work_05.jpg'
import work_06_img from '@/assets/img/work_06.jpg'


const InteraUrl = "/intera/";
const githubEleventyTemplate = "https://github.com/ryota-ohashi/eleventy-template/";
const githubEleventyViteTemplate = "https://github.com/ryota-ohashi/eleventy-vite-template/";
const githubBarbaTemplate = "https://ryota-ohashi.github.io/barba-template/";
const githubModuleTemplate = "https://ryota-ohashi.github.io/module-template/";
const ryotakobashiUrl = "http://ryota_kobashi.gitlab.io/profile/";

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
				1996年新潟県生まれ。<br>
				2021年4月から2024年4月までフロントエンドエンジニアとして、IT会社であるアクセンチュア株式会社に新卒で勤務した。<br>
				主にウェブサイトの構築から運用保守の業務を経験しており、ウェブサイト制作に関しては広く知識を得ています。またこれまでの運用経験から堅牢な運用やマルチタスクな作業かつ全体スケジュールを意識して仕事をこなしていくことには慣れており、個人的に得意分野です。<br>
				チーム開発においてはエンジニアとしての自分の仕事に集中することはもちろんですが、デザイナーやディレクターなどの動きまで把握することで、全体感を意識しながら手戻りなく、効率良く進めていくことに注力しています。<br><br>
				友人との勉強会の中で作成していた小作品はIntera Worksに掲載中。<br>
				趣味は詩歌などの文学全般。<br>
				直近では詩歌用の<a class="underline hover" :href="ryotakobashiUrl" target="_blank">個人サイト</a>を作成しており、非同期遷移にアニメーションを取り入れつつ、背景ではp5.jsを用いたピクセルソーティング風の描画を行なった。
			</Desc>
		</section>

		<section class="section section--fz-white js-observe-section" id="skills">
			<H2title color="white">SKILLS</H2title>
			<SkillList>
				<Skill>
					<template v-slot:order>01</template>
					<template v-slot:hdg>HTML系</template>
					<template v-slot:text>最近はテンプレートエンジンとしてnunjucksをよく使っている。セマンティックなHTMLになるよう心がけています。</template>
				</Skill>
				<Skill>
					<template v-slot:order>02</template>
					<template v-slot:hdg>CSS系</template>
					<template v-slot:text>記法はBEMとFLOCSSを組み合わせたものが好み。cssモジュールの作成も経験済みで、開発において見やすい設計にすることに注力。</template>
				</Skill>
				<Skill>
					<template v-slot:order>03</template>
					<template v-slot:hdg>JavaScript</template>
					<template v-slot:text>WEBサイト構築全般を経験しており、アニメーション周りへの関心も高い。UXを損なうほどのアニメーションは好まないけれど、注意を軽く引く程度のものは好き。</template>
				</Skill>
				<Skill>
					<template v-slot:order>04</template>
					<template v-slot:hdg>Type Script</template>
					<template v-slot:text>勉強中。業務でも経験し、ある程度の型定義はできるが、あまりにも奥が深いと感じている。</template>
				</Skill>
				<Skill>
					<template v-slot:order>05</template>
					<template v-slot:hdg>Framework</template>
					<template v-slot:text>本サイトの作成にはVueを使用しています。最近では11tyがウェブ制作にはちょうどいいのではないかと感じており、11tyを用いた環境テンプレートを作った。</template>
				</Skill>
				<Skill>
					<template v-slot:order>06</template>
					<template v-slot:hdg>Git</template>
					<template v-slot:text>業務では連絡ツールも兼ねてBacklogを多く使用しており、コミットコメントをチケットに残せるのがかなり便利に感じています。GitHubやGitLabも勿論使用可能です。</template>
				</Skill>
				<Skill>
					<template v-slot:order>07</template>
					<template v-slot:hdg>Design Tool</template>
					<template v-slot:text>XD, Photoshop, Figmaの経験があり、コーディングに必要な操作は習得している。</template>
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
					<template v-slot:link-text>一覧を見てみる</template>
				</Work>
				<Work :path="work_02_img" :url="githubEleventyTemplate">
					<template v-slot:title>eleventy環境のテンプレート</template>
					<template v-slot:desc>eleventyのテンプレートを作成しています。</template>
					<template v-slot:link-text>ソースを見てみる</template>
				</Work>
				<Work :path="work_03_img" :url="githubEleventyViteTemplate">
					<template v-slot:title>eleventy × vite環境のテンプレート</template>
					<template v-slot:desc>eleventyとviteを用いたテンプレートを作成しています。</template>
					<template v-slot:link-text>ソースを見てみる</template>
				</Work>
				<Work :path="work_04_img" :url="githubBarbaTemplate">
					<template v-slot:title>barba環境のテンプレート</template>
					<template v-slot:desc>barbaを用いたテンプレートを作成しています。</template>
					<template v-slot:link-text>ソースを見てみる</template>
				</Work>
				<Work :path="work_05_img" :url="githubModuleTemplate">
					<template v-slot:title>moduleのテンプレート</template>
					<template v-slot:desc>ウェブ制作でよく用いるJSのmoduleテンプレートを作成しています。</template>
					<template v-slot:link-text>ソースを見てみる</template>
				</Work>
				<Work :path="work_06_img" :url="ryotakobashiUrl">
					<template v-slot:title>詩歌系個人サイト</template>
					<template v-slot:desc>詩歌周りでの活動記録を載せています。自己紹介用のサイトです。<br>こちらはgitlabにてページを公開しているので、ソースは<a class="underline hover" href="https://gitlab.com/ryota_kobashi/profile/" target="_blank">gitlab</a>にて公開しています。（筆名のアカウント名ですが私です。）</template>
					<template v-slot:link-text>サイトを見てみる</template>
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
.underline{
	text-decoration: underline;
}
.hover{
	transition: 0.3s ease;
	&:hover{
		opacity: 0.5;
	}
}
</style>
