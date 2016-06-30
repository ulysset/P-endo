<template>
  <audio class="intro-audio" v-bind:src="src" autoplay type="audio/mpeg"></audio>
  <div class="timeline" v-on:click="changeTime">
    <div class="line"></div>
  </div>
</template>

<script scoped>
export default {
  data: function () {
    return {
    }
  },
  props: ['src'],
  ready() {
		let line = document.querySelector('.line')
		let player = document.querySelector('.intro-audio')
		// Cursor position
		window.setInterval(function(){
			// Count the percentage passed
			let percent = (player.currentTime / player.duration) * 100
			// Update position of the line
			line.style.transform = `translateX(${percent}%)`
		},100);
	},
  methods : {
		play : function(){
			let player = document.querySelector('.intro-audio')
			player.play()
		},
		pause : function(){
			let player = document.querySelector('.intro-audio')
			player.pause()
		},
		changeTime : function(event){
			let timeline = document.querySelector('.timeline')
			let line = document.querySelector('.line')
			let player = document.querySelector('.intro-audio')
			// Count the percentage where the cursor is
			let percent = event.clientX / timeline.offsetWidth * 100
			player.currentTime = player.duration * percent/100
			line.style.transform = `translateX(${percent}%)`;
		}
	},
  components: {}
}
</script>

<style lang="scss" scoped>
video.intro-audio{
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
