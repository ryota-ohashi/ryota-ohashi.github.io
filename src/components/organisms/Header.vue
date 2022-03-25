<script setup>
import { ref } from 'vue'

// ヘッダーの動き用
const flag = ref(false);
const toggleClass = () => {
	const scroll = window.scrollY;
	scroll > 50 ? flag.value = true : flag.value = false;
}
window.addEventListener('scroll', toggleClass);

const body = document.body;
const toggleMenu = () => {
	body.classList.toggle('open');
}

// スムーススクロール
const offset = 100;

const scrollTo = (e) => {
	let id = e.target.getAttribute('href');
	if (id === "#") id = "html";
	const scrollTarget = document.querySelector(id);
	const position = scrollTarget.getBoundingClientRect().top + window.pageYOffset - offset;
	window.scrollTo({
		top: position,
		behavior: 'smooth'
	});
	if (window.matchMedia('(max-width: 768px)').matches) toggleMenu();
}
</script>
<template>
  <header class="header js-observe-header" :class="{'fixed-top': flag}">
    <div class="header__heading">
      <h1 class="header__heading-title">PORTFOLIO BY<br>RYOTA OHASHI</h1>
      <h2 class="header__heading-subtitle">WEB ENGINEER</h2>
    </div>
    <nav class="header__gnav">
      <ul class="header__gnav-list">
        <li class="header__gnav-item"><a href="#" @click.prevent="scrollTo($event)">TOP</a></li>
        <li class="header__gnav-item"><a href="#about" @click.prevent="scrollTo($event)">ABOUT</a></li>
        <li class="header__gnav-item"><a href="#skills" @click.prevent="scrollTo($event)">SKILLS</a></li>
        <li class="header__gnav-item"><a href="#works" @click.prevent="scrollTo($event)">WORKS</a></li>
      </ul>
    </nav>
    <button class="header__menu" @click="toggleMenu">
      <span class="header__menu--1"></span>
      <span class="header__menu--2"></span>
      <span class="header__menu--3"></span>
    </button>
    <div class="header__bg"></div>
  </header>
</template>

<style lang="scss">
.header {
	position: fixed;
	top: 50px;
	left: 50%;
	transform: translateX(-50%);
	width: 90vw;
	display: flex;
	justify-content: space-between;
	font-family: $EngFont;
	color: white;
	border: 1px solid grey;
	transition: .3s ease-out;
	z-index: 99;
	@include tab {
		flex-direction: column;
		justify-content: initial;
		top: -1px;
	}

	&__heading {
		position: relative;
		z-index: 100;
		letter-spacing: 5px;
		padding: 20px 0 20px 60px;
		@include lpc {
			padding: 10px 0 10px 30px ;
		}
		@include tab {
			padding: 15px 0 15px 20px ;
		}
	}

	&__heading-title {
		font-size: 26px;
		line-height: 1.4;
		@include lpc {
			font-size: 16px;
		}
		@include pc {
			font-size: 14px;
		}
	}

	&__heading-subtitle {
		padding-top: 20px;
		font-size: 16px;
		line-height: 2;
		transition: .3s ease;
		@include lpc {
			font-size: 12px;
			padding-top: 10px;
		}
		@include pc {
			font-size: 10px;
			padding-top: 5px;
		}
	}

	&__gnav {
		position: relative;
		z-index: 100;
		@include tab {
			display: none;
			opacity: 0;
			flex: 1;
			transition: .3s ease;
		}
	}
	&__gnav-list {
		display: flex;
		align-items: flex-end;
		height: 100%;
		@include tab {
			align-items: center;
			justify-content: center;
			flex-direction: column;
		}
	}
	&__gnav-item {
		position: relative;
		border-left: 1px solid grey;
		@include tab {
			border-left: initial;
			text-align: center;
		}

		&::after {
			content: "";
			position: absolute;
			bottom: -1px;
			left: 0;
			width: 0;
			height: 3px;
			background-color: white;
			transition: .3s ease;
			@include tab {
				display: none;
			}
		}

		&:hover::after {
			width: 100%;
		}

		& a {
			display: block;
			padding: 0 50px 20px;
			font-size: 16px;
			letter-spacing: 1px;
			@include lpc {
				font-size: 14px;
				padding: 0 20px 10px;
			}
			@include pc {
				font-size: 12px;
				padding: 0 15px 5px;
			}
			@include tab {
				font-size: 18px;
				padding: 15px 0;
			}
		}
	}

	&__menu {
		display: none;
		@include tab {
			display: block;
			position: absolute;
			top: 22px;
			right: 10%;
			width: 50px;
			height: 50px;
			flex: 1;
			z-index: 102;
			transition: .3s ease-in-out;
		}

		& span {
			display: block;
			position: absolute;
			right: 10%;
			transform: translateY(-50%);
			width: 40px;
			height: 3px;
			background-color: white;

		}
		&--1 {
			top: calc(50% - 10px);
			transition: .3s ease;
		}
		&--2 {
			top: 50%;
		}
		&--3 {
			top: calc(50% + 10px);
			transition: .3s ease;
		}
	}

	&__bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 0%;
		background-color: #333;
		transition: .5s ease;
	}
	&.fixed-top{
		top: 0;
		> .header__bg{
			height: 100%;
		}
	}
}

// spmenuクリックでbodyにclass="open"付与
.open .header {
	width: 100vw;
	height: calc(100vh + 1px);
	padding: 0 5%;
	border: 1px solid #333;
	background-color: #333;
}
.open .header__heading {
	border-bottom: 1px solid grey;
}
.open .header__gnav {
	display: block;
	opacity: 1;
	overflow: hidden;
}
.open .header__menu {
	right: 15%;
	&--1 {
		transform: rotate(-45deg);
	}
	&--2 {
		visibility: hidden;
	}
	&--3 {
		transform: rotate(45deg);
	}
	&--1 , &--3{
		top: 50%;
	}
}
</style>