<template>
 <audioplayer src="http://jrlherm.com/webdoc/audio/intro_part1.mp3"></audioplayer>
</template>

<script scoped>
import Vue from 'vue'
Vue.component('audioplayer', require('./audioPlayer'))

export default {}
</script>
