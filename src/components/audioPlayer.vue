<template>
  <audio class="intro-audio" v-bind:src="src" autoplay type="audio/mpeg"></audio>
  <div class="all_time">
    <img class="play_button" v-bind:src="play_or_pause" alt="Play or Pause Sound" v-on:click="play"/>
    <div class="timeline" v-on:click="changeTime">
      <div class="progress-bar"></div>
    </div>
  </div>
</template>

<script scoped>
import VueRouter from 'vue-router'

export default {
  data: function () {
    return {
      play_or_pause: 'http://jrlherm.com/webdoc/svg/pause.svg'
    }
  },
  props: ['src'],
  ready() {
		let bar = document.querySelector('.progress-bar')
		let player = document.querySelector('.intro-audio')
    player.currentTime = 0
		// Cursor position
		window.setInterval(function(){
			// Count the percentage passed
			let percent = (player.currentTime / player.duration) * 100
			// Update position of the line
			bar.style.transform = `translateX(${percent}%)`
		},100);
	},
  methods : {
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
	},
  components: {}
}
</script>

<style lang="scss" scoped>

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
