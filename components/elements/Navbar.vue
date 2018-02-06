<template>
  <div id="Navbar" class="nav">
    <div class="logo" v-on:click="$router.push('/')"></div>
    <div  v-on:click="$router.push('/')" class="home">HOME</div>
    <div  v-on:click="$router.push('/store')" class="store">STORE</div>
    <div  v-on:click="articlesToggle()" class="articles">ARTICLES</div>
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
  @headText: 'Montserrat', sans-serif;
  .nav {
    width: 100%;
    height: 130px;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 90px 40px;
    background-color: white;
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
    width: 100%;
    background-color: white;

  }
  .home {
    font-family: @headText;
    font-size: 1.3em;
    color: white;
    line-height: 38px;
    background-color: #1bad4a;
    grid-row: 2;
    grid-column: 1;
    z-index: 3;
  }

  .articles{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3em;
    color: white;
    line-height: 38px;
    background-color: #1bad4a;
    grid-row: 2;
    grid-column: 2;
    z-index: 3;
  }

  .store {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3em;
    color: white;
    line-height: 38px;
    background-color: #1bad4a;
    grid-row: 2;
    grid-column: 3;
    z-index: 3;
  }

  .hidden {
    display: none;
  }

  .navpane {
    width: 33%;
    top: -2000px;
    position: absolute;
    color: #fff;
    margin-left: 30%;
    z-index: 2;
    font-family: 'Montserrat', sans-serif;
    padding: 5px;
  }

  .basics {
    background-color: #0F6029;
    line-height: 34px;
  }
  .basics:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;
  }

  .quasar {
    line-height: 34px;
    background-color: #0F6029;
  }
  .quasar:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .webpack {
    line-height: 34px;
    background-color: #0F6029;
  }
  .webpack:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .cordova {
    line-height: 34px;
    background-color: #0F6029;
  }
  .cordova:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .vue {
    line-height: 34px;
    background-color: #0F6029;
  }
  .vue:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .express {
    line-height: 34px;
    background-color: #0F6029;
  }
  .express:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .node {
    line-height: 34px;
    background-color: #0F6029;
  }
  .node:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .ubuntu {
    line-height: 34px;
    background-color: #0F6029;
  }
  .ubuntu:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .ubuntuhands {
    line-height: 34px;
    background-color: #0F6029;
  }
  .ubuntuhands:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .mongodb {
    line-height: 34px;
    background-color: #0F6029;
  }
  .mongodb:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .mongoose {
    line-height: 34px;
    background-color: #0F6029;
  }
  .mongoose:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .building {
    line-height: 34px;
    background-color: #0F6029;
  }
  .building:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  @keyframes activateNav {
    0% {top: -2000px;}
    80% {top: 150px; }
    100%{top: 130px;}
  }
  @keyframes deactivateNav {
    0% {top: 130px; display: inline;}
    99% {top: -2000px; display: inline;}
    100% {top: -2000px; display: none;}
  }
  .navpaneAnimate {
    animation-name: activateNav;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }
  .navpaneAnimateExit {
    animation-name: deactivateNav;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
</style>
