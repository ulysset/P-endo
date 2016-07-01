<template lang="html">
	<div class="container">
		<a v-link="{ path: '/video_experiment'}">Suite (vidéoexperiment)</a>
			<div class="cloud-images">
				<img class="cloud-image" v-for="cloudImage in cloudImages" track-by="$index" v-on:click="grow($index, $event)" :src="cloudImage.url" :style=" {'z-index': cloudImage.z, 'transform-origin': cloudImage.origin , 'transform' : 'translate(' + cloudImage.X + 'px,' + cloudImage.Y + 'px) scale(' + cloudImage.grow + ')' }" alt="" />
			</div>
			<p class="description" v-if="doShow(0)">Welcome my friend</p>
			<p class="description" v-if="doShow(1)">Welcome my </p>
			<p class="description" v-if="doShow(2)">Welcome my friends</p>
			<p class="description" v-if="doShow(3)">Welcome </p>
			<p class="description" v-if="doShow(4)">YO </p>
	</div>
	


</template>

<script scoped>
export default {
  data: function () {
    return {
			currentIndex : 0,
			cloudImages : [
				{ z: 2, grow: 2, origin : 'center',
				 X : 0-50, Y : 0-50,
				url : 'http://jrlherm.com/webdoc/photos/img_cellules.png'
				},
				{ z: 1, grow: 1, origin : 'top right',
				 X : 150-50, Y : -150-50,
				url : 'http://jrlherm.com/webdoc/photos/img_fonds_marins.png'
				},
				{ z: 1, grow: 1, origin : 'bottom left',
				 X : -150-50, Y : 150-50,
				url : 'http://jrlherm.com/webdoc/photos/img_grenouille.png'
				},
				{ z: 1, grow: 1, origin : 'top left',
				 X : -150-50, Y : -150-50,
				url : 'http://jrlherm.com/webdoc/photos/img_tubes_a_essais.png'
				},
				{ z: 1, grow: 1, origin : 'bottom right',
				 X : 150-50, Y : 150-50,
				url : 'http://jrlherm.com/webdoc/photos/img_usine.png'
				},
			],
    }
  },
  ready: function () {},
  methods: {
		// Grow the clicked picture and reduce the others, the clicked picture become the top one
		grow: function(index, event){
			for (let i = 0; i < this.cloudImages.length ; i++){
				this.cloudImages[i].grow = 1
				this.cloudImages[i].z = 1
			}
			this.cloudImages[index].grow = 2
			this.cloudImages[index].z = 2
			this.currentIndex = index
		},
		// Show the good description according to the image
		doShow: function(index){
			if (this.currentIndex == index) {
				return true
			}else {
				return false;
			}
		},
	},
  components: {}
}
</script>

<style lang="scss" scoped>
.container{
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 100%;

	background-color: white;
	.cloud-images{
		flex: 1 1;
		background-color: red;
		min-width: 400px;
		min-height: 400px;
		position: relative;
		.cloud-image{
			position: absolute;
			left: 45%;
			top: 50%;
			transition: all .2s ease-in;
			width: 150px;
			cursor: pointer;
		}
	}
	.description{
		flex: 1 1;
		min-width: 400px;
		min-height: 400px;
		padding: 50px;
		background-color: grey;
	}
}
</style>
