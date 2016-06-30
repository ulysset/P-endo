<template lang="html">
	<div class="content" transition="fade">
	    <video v-bind="src:vid_src"></video>
	    <a v-link="{ path: '/'}">Home</a>
  		<a v-link="{ path: '/foo'}">Foo</a>
	</div>
  
</template>

<script>
export default {
  data () {
    return {
      vid_src: '../assets/videos/introduction.mp4'
    }
  }
}

</script>

<style lang="css" scoped>

</style>
