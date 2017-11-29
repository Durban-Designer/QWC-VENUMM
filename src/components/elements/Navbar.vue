<template>
  <div id="Navbar" class="nav--top">
    <div class="logo"></div>
    <div  v-on:click="homeNav" class="Home">HOME</div>
    <div  v-on:click="aboutNav" class="about">ABOUT</div>
    <div  v-on:click="articlesNav" class="articles">ARTICLES</div>
    <div class="sexyLine"></div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data: function () {
      return {
        isToggled: false,
        first: true
      }
    },
    props: ['loggedNav'],
    computed: {
      navbutton: function () {
        return {
          navButtonAnimation: this.isToggled,
          navButtonAnimationExit: !this.isToggled && !this.first
        }
      },
      navpane: function () {
        return {
          navpaneAnimation: this.isToggled,
          navpaneAnimationExit: !this.isToggled && !this.first
        }
      },
      about: function () {
        return {
          navtileAnimation: this.isToggled,
          navtileAnimationExit: !this.isToggled && !this.first,
          navtile: true
        }
      },
      login: function () {
        return {
          hidden: this.loggedNav,
          navtileAnimation: this.isToggled,
          navtileAnimationExit: !this.isToggled && !this.first,
          navtile: !this.loggedNav
        }
      },
      logged: function () {
        return {
          hidden: !this.loggedNav,
          navtileAnimation: this.isToggled,
          navtileAnimationExit: !this.isToggled && !this.first,
          navtile: this.loggedNav
        }
      }
    },
    methods: {
      homeNav: function () {
        this.$router.push('/')
      },
      aboutNav: function () {
        this.$router.push('/about')
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
</style>
