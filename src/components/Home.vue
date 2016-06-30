<template>
  <div class="container" transition="shrink">
    <h1>Stérilité Programmée</h1>
    <h2>Baseline trop cool à trouver vraiment</h2>
    <a v-link="{ path: '/enfants'}" class="begin-button">
      Démarrer l'expérience
    </a>
    <h4>Ce projet ayant été réalisé dans le cadre de la pédagogie d’HETIC, nous n’avons pas acquis les droits de ces fichiers.</h4>
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
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container{
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/bg_home.png');
    background-size: cover;
    color: white;
  }
  h1{
    padding-top: 22%;
    text-align: center;
    font-size: 3.5rem;
  }
  h2 {
    padding-top: 1%;
    text-align: center;
    font-size: 1.5rem;
  }
  a.begin-button{
    display: block;
    font-size: 1rem;
    width: 60%;
    max-width: 200px;
    padding: 30px;
    margin: 50px auto 0 auto;
    text-align: center;
    font-family: 'Source Sans Pro', sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
  }
  h4{
    font-size: 13px;
    color: rgba(255,255,255,0.5);
    position: absolute;
    bottom: 15px;
    width: 100%;
    text-align: center;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
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
