<template>
  <div class="content" transition="fade">
    <div class="hello">
      <h1>{{ msg }}</h1>
    </div>
    <a v-link="{ path: '/'}">Home</a>
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
      msg: 'Foo!'
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-transition {
  transition: all .7s ease-out;
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
