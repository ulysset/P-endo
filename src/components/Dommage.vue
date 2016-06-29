<template lang="html">
	<div class="content" transition="fade">
	    <div class="hello">
	      <h2>Quoi qu'il en soit ...</h2>
	      <h1>Vous n'en aurez pas.</h1>
	    </div>
	    <a v-link="{ path: '/'}">Home</a>
  		<a v-link="{ path: '/intro'}">Suite (vidéo intro)</a>
	</div>
  
</template>

<script>
</script>

<style lang="css" scoped>
	.content{
	    width: 100%;
	    height: 100%;
	    background-image: url('../assets/images/bg_home.png');
	    background-size: cover;
	    color: white;
	}
	h1{
	    padding-top: 2%;
	    text-align: center;
	    font-size: 3.5rem;
	    text-transform: uppercase;
	    font-family: 'Montserrat', sans-serif;
	  }
	  h2 {
	    padding-top: 20%;
	    font-family: 'Lora', serif;
	    text-align: center;
	    font-size: 1.5rem;
	  }
</style>
