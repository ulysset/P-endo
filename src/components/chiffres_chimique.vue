<template lang="html">
	<div class="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 160 }'>

    	<div class="grid-item grid-item--width2 grid-item--height2 block_1">
    		<span>
    			<h1 class="title">500 MILLIONS</h1>
    			<h2 class="subtitles">de tonnes de produits <br>chimiques produits en 2005</h2>
    		</span>
    		<span>
    			<img src="http://jrlherm.com/webdoc/svg/justice-scale.svg" class="image_justice">
    		</span>
    		<span class="position">
    			<h1 class="title_2">1 MILLION</h1>
    			<h2 class="subtitles_2">de tonnes de produits <br>chimiques produits avant <br> la seconde guerre mondiale</h2>
    		</span>
    	</div>

    	<div class="grid-item grid-item--width3 grid-item--height2" class="video">
    		<video src="http://jrlherm.com/webdoc/videos/chemicals_2.mp4" class="video_1" loop preload="none"  onmouseover="this.play()" onmouseout="this.pause()" onclick="this.play()" ondbclick="this.pause()"></video>
    	</div>

    	<div class="grid-item grid-item--width4 grid-item--height3 block_2">
    		<img src="http://jrlherm.com/webdoc/svg/question-mark-button.svg" class="image_question">
    		<h1 class="title_3">85 000 <br>SUBSTANCES<br> CHIMIQUES</h1>
    		<h2 class="subtitles_3">dont on ne connaît pas les <br> répercutions sur les êtres <br>vivants</h2>

    	</div>

    	<div class="grid-item grid-item--width5 grid-item--height3 block_3">
    		<img src="http://jrlherm.com/webdoc/svg/warning.svg" class="image_warning">	
			<h1 class="title_4">200<br>PRODUITS<br>CHIMIQUES</h1>
			<h2 class="subtitles_4">dans le sang qui ne<br>sont pas censés se<br>trouver là</h2>
    	</div>

    	<div class="grid-item grid-item--width5">
    		<video src="http://jrlherm.com/webdoc/videos/chemicals_1.mp4" class="video_2"  onmouseover="this.play()" onmouseout="this.pause()"></video>
    	</div>

    	<div class="grid-item grid-item--width3 grid-item--height2 block_4"></div>

    	<div class="grid-item grid-item--width5 grid-item--height2 block_5">
    	<h1 class="title_5">"On a construit ce monde en pensant que tout était innocent jusqu'à preuve du contraire"</h1>
    	<h2 class="subtitles_5">Phillipe Grandjean</h2>
    	</div>

    	<div class="grid-item grid-item--width3 grid-item--height2">
    		<video src="http://jrlherm.com/webdoc/videos/chemicals_3.mp4" class="video_3"  onmouseover="this.play()" onmouseout="this.pause()"></video>
    	</div>

    	<div class="grid-item grid-item--width4 grid-item--height2 block_6">
			<img src="http://jrlherm.com/webdoc/svg/right-arrow.svg" class="image_continu">

    	</div>

	</div>
</template>

<script scoped>
import Masonry from 'masonry-layout'



export default {
  data: function () {
    return {
    }
  },
  ready: function() {
  	var elem = document.querySelector('.grid');
	var msnry = new Masonry( elem, {
  	// options
 	itemSelector: '.grid-item',
  	columnWidth: 160
	});
  }
}

</script>
<style lang="css" scoped>

* { box-sizing: border-box; }

body { font-family: sans-serif; }

/* ---- grid ---- */

.grid {
  background: black;
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
	background-size: 100% 120%;
}

.block_5 {
	background-image: url("http://jrlherm.com/webdoc/photos/img5.jpg");
	background-repeat:no-repeat;
	background-size: 100% 100%;
}

.block_6 {
	background-image: url("http://jrlherm.com/webdoc/photos/img6.jpg");
	background-repeat:no-repeat;
	background-size: 150% 100%;
}

.title {
	color: white;
	font-size: 40px;
	margin-top: 80px;
	margin-bottom: 40px;
	margin-left: 40px;
}

.subtitles {
	color: white;
	font-size: 25px;
	margin-left: 40px;
	margin-bottom: 20px;
	line-height : 10px;
	line-height : 2;

}

.position {
	position: absolute;
	top:0;
	right: 0;
}

.title_2 {
	color: white;
	font-size: 40px;
	margin-top: 80px;
	margin-bottom: 20px;
	margin-right: 150px;
}

.subtitles_2 {
	color: white;
	font-size: 23px;
	line-height : 10px;
	line-height : 2;
	
}

.image_justice{
	height: 20%;
	width:20%;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
}

.image_question	{
	height: 40%;
	width: 40%;
	position: absolute;
	left: 50%;
	top: 15%;
	transform: translate(-50%,-50%);
}

.title_3 {
	position: absolute;
	top: 30%;
	left: 5%;
	color: white;
	font-size: 40px;
}

.subtitles_3 {
	position: absolute;
	top: 50%;
	left: 5%;
	color: white;
	font-size: 18px;
	line-height : 10px;
	line-height : 2;
}

.image_warning	{
	height: 30%;
	width: 30%;
	position: absolute;
	left: 45%;
	top: 15%;
	transform: translate(-50%,-50%);
}

.title_4 {
	position: absolute;
	top: 35%;
	left: 5%;
	color: white;
	font-size: 40px;
}

.subtitles_4 {
	position: absolute;
	top: 60%;
	left: 5%;
	color: white;
	font-size: 22px;
	line-height : 10px;
	line-height : 2;
}

.title_5 {
	position: absolute;
	top: 25%;
	left: 5%;
	color: white;
	font-size: 20px;
}

.subtitles_5 {
	position: absolute;
	top: 60%;
	left: 5%;
	color: white;
	font-size: 22px;
	line-height : 10px;
	line-height : 2;
}

.image_continu	{
	height: 40%;
	width: 40%;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
}

@media only screen and (max-width: 930px) {
	div {
		width: 100%;
		/* padding-bottom: 20px; */
	}
}

video {
	height: 100%;
	position: absolute;
	width: auto;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
}
video::-webkit-media-controls {
    display:none !important;
}		 
</style>
