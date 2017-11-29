<template>
  <div id="Navbar" class="nav--top">
    <div class="logo"></div>
    <div  v-on:click="homeNav" class="Home">HOME</div>
    <div  v-on:click="aboutNav" class="about">ABOUT</div>
    <div  v-on:click="articlesToggle" class="articles">ARTICLES</div>
    <div class="sexyLine"></div>
    <div v-bind:class="navpaneLogic">
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
          navpane: this.articleToggle
        }
      }
    },
    methods: {
      homeNav: function () {
        this.$router.push('/')
      },
      articlesToggle: function () {
        if (this.articleToggle === false) {
          this.articleToggle = true
        } else if (this.articleToggle === true) {
          this.articleToggle = false
        }
      },
      aboutNav: function () {
        this.$router.push('/about')
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
        this.$router.push('/firstarticle')
      }
    }
  }
  // prevents safari greying linking divs on tap
  document.addEventListener('touchstart', function () {}, true)
</script>

<style scoped lang="less">
  @backgroundColor: #777f7a;
  @secondaryColor: #1a222e;
  @paymentColor: #519d10;
  @medicalColor: #ee1f34;
  @darkTR: #777f7a;
  @lightTR: #777f7a;
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
    grid-column-start: 1;
    grid-column-end: 4;
    background-image: url('../../assets/qwc-venummLow.svg');
    background-repeat: no-repeat;
    margin: 10px;

  }
  .Home {
    font-family: century gothic;
    font-size: 1.3em;
    color: white;
    line-height: 38px;
    background-color: #1bad4a;
    grid-row: 2;
    grid-column: 1;
  }

  .articles{
    font-family: century gothic;
    font-size: 1.3em;
    color: white;
    line-height: 38px;
    background-color: #1bad4a;
    grid-row: 2;
    grid-column: 2;
  }

  .about {
    font-family: century gothic;
    font-size: 1.3em;
    color: white;
    line-height: 38px;
    background-color: #1bad4a;
    grid-row: 2;
    grid-column: 3;
  }

  .hidden {
    display: none;
  }
  .navpaneLogic {
    background-color: #1bad4a;
  }
</style>
