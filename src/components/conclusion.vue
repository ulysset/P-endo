<template lang="html">
	<div class="content" transition="fade">
	    <div class="hello">
	      <h2>Il est impossible que des choix individuels puissent nous protéger des expositions aux produits chimiques, nous avons donc besoin d’une politique régulatrice concertée pour nous protéger. Nous avons trop longtemps laissé l’industrie commercialiser des produits chimiques sans les tester correctement. Il faudrait la détermination de toute la société pour obtenir un changement radical !</h2>
	    </div>
  		<!-- <audioplayer src="http://jrlherm.com/webdoc/audio/conclusion.mp3"></audioplayer> -->
  		<audio class="intro-audio" src="http://jrlherm.com/webdoc/audio/conclusion.mp3" type="audio/mpeg"></audio>
		<div class="all_time">
	       <img class="play_button" v-bind:src="play_or_pause" alt="Play or Pause Sound" v-on:click="play"/>
	       <div class="timeline" v-on:click="changeTime">
	         <div class="progress-bar"></div>
	       </div>
	     </div>
	</div>
	
  
</template>

<script scoped>
import Vue from 'vue'
Vue.component('audioplayer', require('./audioPlayer'))
export default {
	data(){
		return{
			play_or_pause: 'http://jrlherm.com/webdoc/svg/pause.svg'
		}
	},
	ready() {
    let bar = document.querySelector('.progress-bar')
	let player = document.querySelector('.intro-audio')
    player.currentTime = 0
    player.play();
  		// Cursor position
		window.setInterval(function(){
			// Count the percentage passed
			let percent = (player.currentTime / player.duration) * 100
			// Update position of the line
			bar.style.transform = `translateX(${percent}%)`
		},100);
  },
	methods: {
	play : function(){
      let player = document.querySelector('.intro-audio')
      if (player.paused) {
        player.play()
        this.play_or_pause = 'http://jrlherm.com/webdoc/svg/pause.svg'
      }
      else {
        player.pause()
        this.play_or_pause ='http://jrlherm.com/webdoc/svg/play-button.svg'
      }
    },
	changeTime : function(event){
			let timeline = document.querySelector('.timeline')
			let bar = document.querySelector('.progress-bar')
			let player = document.querySelector('.intro-audio')
			// Count the percentage where the cursor is
			let percent = event.clientX / timeline.offsetWidth * 100
			player.currentTime = player.duration * percent/100
			bar.style.transform = `translateX(${percent}%)`;
		}
	}
}
</script>

<style lang="scss" scoped>
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
	    padding-top: 16%;
	    text-align: center;
	    font-size: 1.2rem;
	    line-height: 1.6rem;
	  }
	  a {
		  position: absolute;
		  top: 0px;
		  left: 0px;
		  width: 100px;
		  height: 100px;
		}

.play_button {
  right: 3vw;
}
.timeline{
    z-index: 5;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10px;
    background-color: grey;
    .progress-bar{
    	z-index: 10;
      	transition: all .2s cubic-bezier(0,1,1,1);
     	 position: absolute;
      	right: 100%;
      	width: 100%;
      	height: 100%;
      	background-color: white;
      /* transform: translateX(0%); */
    }
  }

</style>
