<template>
  <div class="main">
    <h1>Quasar</h1>
    <p>
      Quasar plays a vital role in the QWC-VENUMM Webstack. It's fairly easy to install and works all by itself beautifully. It sets up dev servers with hot reload, builds for production and tons of other great development tools including code minifying.
      For the exact process of how it is used in conjuncture with our other technologies <span class="link" v-on:click="vueNav">click here.</span><br/>
    </p>
    <p>
      This article will be more of a resource page for more information on Quasar. Obviously one of the best and most clear resources will be <a href="http://quasar-framework.org/guide/" class="link">quasar-framework.org</a><br/>
      For updates and to show support for The fabulous creator of Quasar Framework; Razvan Stoenescu, you can visit the Quasar Patreon <a href="https://www.patreon.com/quasarframework" class="link">Here</a>.
    </p>
    <p>
      Quasar is loaded with helpful components out of the box. For one, they offer a wide variety of styling options and css assistance, allowing for some much cleaner and more efficient code. This is also true for just about every aspect of app development.
      Layout, Navigation, Form inputs, animation, you name it, Quasar makes it better. Quasar is an indespensable tool for all your development needs and it will only stand to improve from here.
      For an in depth look at all the different components you now have at your fingertips <a href="http://quasar-framework.org/components/" class="link">click here. </a>
    </p>
    <div class="articleClose">
      <div class="krisImage"></div>
      <p>
        Kristoffer St John is the Vice President of Screen Art Studios as well as the Art Director,
        and a Software Engineer. A talented Illustrator, Graphic Designer, and Author his presence
        ensures every product is a true work of Art. He is a contributing Author for the <a href="http://www.quickvenom.org" class="link">QuickVenom.org</a> blog.
      </p>
      <div class="socialLinks">
        <a class="link" href="https://www.linkedin.com/in/kristoffer-murphy-948944145/">LinkedIn</a>
        <a class="link" href="https://github.com/Spiralis-Solutions">Github</a>
        <a class="link" href="https://www.facebook.com/kris.murphy.14">Facebook</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'quasar',
  data () {
    return {
    }
  },
  methods: {
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
    mongonav: function () {
      this.$router.push('/mongodb')
    },
    mongooseNav: function () {
      this.$router.push('/mongoose')
    }
  }
}
</script>

<style scoped lang="less">
  @headText: "century gothic";
  @bodyText: "Montserrat";
  @mainColor: #1bad4a;

  .main {
    font-size: 1em;
    text-align: justify;
    position: absolute;
    height: 100%;
    background-image:url('../../assets/noise2.jpg');
    width: 100vw;
    overflow-y: scroll;
    padding-bottom: 100vh;
    z-index: 1;
  }

  .code {
    background-color: black;
    color: white;
    width: 100%;
    font-size: 1em;
    line-height: 1.5em;
    padding-top: 2px;
    padding-bottom: 2px;
    margin-top: 6px;
    margin-bottom: 6px;
    margin-left: 4%;
    margin-right: 4%;
    text-align: center;
  }

  h1 {
    text-align: center;
    color: #333;
    font-weight: 300;
    font-size: 2em;
  }

  p {
    text-align: left;
    line-height: 1.5em;
    padding-left: 6%;
    padding-right: 6%;
    margin-bottom: 10px;
  }

  ul {
  }

  .socialLinks {
    text-align: center;
  }

  .link {
    color: #fff;
    text-decoration: underline;
    font-weight: 300;
    text-align: center;
    margin-left: 5px;
  }

  h2 {
    text-align: center;
    font-family: @headText;
    color: @mainColor;
  }

  h3 {
    text-align: center;
    font-family: @headText;
    color: @mainColor;
  }

  h4 {
    text-align: center;
    font-family: @bodyText;
    color: grey;
    text-decoration: none;
  }
  /* width */
  ::-webkit-scrollbar {
      width: 10px;
      height:5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px transparent;
      border: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
      background: #333;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
      background: #555;
  }
  @media (min-width: 700px) {
    .main {
      width: 80vw;
      margin-left: 10vw;
      box-shadow: 0px 0px 5px black;
    }
  }

</style>
