<template>
  <div id="Navbar" class="nav">
    <div v-on:click="navToggle" class="navButton">
      <center><div v-bind:class="navbutton" class="navButtonIcon"></div></center>
    </div>
    <div v-bind:class="navpane" class="navpane">
      <center>
        <router-link to="/about"><div v-on:click="navigate" v-bind:class="about">About</div></router-link>
        <router-link to="/firstarticle"><div v-on:click="navigate" v-bind:class="about">First Article</div></router-link>
      </center>
    </div>
    <div class="logo"><router-link to="/"></router-link></div>
    <div class="sexy_line"></div>
  </div>
</template>

<script>
  var x = 0
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
      navToggle: function () {
        // Nav button functionality
        if (x === 0) {
          x++
          this.isToggled = true
          this.first = false
        } else if (x === 1) {
          x--
          this.isToggled = false
        }
      },
      navigate: function () {
        this.isToggled = false
        x--
      },
      logOut: function () {
        this.isToggled = false
        x--
        this.$emit('logOut')
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

  .nav {
<<<<<<< HEAD
    height: 150px;
    background: white;
=======
    height: 90px;
    background: #0c2069;
    background-image: -webkit-linear-gradient(top, @lightTR, @darkTR);
    background-image: -moz-linear-gradient(top, @lightTR, @darkTR);
    background-image: -ms-linear-gradient(top, @lightTR, @darkTR);
    background-image: -o-linear-gradient(top, @lightTR, @darkTR);
    background-image: linear-gradient(to bottom, @lightTR, @darkTR);
>>>>>>> 86331cebe27d6dfd996b5004894009d3db804b7e
    display: grid;
    grid-template-columns: 10px repeat(8, 1fr) 10px;
    z-index: 2;

  }
  .sexy_line {
    grid-column-start: 1;
    grid-column-end: 10;
    background: white;
    background-image: -webkit-linear-gradient(left, transparent 0%, #38B44A 30%, #38B44A 85%, transparent 100%);
    background-image: linear-gradient(left, transparent 0%, #38B44A 30%, #38B44A 85%, transparent 100%);
    height: 1.5px;
}

  .logo {
    background-image: url('../../assets/qwc-venummLow.png');
    background-repeat: no-repeat;
<<<<<<< HEAD
    grid-column-start: 4;
    grid-column-end: 8;
    height: 400px;
    margin-top: -130px;
    transform: scale(.30,.30)
=======
    grid-column: 8;
    margin-top: 6px;
    height: 100px;
    width: 100px;
>>>>>>> 86331cebe27d6dfd996b5004894009d3db804b7e
  }

  .navButton {
    grid-column: 2;
    margin-left: 40px;
    width: 100px;
    height: 100px;
    transform: scale(.75,.75);
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  .navButtonIcon {
    width: 80px;
    height: 80px;
<<<<<<< HEAD
    background: url("../../assets/navbuttonAnimationWhite.svg");
=======
    transform: scale(.9,.9);
    background: url("../../assets/navbuttonAnimationGreenThin.svg");
>>>>>>> 86331cebe27d6dfd996b5004894009d3db804b7e
    background-repeat: no-repeat;
  }

  .navpane {
    position: absolute;
    top: -2000px;
    width: 100%;
    z-index: 3;
  }

  .navtile {
    width: 90%;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    margin: 10px 0;
    padding: 4px;
    background: #0c2069;
    text-align: center;
    font-family: @boldText;
    font-size: @baseFontSize + 1em;
    text-decoration: none;
    color: #FFF;
    border: 2px solid #fff;
    z-index: 3;
  }

  .hidden {
    display: none;
  }

  @keyframes activateNav {
    from {top: -2000px;}
    to {top: 90px;}
  }

  @keyframes activateNavtiles {
    0% {margin: 10px 0;}
    40% {margin: 22px 0;}
    80% {margin: 12px 0;}
    100% {margin: 12px 0;}
  }

  @keyframes deactivateNav {
    0% {top: 80px;}
    99% {top: 2000px;}
    100% {display: none;}
  }

  @keyframes deactivateNavtiles {
    0% {margin: 12px 0;}
    50% {margin: 18px 0;}
    100% {margin: 26px 0;}
  }

  @keyframes navButtonAnimation {
    100% {background-position: -1440px;}
  }

  @keyframes navButtonAnimationReverse {
    0% {background-position: -1440px;}
    100% {background-position: 0px;}
  }

  .navpaneAnimation {
    animation-name: activateNav;
    animation-duration: .8s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    display: inline;
  }

  .navtileAnimation {
    animation-name: activateNavtiles;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .navpaneAnimationExit {
    animation-name: deactivateNav;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .navtileAnimationExit {
    animation-name: deactivateNavtiles;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .navButtonAnimation {
    animation: navButtonAnimation .4s steps(18);
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .navButtonAnimationExit {
    animation: navButtonAnimationReverse .5s steps(18);
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  a {
    text-decoration: none;
  }

</style>
