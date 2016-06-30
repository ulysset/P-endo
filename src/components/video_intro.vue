<template lang="html">
	<div class="content" transition="fade">
		<video controls preload="auto" autoplay="true">
			<source src="http://jrlherm.com/webdoc/videos/introduction.mp4" type="video/mp4">
		</video>
    	<a v-link="{ path: '/'}">Home</a>
		<a v-link="{ path: '/maladies'}">Maladies</a>
	</div>

</template>

<script>
export default {
  data () {
    return {
    }
  }
}

</script>

<style lang="scss" scoped>
	video{
		position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translateX(-50%) translateY(-50%);
    background-size: cover;
	}
</style>
