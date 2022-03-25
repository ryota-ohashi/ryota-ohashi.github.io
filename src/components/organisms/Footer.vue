<template>
  <footer>
    <p>copyright 2021 RYOTA OHASHI</p>
  </footer>
</template>

<style lang="scss">
footer {
	color: black;
	text-align: center;
	font-family: $EngFont;
	letter-spacing: 3px;
	line-height: 2;
  padding: 50px 0;
	@include sp {
		font-size: 10px;
	}
	@include sprand {
		font-size: 10px;
	}
}
</style>