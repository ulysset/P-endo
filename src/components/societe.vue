<template>
<div class="wrapper">
  <h1 class="title">Phénomène de société</h1>

    <div class="block block_1" v-on:mouseover="mouseOver('block_1')"><p>Les perturbateurs endocrinien sont une bombe à retardement qui explose bien après qu’on y soit forts exposés en étant foetus. L’affaire du Distilbène en est un bon exemple. Le médicament anciennement administré aux femmes pour réduire les risques de fausses couches a provoqué chez les filles de ces dernières une augmentation des risques de cancer du vagin. </p></div>

    <div class="block block_2" v-on:mouseover="mouseOver('block_2')">En 2006 la Commission Européenne en charge du problème des produits chimiques a démarré une procédure de réglementation sur les pesticides. Aujourd’hui, malgré la reconnaissance de l’urgence d’identification de ces molécules et la mise en place de normes pour interdire ou limitée certains produits à la consommation, la situation reste inchangée.</div>

    <div class="block block_3" v-on:mouseover="mouseOver('block_3')">“Le lobby de l’industrie de la chimie en Europe c’est 6 millions d’euros dépensés chaque année.”</div>

    <div class="block block_4" v-on:mouseover="mouseOver('block_4')"> 
      <video controls src="http://jrlherm.com/webdoc/videos/lobby_ecpa.mp4"></video> 
    </div>
    <div class="block block_5" v-on:mouseover="mouseOver('block_5')"> 
      <video controls src="http://jrlherm.com/webdoc/videos/lobby_reglementation.mp4"></video> 
    </div>
    <div class="block block_6" v-on:mouseover="mouseOver('block_6')">Un lobbying des gouvernements, des entreprises et des associations est perceptible. L’’ECPA (Aassociation européenne pour la protection des cultures) défend clairement l’utilisation des pesticides comme étant sans effets pour la santé et identité aux perturbateurs naturels.</div>
    <div class="block block_7"  v-on:mouseover="mouseOver('block_7')">Aujourd’hui, on a remarqué que le taux de productivité de l’agriculture biologique sans pesticide était supérieur à l’agriculture utilisant les produits chimiques. Cependant, le coût de réorganisation et de restructuration freinent les entreprises agricoles.</div>
    <div class="block block_8"  v-on:mouseover="mouseOver('block_8')">Aujourd’hui, le débat entre l’utilisation ou non des produits chimiques fait rage dans la communauté scientifiques. C’est un sujet important au niveau politique et industriel. Il y a donc beaucoup de partis impliqués prônant chacun la version qui les avantages. </div>
</div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  methods: {
    mouseOver : function (name_class){
      let div = document.querySelector('.'+name_class);
      let divs = document.querySelectorAll('.block');
      for (let i = 0; i < divs.length; i++) {
        divs[i].classList.remove('hover')
      }
      div.classList.add('hover')
    }
  }
}
</script>

<style lang="css" scoped>

.wrapper {
  color: white;
  background-image: url('../assets/images/bg_home.png');
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
}

.title {
  font-size: 2.5rem;
  position: absolute;
  top: 5vh;
  right: 5vw;
  text-transform: uppercase;
}

.block{
  background-color: rgba(0,0,0,0.5);
  padding: 20px;
  position: absolute;
  transition: all 0.3s ease;
}

.block.hover{
  z-index: 5;
  transform: scale(1.3);
  background-color: rgba(0,0,0,0.8);
}

.block_1 {
  width: 45vw;
  right: 10vw;
  top: 15vh;
}

.block_2 {
  width: 32vw;
  left: 4vw;
  bottom: 40vh;
}

.block_3 {
  width: 12vw;
  right: 10vw;
  bottom: 40vh;
  font-size: 1rem;  
  line-height: 1.5rem;
  font-family: "Lora", sans-serif;
}

.block4 video {
  width: 35vw;
}

.block_4 {
 left: 42vw;
 top:38vh;
}

.block_5 {
  left: 10vw;
  bottom: 10vh;
}
.block5 video {
  width: 18vw;
}

.block_6 {
    width: 40vw;
    right: 2vw;
    bottom: 15vh;
}

.block_7 {
    width: 30vw;
    left: 6vw;
    top: 6vh;
}

.block_8 {
  width: 70vw;
  left: 10vw;
  bottom: 3vh;
}

</style>