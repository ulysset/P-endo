<template>
  <div class="container" v-bind:style="{ 'background-image': 'url(' + currentBackground + ')' }">
    <ul class="menu">
      <li class="listItem" v-for="listItem in list" track-by="$index" v-on:click="changeSection($index, $event)">
        <p>{{listItem}}</p>
      </li>
      <a v-link="{path: '/societe'}">
        <li class="listItem">
          CONTINUER
        </li>
      </a>
    </ul>
    <div class="content">
      <div class="contentItem" v-if="doShow(0)" transition="slide">
        <h1>Les Perturbateurs Endocriniens</h1>
        <div class="part part1">
          <h3>Qu'est-ce donc?</h3>
          <p>Un Perturbateur Endocrinien (PE) est, selon l’Organisation Mondiale de la Santé (OMS), une substance chimique d’origine naturelle ou synthétique, étrangère à l’organisme et susceptible d’interférer avec le fonctionnement du système endocrinien, c’est-à-dire des cellules et organes impliqués dans la production des hormones et leur action sur les cellules dites « cibles » via des récepteurs.</p>
        </div>
        <div class="part part2">
          <h3>Impact</h3>
          <p>On a découert que ces PE ont un énorme impact sur notre système hormonal et causent de multiples maladies comme le cancer du sein, du vagin, des ovaires, de l’utérus, des testicules mais aussi des malformations génitales, le tout pouvant amener à l’infertilité.</p>
        </div>
        <div class="citation">
          <p>Le risque est d’autant plus grand avec les cocktails de perturbateurs endocrinien.</p>
        </div>
      </div>

      <div class="contentItem" v-if="doShow(1)" transition="slide">
        <h1>Les Perturbateurs Endocriniens</h1>
        <video class="science-pe" preload="auto" controls>
          <source src="http://jrlherm.com/webdoc/videos/explanation_scientificly.mp4" type="video/mp4">
        </video>
      </div>

      <div class="contentItem" v-if="doShow(2)" transition="slide">
        <h1>Les Perturbateurs Endocriniens</h1>
        <div class="part part1">
          <h3>Où les trouve t-on ?</h3>
          <p>Nous retrouvons les perturbateurs endocriniens dans tout nos objets du quotidiens. Que ce soit dans les plastique, les objets électroménagers, le mobiliers, les textiles etc. Il est impossible de les éviter. Ces molécules chimiques s’appellent “Phtalates”, “Bisphénol A”,  “Paraben” ou encore “PBDE”</p>
        </div>
        <div class="part part2">
          <h3>Sources d'exposition</h3>
          <p>L’ingestion : par l’alimentation et par l’eau du fait de la migration des PE depuis l’emballage des denrées alimentaires, des résidus hormonaux dans les denrées alimentaires, des résidus de pesticides dans les céréales et les végétaux et par la contamination des sols de cultures. </br>L’inhalation : par l’air et du fait de certains produits industriels (pesticides, produits de consommation courante, produits cosmétiques, etc.)</p>
        </div>
        <video class="trouver" preload="auto" controls>
          <source src="http://jrlherm.com/webdoc/videos/ou_les_trouve_on.mp4" type="video/mp4">
        </video>
      </div>

      <div class="contentItem" v-if="doShow(3)" transition="slide">
        <h1>Les Perturbateurs Endocriniens</h1>
        <h3>Les tests en labo</h3>
        <div class="part part1">
          <p>On administre du DEHP et du DBP (molécules chimiques et également du coup des perturbateurs endocriniens) à la mère souris, le bébé mâle a des modifications du système génital (distance anogénitale réduite, pénis plus court et/ou mal formé, des testicules non descendus) entraînant chez lui des problèmes de fertilité et une réduction du nombre de spermatozoïdes</p>
          <video class="rats-pe" preload="auto" controls>
            <source src="http://jrlherm.com/webdoc/videos/rats.mp4" type="video/mp4">
          </video>
        </div>
        <div class="part part2">
          <p>Les escargots que l’on trouve sur les plages, au bord de l’eau dans les zones où on retrouve des PE on perdus toute fertilité et on disparu des bords de mer (ce n’est pas arrivé dans les zones sans PE). Après retrait des PE,  les populations d’escargots sont réapparues et se reproduisaient environ un après le retrait des PE de leur environnement.</p>
          <video class="escargots-pe" preload="auto" controls>
            <source src="http://jrlherm.com/webdoc/videos/escargots.mp4" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  data: function () {
    return {
      currentIndex : 0,
      list : [
        'QU\'EST-CE QUE C\'EST',
        'SCIENTIFIQUEMENT PARLANT',
        'OÙ LES TROUVE T-ON',
        'TEST EN LABORATOIRE'
      ]
    }
  },
  computed: {
    currentBackground: function() {
      let temp = 'http://jrlherm.com/webdoc/photos/bg_pe_' + (this.currentIndex + 1) +'.jpg'
      console.log(temp)
      return temp
    },
    doDark: function (index) {
      if (index == this.currentIndex) {
        return true
      }else {
        return false
      }
    }
  },
  ready: function () {},
  methods: {
    changeSection: function(index, event){
      // Change Current Index to change Slide
      this.currentIndex = index
      let listItem = document.querySelectorAll('.listItem')

      // remove any dark bg
      for (let i = 0; i < this.list.length; i++) {
        listItem[i].classList.remove('darkBack')
      }
      // darken the clicked one
      listItem[index].classList.add('darkBack')
    },
    doShow: function(index = 0, event){

      if(this.currentIndex == index){
        return true
      }else {
        return false
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  background-image: url('http://jrlherm.com/webdoc/photos/bg8.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  ul.menu{
    flex: 1 1;
    color: white;
    height: 100vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    width: 200px;
    li{
      flex: 1 1;
      /* display: flex;
      justify-content: space-between;
      flex-direction: row;*/
      align-items : center;
      cursor: pointer;
      padding: 5px;
      background-color: rgba(0, 0, 0, .2);
      color: white;
      font-family: "Montserrat", sans-serif;
      font-size: 15px;
      text-align: left;
      p{
        margin-top: 30%;
      }
    }
  }
  .content{
    flex: 5 1;
    overflow: scroll;
    .contentItem{
      color: white;
    }
  }
}
.slide-transition{
  transition: all .6s ease-out;
  opacity: 1;
  display: block;
  transform: translateY(0);
}
.slide-enter{
  opacity: 0;
  transform: translateY(5%);
}
.slide-leave{
  opacity: 0;
  display: none;
}
.darkBack{
  background-color: rgba(0, 0, 0, .6) !important;
}
h1{
  font-size: 2rem;
  line-height: 2.5rem;
  width: 36vw;
  text-align: right;
  position: absolute;
  top: 2vh;
  right: 2vw;
}
h3 {
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
}

.part{
  width: 45vw;
}

.part p {
  background-color: rgba(0,0,0,0.4);
  padding: 15px;
  margin-left: 20px;
  text-align: center;
  font-family: "Source", sans-serif;
  font-size: 0.9rem;
}

.part1 {
  padding-top: 20%;
  margin-left: 5vw;
}

.part2{
  padding-top: 5%;
  margin-left: 30vw;
}

.citation {
  font-family: "Lora", serif;
  width: 20vw;
  font-size: 1.3rem;
  line-height: 2rem;
  position: absolute;
  left: 5vw;
  bottom: -10vh;
}

video {
  position: absolute;
}

video.trouver{
  width: 25vw;
  bottom: -5vh;
  left: 5vw;
}

video.science-pe {
  width: 60vw;
  left: 10vw;
  bottom: -80vh;
}

video.escargots-pe {
  width: 25vw;
  left: 5vw;
  bottom: -5vh;
}

video.rats-pe {
  right: 5vw;
  top: 30vh;
  width: 25vw;
}

</style>
