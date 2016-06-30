<template>
  <div class="container" v-bind:style="{ 'background-image': 'url(' + currentBackground + ')' }">
    <ul class="menu">
      <li class="listItem" v-for="listItem in list" track-by="$index" v-on:click="changeSection($index, $event)">
        {{listItem}}
      </li>
    </ul>
    <div class="content">
      <div class="contentItem" v-if="doShow(0)" transition="slide">
        <h2>Les Perturbateurs Endocriniens</h2>
        <h3>Qu'est-ce donc?</h3>
        <p></p>
      </div>
      <div class="contentItem" v-if="doShow(1)" transition="slide">Yo je suis le numero 1</div>
      <div class="contentItem" v-if="doShow(2)" transition="slide">Yo je suis le numero 2</div>
      <div class="contentItem" v-if="doShow(3)" transition="slide">Yo je suis le numero 3</div>
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
      return 'http://jrlherm.com/webdoc/photos/bg_pe_${this.currentIndex + 1}.jpg'
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
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    min-width: 100px;
    li{
      flex: 1 1;
      display: flex;
      justify-content: center;
      align-items : center;
      text-align: center;
      padding: 5px;
      font-size: .7rem;
      background-color: rgba(0, 0, 0, .2);
      color: white;
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
</style>
