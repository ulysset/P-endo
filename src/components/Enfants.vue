<template>
  <div class="content" transition="fade">
    <div class="hello">
      <h1>Combien d'enfants</h1>
      <h2>souhaiteriez-vous avoir ?</h2>
    </div>
    <a v-link="{ path: '/dommage'}"></a>
    <div class="choice">
      <ul>
        <li class="child" v-for="child in children" track-by="$index" v-on:click="selectNumber($index, $event)">
          {{$index}}
        </li>
      </ul>
      <svg class="svg-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 46.44" >
        <polyline class="beat" points="0 33.57 575 33.57 585 3.57 595 43.57 600 33.57 1280 33.57"/>
      </svg>
    </div>
     <audio class="intro-audio" src="http://jrlherm.com/webdoc/audio/intro_part1.mp3" type="audio/mpeg"></audio>
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
  data () {
    return {
      children: new Array(7),
      play_or_pause: 'http://jrlherm.com/webdoc/svg/pause.svg'
    }
  },
  ready() {
    let bar = document.querySelector('.progress-bar')
		let player = document.querySelector('.intro-audio')
    player.currentTime = 0
    player.play();
    let router = new VueRouter()
    player.onended= function(){
			router.go({path:`/temp`})
		}
		// Cursor position
		window.setInterval(function(){
			// Count the percentage passed
			let percent = (player.currentTime / player.duration) * 100
			// Update position of the line
			bar.style.transform = `translateX(${percent}%)`
		},100);
  },
  methods: {
    selectNumber: function (index, event) {
      let child = document.querySelectorAll('.child')

      // remove any grown text
      for (let i = 0; i < this.children.length; i++) {
        child[i].classList.remove('grow')
      }
      // grow the clicked one
      child[index].classList.add('grow')

      // translate the SVG the desired place
      let delta = child[1].offsetLeft - child[0].offsetLeft
      document.querySelector('.svg-line').style.transform = `translateX(${index * delta - 488}px)`
    },
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


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content{
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/bg_home.png');
    background-size: cover;
    color: white;
  }
h1{
    padding-top: 16%;
    text-align: center;
    font-size: 3.5rem;
  }
  h2 {
    padding-top: 1%;
    text-align: center;
    font-size: 1.5rem;
  }

svg.svg-line{
  position: absolute;
  top: 110px;
  left: -350px;
  width: 2000px;
  transition: all .3s ease-in-out;
  .beat{
    fill:none;
    stroke:white;
    stroke-miterlimit:10;
    stroke-width:1px;
  }
}

.choice{
  position: relative;
  width: 90%;
  max-width: 1000px;
  height: 300px;
  padding-top: 50px;
  margin: auto;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  ul{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 85%;
    margin: auto;
    li.child{
      transition: all .3s ease-out;
      cursor: pointer;
      padding: 10px;
      user-select: none;
    }
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

.child {
  opacity: 0.5;
}

.grow{
  opacity: 1;
  transform: scale(2.5);

}

.fade-transition {
  transition: all .3s ease-out;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
}
.fade-enter{
  opacity: 0;
  display: block;
  transform: translateY(100px);

}
.fade-leave {
  visibility: hidden;
  opacity: 0;
  display: none;
}

a {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100px;
  height: 100px;
}

</style>
