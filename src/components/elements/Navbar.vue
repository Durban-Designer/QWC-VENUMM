<template>
  <div id="Navbar" class="nav">
    <div class="logo" v-on:click="homeNav"></div>
    <div  v-on:click="homeNav" class="home">HOME</div>
    <div  v-on:click="storeNav" class="store">STORE</div>
    <div  v-on:click="articlesToggle" class="articles">ARTICLES</div>
    <div v-bind:class="navpaneLogic">
      <div v-on:click="basicsNav" class="basics">Basics</div>
      <div v-on:click="quasarNav" class="quasar">Quasar</div>
      <div v-on:click="webpackNav" class="webpack">Webpack</div>
      <div v-on:click="cordovaNav" class="cordova">Cordova</div>
      <div v-on:click="vueNav" class="vue">Vue.js</div>
      <div v-on:click="expressNav" class="express">Express</div>
      <div v-on:click="nodeNav" class="node">Node.js</div>
      <div v-on:click="ubuntuNav" class="ubuntu">Ubuntu</div>
      <div v-on:click="ubuntuHandsNav" class="ubuntuhands">Ubuntu Hands-On</div>
      <div v-on:click="mongodbNav" class="mongodb">MongoDB</div>
      <div v-on:click="mongooseNav" class="mongoose">Mongoose</div>
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
      homeNav: function () {
        this.$router.push('/')
      },
      storeNav: function () {
        this.$router.push('/store')
      },
      articlesToggle: function () {
        if (this.articleToggle === false) {
          if (this.first === true) {
            this.first = false
          }
          this.articleToggle = true
        } else if (this.articleToggle === true) {
          this.articleToggle = false
        }
      },
      basicsNav: function () {
        this.$router.push('/basics')
      },
      quasarNav: function () {
        this.$router.push('/quasar')
      },
      webpackNav: function () {
        this.$router.push('/webpack')
      },
      cordovaNav: function () {
        this.$router.push('/cordova')
      },
      vueNav: function () {
        this.$router.push('/vue')
      },
      expressNav: function () {
        this.$router.push('/express')
      },
      nodeNav: function () {
        this.$router.push('/node')
      },
      ubuntuNav: function () {
        this.$router.push('/ubuntu')
      },
      ubuntuHandsNav: function () {
        this.$router.push('/ubuntuhands')
      },
      mongodbNav: function () {
        this.$router.push('/mongodb')
      },
      mongooseNav: function () {
        this.$router.push('/mongoose')
      },
      articlesNav: function () {
        this.$router.push('/basics')
      }
    }
  }
  // prevents safari greying linking divs on tap
  document.addEventListener('touchstart', function () {}, true)
</script>

<style scoped lang="less">
  @hoverColor: #1bad4a;

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
    font-family: century gothic;
    font-size: 1.3em;
    color: white;
    line-height: 38px;
    background-color: #1bad4a;
    grid-row: 2;
    grid-column: 1;
    z-index: 3;

  }

  .articles{
    font-family: century gothic;
    font-size: 1.3em;
    color: white;
    line-height: 38px;
    background-color: #1bad4a;
    grid-row: 2;
    grid-column: 2;
    z-index: 3;
  }

  .store {
    font-family: century gothic;
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
    font-family: century gothic;
    padding: 5px;
  }

  .basics {
    background-color: #0F6029;
    line-height: 40px;
  }
  .basics:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;
  }

  .quasar {
    line-height: 40px;
    background-color: #0F6029;
  }
  .quasar:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .webpack {
    line-height: 40px;
    background-color: #0F6029;
  }
  .webpack:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .cordova {
    line-height: 40px;
    background-color: #0F6029;
  }
  .cordova:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .vue {
    line-height: 40px;
    background-color: #0F6029;
  }
  .vue:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .express {
    line-height: 40px;
    background-color: #0F6029;
  }
  .express:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .node {
    line-height: 40px;
    background-color: #0F6029;
  }
  .node:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .ubuntu {
    line-height: 40px;
    background-color: #0F6029;
  }
  .ubuntu:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .ubuntuhands {
    line-height: 40px;
    background-color: #0F6029;
  }
  .ubuntuhands:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .mongodb {
    line-height: 40px;
    background-color: #0F6029;
  }
  .mongodb:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .mongoose {
    line-height: 40px;
    background-color: #0F6029;
  }
  .mongoose:hover {
    background-color: @hoverColor;
    color: white;
    font-size: 1.2em;

  }
  .building {
    line-height: 40px;
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
