<template lang="html">
	<div class="content" transition="fade">
		<video class="intro-video" preload="auto">
			<source src="http://jrlherm.com/webdoc/videos/experiment.mp4" type="video/mp4">
		</video>
		<img class="play_button" v-bind:src="play_or_pause" alt="#" v-on:click="play"/>
		<a class="passer" v-link="{ path: '/chiffres_chimique'}">Passer</a>
		<div class="timeline" v-on:click="changeTime">
			<div class="line"></div>
		</div>
	</div>

</template>

<script scoped>
export default {
  data () {
    return {
    	play_or_pause: 'http://jrlherm.com/webdoc/svg/pause.svg'
    }
  },
	methods : {
		play : function(){
			let player = document.querySelector('.intro-video')
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
			let line = document.querySelector('.timeline .line')
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
		player.play()
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
	.timeline{
		cursor: pointer;
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 10px;
		background-color: grey;
		.line{
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
