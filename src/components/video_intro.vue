<template lang="html">
	<div class="content" transition="fade">
		<video controls preload="none">
			<source :src="videourl" type="video/mp4">
		</video>
    <a v-link="{ path: '/'}">Home</a>
		<a v-link="{ path: '/foo'}">Foo</a>
	</div>

</template>

<script>
export default {
  data () {
    return {
      videourl: './assets/videos/introduction.mp4'
    }
  }
}

</script>

<style lang="css" scoped>

</style>
