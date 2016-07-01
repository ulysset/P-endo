<template lang="html">
	<div class="container">
		<a v-link="{ path: '/video_experiment'}">Continuer</a>
			<div class="cloud-images">
				<img v-for="cloudImage in cloudImages" class="cloud-image {{ cloudImage.theclass }}" track-by="$index" v-on:click="grow($index, $event)" :src="cloudImage.url" :style=" {'z-index': cloudImage.z, 'transform-origin': cloudImage.origin , 'transform' : 'translate(' + cloudImage.X + 'px,' + cloudImage.Y + 'px) scale(' + cloudImage.grow + ')' }" alt="" />
			</div>
			<p class="description" v-if="doShow(0)">
				Féminisation des poissons, des animaux marins ainsi que des souris. Nous retrouvons des grenouilles femelles avec des organes génitaux masculins
			</p>
			<p class="description" v-if="doShow(1)">
				On retrouve des hormones féminines dans la nature. Il y a moins de testostérones chez les espèces analysés, et beaucoup d'oestrogène. On tend vers une féminisation des espèces
			</p>
			<p class="description" v-if="doShow(2)">
				Diminution de la distance ano-génitale, de la taille du pénis et malformations génitales observés chez la souris ainsi que chez l’homme
			</p>
			<p class="description" v-if="doShow(3)">
				Stations d’épurations défaillantes sans traitements de médicaments ou produits chimiques. Cela implique un énorme impact sur beaucoup d’espèces animales ainsi que chez les humains
			</p>
			<p class="description" v-if="doShow(4)">
				Tout ces constats entraînent une infertilité chez beaucoup d’espèces, cela sonne comme un avertissement pour nous !  Mais alors pourquoi ? 
			</p>
	</div>
	


</template>

<script scoped>
export default {
  data: function () {
    return {
			currentIndex : 0,
			cloudImages : [
				{ z: 1, grow: 1, origin : 'center',
				 X : -150-50, Y : 150-50,
				url : 'http://jrlherm.com/webdoc/photos/img_grenouille.png',
				theclass : 'img3'
				},
				{ z: 1, grow: 1, origin :'center',
				 X : 150-50, Y : -150-50,
				url : 'http://jrlherm.com/webdoc/photos/img_fonds_marins.png',
				theclass : 'img2'
				},
				{ z: 1, grow: 1, origin :'center',
				 X : -150-50, Y : -150-50,
				url : 'http://jrlherm.com/webdoc/photos/img_tubes_a_essais.png',
				theclass : 'img4'
				},
				{ z: 1, grow: 1, origin : 'center',
				 X : 150-50, Y : 150-50,
				url : 'http://jrlherm.com/webdoc/photos/img_usine.png',
				theclass : 'img5'
				},
				{ z: 2, grow: 2, origin : 'center',
				 X : 0-50, Y : 0-50,
				url : 'http://jrlherm.com/webdoc/photos/img_cellules.png',
				theclass : 'img1'
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
			this.cloudImages[index].grow = 1.5
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
a {
	position: absolute;
	text-transform: uppercase;
	bottom: 5%;
	right: 5%;
	text-decoration: none;
	color: white;
	font-family: "Montserrat",sans-serif;
}
.container{
	display: flex;
	/* flex-flow: row wrap;*/
	/* justify-content: space-around; */
	align-items: center;
	width: 100%;
	height: 100%;
	background-image: url('../assets/images/bg_home.png');
	background-color: white;
	.cloud-images{
		/*flex: 1 1;*/
		/* background-color: red; */
		width: 50vw;
		height: 40vh;
		position: relative;
		.cloud-image{
			position: absolute;
			/*left: 45%;
			top: 50%;
			transition: all .2s ease-in; */
			width: 200px;
			cursor: pointer;
			transition: all 0.3s ease;
		}
	}
	.description{
		/* flex: 1 1; */
		width: 30vw;
		height: 40vh;
		padding: 50px;
		/* background-color: grey; */
		font-family: "Lora", serif;
		font-size: 1.2rem;
		color: white;
	}

	.img1{
		bottom: -75%;
		right: 5%;
	}
	.img2{
		bottom: -45%;
		right: 12%;
	}
	.img3{
		top: -45%;
		right: -5%;
	}
	.img4{
		top: 90%;
		left: 55%;
	}
	.img5{
		bottom: 5%;
		right: 55%;
	}
}
</style>
