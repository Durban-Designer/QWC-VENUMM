<template>
  <div id="Navbar" class="nav">
    <div class="logo" v-on:click="$router.push('/')"></div>
    <button  v-on:click="$router.push('/')" class="home">Home</button>
    <button  v-on:click="$router.push('/store')" class="store">Store</button>
    <button  v-on:click="articlesToggle()" class="articles">Contents</button>
    <div v-bind:class="navpaneLogic">
      <div v-on:click="articlesToggle(); $router.push('/basics')" class="basics">Basics</div>
      <div v-on:click="articlesToggle(); $router.push('/quasar')" class="quasar">Quasar</div>
      <div v-on:click="articlesToggle(); $router.push('/webpack')" class="webpack">Webpack</div>
      <div v-on:click="articlesToggle(); $router.push('/cordova')" class="cordova">Cordova</div>
      <div v-on:click="articlesToggle(); $router.push('/vue')" class="vue">Vue.js</div>
      <div v-on:click="articlesToggle(); $router.push('/express')" class="express">Express</div>
      <div v-on:click="articlesToggle(); $router.push('/node')" class="node">Node.js</div>
      <div v-on:click="articlesToggle(); $router.push('/ubuntu')" class="ubuntu">Ubuntu</div>
      <div v-on:click="articlesToggle(); $router.push('/ubuntuhands')" class="ubuntuhands">Ubuntu Hands-On</div>
      <div v-on:click="articlesToggle(); $router.push('/mongodb')" class="mongodb">MongoDB</div>
      <div v-on:click="articlesToggle(); $router.push('/mongoose')" class="mongoose">Mongoose</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: function () {
    return {
      articleToggle: false,
      first: true
    }
  },
  props: ['loggedNav'],
  computed: {
    navpaneLogic: function () {
      return {
        navpaneAnimateExit: this.articleToggle === false && this.first === false,
        navpaneAnimate: this.articleToggle === true,
        navpane: true
      }
    }
  },
  methods: {
    articlesToggle: function () {
      if (this.articleToggle === false) {
        if (this.first === true) {
          this.first = false
        }
        this.articleToggle = true
      } else if (this.articleToggle === true) {
        this.articleToggle = false
      }
    }
  }
}
// prevents safari greying linking divs on tap
document.addEventListener('touchstart', function () {}, true)
</script>

<style scoped lang="less">
  @hoverColor: #1bad4a;
  @font: 'Abel', sans-serif;
  .nav {
    width: 100%;
    height: 130px;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 80px 40px;
    background-image:url('../../assets/noise.png');
    z-index: 3;
  }

  .logo {
    background-image: url('../../assets/qwc-venummLow.svg');
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
    height: 100px;

  }
  .home {
    font-size: 1.3em;
    color: #45c934;
    line-height: 50px;
    height: 50px;
    grid-row: 2;
    grid-column: 1;
    z-index: 3;
    background: transparent;
    border: none;
    font-weight: 300;
  }

  .articles{
    font-size: 1.3em;
    font-weight: 300;
    color: #45c934;
    line-height: 50px;
    height: 50px;
    grid-row: 2;
    grid-column: 2;
    z-index: 3;
    background: transparent;
    border: none;
  }

  .store {
    font-size: 1.3em;
    color: #45c934;
    line-height: 50px;
    height: 50px;
    grid-row: 2;
    grid-column: 3;
    z-index: 3;
    background: transparent;
    border: none;
    font-weight: 300;
  }

  .hidden {
    display: none;
  }

  .navpane {
    width: 100%;
    top: -2000px;
    position: absolute;
    color: #fff;
    font-weight: 300;
    font-size: 1.3em;
    background-color: #555;
    z-index: 1;
    display: grid;
    grid-template-rows: repeat(11, 5vh;)
  }

  .basics {
    line-height: 4vh;
    border: 1px solid #333;
  }
  .basics:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;
  }

  .quasar {
    line-height: 4vh;
    border: 1px solid #333;
  }
  .quasar:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .webpack {
    line-height: 4vh;
    border: 1px solid #333;
  }
  .webpack:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .cordova {
    line-height: 4vh;
    border: 1px solid #333;
  }
  .cordova:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .vue {
    line-height: 4vh;
    border: 1px solid #333;
  }
  .vue:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .express {
    line-height: 4vh;
    border: 1px solid #333;
  }
  .express:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .node {
    line-height: 4vh;
    border: 1px solid #333;
  }
  .node:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .ubuntu {
    line-height: 4vh;
    border: 1px solid #333;
  }
  .ubuntu:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .ubuntuhands {
    line-height: 4vh;
    border: 1px solid #333;
  }
  .ubuntuhands:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;
  }
  .mongodb {
    line-height: 4vh;
    border: 1px solid #333;
  }
  .mongodb:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .mongoose {
    line-height: 4vh;
    border: 1px solid #333;
  }
  .mongoose:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .building {
    line-height: 4vh;
    border: 1px solid #333;
  }
  .building:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;
  }
  @keyframes activateNav {
    0% {top: -1000px; opacity: 0; }
    90% {top: 120px; opacity: 0;}
    100%{top: 130px; opacity: 1; }
  }
  @keyframes deactivateNav {
    0% {top: 130px; opacity: 1; }
    90% {top: 120px; opacity: 0;}
    100% {top: -2000px; opacity: 0;}
  }
  .navpaneAnimate {
    animation-name: activateNav;
    animation-duration: .5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }
  .navpaneAnimateExit {
    animation-name: deactivateNav;
    animation-duration: .5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  @media (min-width: 700px) {
    .navpane {
      width: 80vw;
      margin-left: 10vw;
    }
  }
</style>
