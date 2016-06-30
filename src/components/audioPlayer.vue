<template>
  <audio class="intro-audio" v-bind:src="src" autoplay type="audio/mpeg"></audio>
  <div class="all_time">
    <img class="play_button" v-bind:src="play_or_pause" alt="#" v-on:click="play"/>
    <div class="timeline" v-on:click="changeTime">
      <div class="line"></div>
    </div>
  </div>
</template>

<script scoped>
export default {
  data: function () {
    return {
      play_or_pause: 'http://jrlherm.com/webdoc/svg/pause.svg'
    }
  },
  props: ['src'],
  ready() {
		let line = document.querySelector('.timeline .line')
		let player = document.querySelector('.intro-audio')
		// Cursor position
		window.setInterval(function(){
			// Count the percentage passed
			let percent = (player.currentTime / player.duration) * 100
			// Update position of the line

			line.style.transform = `translateX(${percent}%)`
      if (player.currentTime >= player.duration)
        this.$router.route.go('/')
		},100);
    console.log(this);
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
			let line = document.querySelector('.timeline .line')
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
