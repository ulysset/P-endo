<template lang="html">
	<div class="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 160 }'>

    	<div class="grid-item grid-item--width2 grid-item--height2 block_1"></div>

    	<div class="grid-item grid-item--width3 grid-item--height2">
    		<video src="http://jrlherm.com/webdoc/videos/chemicals_2.mp4" class="video_1"></video>
    		</div>

    	<div class="grid-item grid-item--width4 grid-item--height3 block_2"></div>

    	<div class="grid-item grid-item--width5 grid-item--height3 block_3"></div>

    	<div class="grid-item grid-item--width5">
    		<video src="http://jrlherm.com/webdoc/videos/chemicals_1.mp4" class="video_2"></video>
    	</div>

    	<div class="grid-item grid-item--width3 grid-item--height2 block_4"></div>

    	<div class="grid-item grid-item--width5 grid-item--height2 block_5"></div>

    	<div class="grid-item grid-item--width3 grid-item--height2">
    		<video src="http://jrlherm.com/webdoc/videos/chemicals_3.mp4" class="video_3"></video>
    	</div>

    	<div class="grid-item grid-item--width4 grid-item--height2 block_6"></div>

	</div>
</template>

<script scoped>
import Masonry from 'masonry-layout'
var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 160
});


export default {
  data: function () {
    return {
    }
  }
}
</script>
<style lang="css" scoped>

* { box-sizing: border-box; }

body { font-family: sans-serif; }

/* ---- grid ---- */

.grid {
  background: #EEE;
  max-width: 100%;
}

/* clearfix */
.grid:after {
  content: '';
  display: block;
  clear: both;
}

/* ---- grid-item ---- */

.grid-item {
  width: 960px;
  height: 330px;
  float: left;
  overflow: hidden;
  background-color: black;
}

.grid-item--width2 { width: 960px; }
.grid-item--width3 { width: 640px; }
.grid-item--width4 { width: 320px; }
.grid-item--width5 { width: 480px; }
.grid-item--width6 { width: 480px; }


.grid-item--height2 { height: 330px; }
.grid-item--height3 { height: 660px; }

.block_1 {
	background-image: url("http://jrlherm.com/webdoc/photos/img2.jpg");
	background-repeat:no-repeat;
	background-size: 100% 100%;
}

.block_2 {
	background-image: url("http://jrlherm.com/webdoc/photos/img3.jpg");
	background-repeat:no-repeat;
	background-size: 100% 100%;
}

.block_3 {
	background-image: url("http://jrlherm.com/webdoc/photos/img4.jpg");
	background-repeat:no-repeat;
	background-size: 150% 100%;
}

.block_4 {
	background-image: url("http://jrlherm.com/webdoc/photos/img7.jpg");
	background-repeat:no-repeat;
	background-size: 100% 100%;
}

.block_5 {
	background-image: url("http://jrlherm.com/webdoc/photos/img5.jpg");
	background-repeat:no-repeat;
	background-size: 100% 100%;
}

.block_6 {
	background-image: url("http://jrlherm.com/webdoc/photos/img6.jpg");
	background-repeat:no-repeat;
	background-size: 100% 100%;
}

video {
	height: 100%;
	position: absolute;
	width: auto;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
}

</style>
