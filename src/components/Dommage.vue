<template lang="html">
	<div class="content" transition="fade">
	    <div class="hello">
	      <h2>Quoi qu'il en soit ...</h2>
	      <h1>Vous n'en aurez pas.</h1>
	    </div>
  		<a v-link="{ path: '/video_intro'}">La suite...</a>
			<audio class="intro-audio2" src="http://jrlherm.com/webdoc/audio/intro_part2.mp3" type="audio/mpeg"></audio>
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
import VueRouter from 'vue-router'

Vue.component('audioplayer', require('./audioPlayer'))
export default {
	data(){
		return{
			play_or_pause: 'http://jrlherm.com/webdoc/svg/pause.svg'
		}
	},
	ready() {
		let bar = document.querySelector('.progress-bar')
		let player2 = document.querySelector('.intro-audio2')
		player2.play()
    let router = new VueRouter()
    player2.onended= function(){
			router.go({path:'/video_intro'})
		}
		// Cursor position
		window.setInterval(function(){
			// Count the percentage passed
			let percent = (player2.currentTime / player2.duration) * 100
			// Update position of the line
			bar.style.transform = `translateX(${percent}%)`
		},100);
	},
	methods: {
		play : function(){
			let player2 = document.querySelector('.intro-audio2')
			if (player2.paused) {
				player2.play()
				this.play_or_pause = 'http://jrlherm.com/webdoc/svg/pause.svg'
			}
			else {
				player2.pause()
				this.play_or_pause ='http://jrlherm.com/webdoc/svg/play-button.svg'
			}
		},
		changeTime : function(event){
			let timeline = document.querySelector('.timeline')
			let bar = document.querySelector('.progress-bar')
			let player2 = document.querySelector('.intro-audio2')
			// Count the percentage where the cursor is
			let percent = event.clientX / timeline.offsetWidth * 100
			player2.currentTime = player2.duration * percent/100
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
			transition: all .2s ease-in;
		  bottom: 70px;
		  right: 10px;
			padding: 20px;
			background: rgba(0, 0, 0, .3);
			border-radius: 5%;
			color: white;
			font-family: 'Montserrat', sans-serif;
			&:hover{
				background: rgba(0, 0, 0, .6);
			}
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
