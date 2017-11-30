<template>
  <div id="Navbar" class="nav--top">
    <div class="logo" v-on:click="homeNav"></div>
    <div  v-on:click="homeNav" class="home">HOME</div>
    <div  v-on:click="storeNav" class="store">STORE</div>
    <div  v-on:click="articlesToggle" class="articles">ARTICLES</div>
    <div class="sexyLine"></div>
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
      <div v-on:click="buildingNav" class="building">Building</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data: function () {
      return {
        articleToggle: false
      }
    },
    props: ['loggedNav'],
    computed: {
      navpaneLogic: function () {
        return {
          hidden: !this.articleToggle,
          navpaneAnimate: this.articleToggle,
          navpane: this.articleToggle
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
      buildingNav: function () {
        this.$router.push('/building')
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
  @textColor: #9fb0d6;
  @baseFontSize: 1em;
  @boldText: "Candara";
  @sideText: "AdventPro";
  @bodyText: "LiberationSans";

  .nav--top {
    text-align: center;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: 90px 40px;
  }
  .logo {
    background-image: url('../../assets/qwc-venummLow.svg');
    background-repeat: no-repeat;
    width: 400px;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row: 1;
    z-index: 5;
    line-height: 20px;
    height: 120px;
    width: 100%;
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
    position: absolute;
    top: 135px;
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
  }

  .quasar {
    line-height: 40px;
    background-color: #0F6029;
  }
  .quasar:hover {
    background-color: @hoverColor;
    color: white;
  }
  .webpack {
    line-height: 40px;
    background-color: #0F6029;
  }
  .webpack:hover {
    background-color: @hoverColor;
    color: white;
  }
  .cordova {
    line-height: 40px;
    background-color: #0F6029;
  }
  .cordova:hover {
    background-color: @hoverColor;
    color: white;
  }
  .vue {
    line-height: 40px;
    background-color: #0F6029;
  }
  .vue:hover {
    background-color: @hoverColor;
    color: white;
  }
  .express {
    line-height: 40px;
    background-color: #0F6029;
  }
  .express:hover {
    background-color: @hoverColor;
    color: white;
  }
  .node {
    line-height: 40px;
    background-color: #0F6029;
  }
  .node:hover {
    background-color: @hoverColor;
    color: white;
  }
  .ubuntu {
    line-height: 40px;
    background-color: #0F6029;
  }
  .ubuntu:hover {
    background-color: @hoverColor;
    color: white;
  }
  .ubuntuhands {
    line-height: 40px;
    background-color: #0F6029;
  }
  .ubuntuhands:hover {
    background-color: @hoverColor;
    color: white;
  }
  .mongodb {
    line-height: 40px;
    background-color: #0F6029;
  }
  .mongodb:hover {
    background-color: @hoverColor;
    color: white;
  }
  .mongoose {
    line-height: 40px;
    background-color: #0F6029;
  }
  .mongoose:hover {
    background-color: @hoverColor;
    color: white;
  }
  .building {
    line-height: 40px;
    background-color: #0F6029;
  }
  .building:hover {
    background-color: @hoverColor;
    color: white;
  }
  @keyframes navpaneAnimation {
    0% {top: -2000px;}
    80% {top: 150px; }
    100%{top: 130px;}
  }

  .navpaneAnimate {
    animation-name: navpaneAnimation;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }
</style>
