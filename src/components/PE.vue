<template>
  <div class="container">
    <ul class="menu">
      <li v-for="listItem in list" track-by="$index" v-on:click="changeSection($index, $event)">
        {{listItem}} {{$index}}
      </li>
    </ul>
    <div class="content">
      <div class="contentItem" v-if="doShow(0)">Yo je suis le numero 0</div>
      <div class="contentItem" v-if="doShow(1)">Yo je suis le numero 1</div>
      <div class="contentItem" v-if="doShow(2)">Yo je suis le numero 2</div>
      <div class="contentItem" v-if="doShow(3)">Yo je suis le numero 3</div>
    </div>
  </div>
</template>

<script scoped>
export default {
  data: function () {
    return {
      currentIndex : 0,
      list : [
        'Qu\'est-ce que c\'est',
        'Qu\'est-ce que c\'est',
        'Qu\'est-ce que c\'est',
        'Qu\'est-ce que c\'est',
      ]
    }
  },
  ready: function () {},
  methods: {
    changeSection: function(index, event){
      this.currentIndex = index
    },
    doShow: function(index = 0){
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
  ul.menu{
    flex: 1 1;
    color: white;
    height: 100%;
    background-color: blue;
    display: flex;
    flex-flow: column wrap;
    li{
      flex: 1 1;
      display: flex;
      justify-content: center;
      align-items : center;
      border: 1px solid red;
    }
  }
  .content{
    background-color: red;
    flex: 5 1;
  }
}
</style>
