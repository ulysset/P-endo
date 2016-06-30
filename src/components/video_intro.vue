<template lang="html">
	<div class="content" transition="fade">
		<video class="intro-video" preload="auto" autoplay="true" >
			<source src="http://jrlherm.com/webdoc/videos/introduction.mp4" type="video/mp4">
		</video>
		<img class="play-button" src="#" alt="#" v-on:click="play"/>
		<img class="pause-button" src="#" alt="#" v-on:click="pause"/>
		<div class="timeline" v-on:click="changeTime">
			<div class="line"></div>
		</div>
  	<a v-link="{ path: '/'}">Home</a>
		<a v-link="{ path: '/maladies'}">Maladies</a>
	</div>

</template>

<script scoped>
export default {
  data () {
    return {
    }
  },
	methods : {
		play : function(){
			let player = document.querySelector('.intro-video')
			player.play()
		},
		pause : function(){
			let player = document.querySelector('.intro-video')
			player.pause()
		},
		changeTime : function(event){
			let timeline = document.querySelector('.timeline')
			let line = document.querySelector('.line')
			let player = document.querySelector('.intro-video')
			// Count the percentage where the cursor is
			let percent = event.clientX / timeline.offsetWidth * 100
			player.currentTime = player.duration * percent/100
			line.style.transform = `translateX(${percent}%)`;

		}
	},
	ready() {
		let line = document.querySelector('.line')
		let player = document.querySelector('.intro-video')
		// Cursor position
		window.setInterval(function(){
			// Count the percentage passed
			let percent = (player.currentTime / player.duration) * 100
			// Update position of the line
			line.style.transform = `translateX(${percent}%)`
		},100);
	}
}



</script>

<style lang="scss" scoped>
	video.intro-video{
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
	.play-button{
		width: 50px;
		height: 50px;
		background-color: red;
		position: absolute;
		left: 50%;
		right: 50%;
	}
	.pause-button{
		width: 50px;
		height: 50px;
		background-color: red;
		position: absolute;
		left: 0;
		right: 50%;
	}
	.timeline{
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 30px;
		background-color: lightcyan;
		.line{
			transition: all .1s ease-in;
			position: absolute;
			right: 100%;
			width: 100%;
			height: 100%;
			background-color: red;
	    transform: translateX(0%);
		}
	}
</style>
