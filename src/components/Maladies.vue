<template>
  <div class="container" transition="shrink">
    <div v-for="section in sections" class="section {{ section.class_name }}" track-by="$index" style="background-image: url('http://jrlherm.com/webdoc/photos/bg{{$index +1}}.jpg')" v-on:click="openSection($index , $event)">
      <div class="titles">
        <h1>{{section.title}}</h1>
        <h2>{{section.subtitle}}</h2>
      </div>
      <div class="contents" transition="open">
        <p>{{section.description}}</p>
      </div>
    </div>
    <a v-link="{ path: '/'}">
    <div class="section continuer openned" style="background-image: url('http://jrlherm.com/webdoc/photos/bg10.jpg')">
      <div class="titles">
        <h1>Continuer</h1>
        <h2>Découvrez les raisons potentiels de ces maladies</h2>
      </div>
    </div>
    </a>
  </div>
</template>

<script>
import sections from '../data/maladies.json'

export default {
  data () {
    return {
      sections
    }
  },
  methods: {
    openSection: function (index, event) {
      let sections = document.querySelectorAll('.section')
      for (let i = 0; i <= this.sections.length; i++) {
        sections[i].classList.remove('openned')
      }
      // Open the selected one
      sections[index].classList.add('openned')
      console.log(event)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .container{
    display: block;
    height: 100vh;
    width:340vw;
    color: white;
    position: absolute;
    overflow-x: scroll;
    overflow-y: hidden; 
  }

  a {
    text-decoration: none;
    color: white;
  }

  .section {
    transition: width .5s cubic-bezier(0,1,1,1);
    position: relative;
    height: 100vh;
    width:30vw;
    display: block;
    float:left;
    background-color: red;
    cursor: pointer;
    &:hover{
      background-color: blue;
    };
    .contents {
      opacity: 0;
      margin: auto;
      padding: 15px;
      background-color: rgba(0,0,0,0.7);
      transform: translateY(100vh);
    }
    .titles {
      transition: transform .3s cubic-bezier(0,1,1,1);
    }
  }

  .section.openned {
    transition: width .5s cubic-bezier(0,1,1,1); 
    width:70vw;
    filter: grayscale(50);
    .contents {
      transition: transform .8s cubic-bezier(0,1,1,1) 1s;
      opacity: 1;
      width: 400px;
      text-align: center;
      transform: translateY(50vh);
      /* background-color: rgba(0,0,0,0.3); */

    }
    .titles {
      transition: transform .8s cubic-bezier(0,1,1,1) 0.7s;
      transform: translateY(-20vh);
    }
  }

  .section .titles {
    width: 85%;
    height: 100px;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
    text-align: center;
  }

  .section h1 {
    font-size: 1.5rem;
  }
  .section h2 {
    padding-top: 20px;
    font-size: 0.9rem;
  }

  .section .contents p {
    font-size: 16px;
    font-family: 'Source Sans Pro', sans-serif;
    line-height: 25px;
  }

  .shrink-transition {
    transition: all .8s cubic-bezier(0,1,1,1);
    overflow: hidden;
    opacity: 1;
    transform: scale(1);
  }
  .shrink-enter, .shrink-leave {
    opacity: 0;
    display: block;
    transform: scale(.8);
  }

  .comeup-transition {
    transition: all .8s cubic-bezier(0,1,1,1);
    transform: translate(-50%, 0px);
    transition-delay: 2s;
  }
  .comeup-enter, .comeup-leave {
    transform: translate(-50%, 40px);
  }
</style>
