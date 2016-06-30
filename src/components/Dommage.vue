<template lang="html">
	<div class="content" transition="fade">
	    <div class="hello">
	      <h2>Quoi qu'il en soit ...</h2>
	      <h1>Vous n'en aurez pas.</h1>
	    </div>
  		<a v-link="{ path: '/video_intro'}"></a>
  		<audioplayer src="http://jrlherm.com/webdoc/audio/intro_part2.mp3"></audioplayer>
	</div>
	
  
</template>

<script scoped>
import Vue from 'vue'
Vue.component('audioplayer', require('./audioPlayer'))
export default {
	data(){
		return{}
	},
	ready() {
		let the_audio = document.querySelector('audio');
		window.setInterval(function(){
      		if (the_audio.currentTime >= the_audio.duration){
      			/*console.log(this.$route);
	        	this.router.go('/')*/
	        	/*this.$route.router.go('/')*/
	        	/*this.$route.router.redirect('/video_intro')*/
	      }
		},100);
	},
	methods: {
	}
}
</script>

<style lang="css" scoped>
	.content{
	    width: 100%;
	    height: 100%;
	    background-image: url('../assets/images/bg_home.png');
	    background-size: cover;
	    color: white;
	}
	h1{
	    padding-top: 2%;
	    text-align: center;
	    font-size: 3.5rem;
	  }
	  h2 {
	    padding-top: 20%;
	    text-align: center;
	    font-size: 1.5rem;
	  }
	  a {
		  position: absolute;
		  top: 0px;
		  left: 0px;
		  width: 100px;
		  height: 100px;
		}
</style>
