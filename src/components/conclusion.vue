<template lang="html">
	<div class="content" transition="fade">
	    <div class="hello">
	      <h2>Il est impossible que des choix individuels puissent nous protéger des expositions aux produits chimiques, nous avons donc besoin d’une politique régulatrice concertée pour nous protéger. Nous avons trop longtemps laissé l’industrie commercialiser des produits chimiques sans les tester correctement. Il faudrait la détermination de toute la société pour obtenir un changement radical !</h2>
	    </div>
  		<audioplayer src="http://jrlherm.com/webdoc/audio/conclusion.mp3"></audioplayer>
	</div>
	
  
</template>

<script scoped>
import Vue from 'vue'
Vue.component('audioplayer', require('./audioPlayer'))
export default {
	data(){
		return{}
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
	  h2 {
	  	width: 60vw;
	  	margin: auto;
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
