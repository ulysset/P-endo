<template>
   <router-view></router-view>
</template>

<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    height: 100%;
  }
  html {
    background-color: black;
    height: 100%;
    overflow: hidden;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a{text-decoration: none;}
  h1{
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
  }
  h2 {
    font-family: 'Lora', serif;
  }
  .play_button{
    cursor: pointer;
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 25px;
    right: 10vw;
  }
  
  .passer {
    text-transform: uppercase;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    position: absolute;
    cursor: pointer;
    bottom: 27px;
    right: 3vw;
    color: rgba(255,255,255,0.7);
  }


::-webkit-scrollbar {
    width: 7px;
    height: 7px;
}

::-webkit-scrollbar-thumb {
    -webkit-border-radius:1px;
    -moz-border-radius:1px;
    -o-border-radius:1px;
    border-radius:1px;
    background: rgba(100,100,100,0.5);  
}
::-webkit-scrollbar-corner {  
  background: transparent;
}

</style>
