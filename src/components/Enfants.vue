<template>
  <div class="content" transition="fade">
    <div class="hello">
      <h1>Combien souhaitez-vous d'enfants?</h1>
    </div>
    <a v-link="{ path: '/'}">Home</a>
    <a v-link="{ path: '/bar'}">Bar</a>
    <div class="choice">
      <ul>
        <li class="child" v-for="child in children" track-by="$index" v-on:click="selectNumber($index, $event)">
          {{$index + 1 }}
        </li>
      </ul>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 46.44"  class="line">
        <polyline class="beat" points="0 33.57 575 33.57 585 3.57 595 43.57 600 33.57 1280 33.57"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Foo!',
      children: new Array(6)
    }
  },
  methods: {
    selectNumber: function (index, event) {
      let child = document.querySelectorAll('.child')
      for (let i = 0; i < this.children.length; i++) {
        child[i].classList.remove('grow')
      }
      child[index].classList.add('grow')
      let delta = child[1].offsetLeft - child[0].offsetLeft
      document.querySelector('.line').style.transform = `translateX(${index * delta - 900}px)`
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line{
  position: absolute;
  top: 100px;
  left: 0;
  width: 2000px;
  transition: all .3s ease-in-out;

}
.beat{
  fill:none;
  stroke:#003881;
  stroke-miterlimit:10;
  stroke-width:2px;
}
ul{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
}
.choice{
  position: relative;
  width: 100%;
  max-width: 1000px;
  height: 300px;
  padding-top: 50px;
  margin: auto;
  overflow: hidden;
}
li.child{
  transition: all .3s ease-out;
  cursor: pointer;
  padding: 10px;
  user-select: none;
}
.grow{
  transform: scale(3);
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
  display: none;
}
</style>
