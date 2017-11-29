<template>
  <div id="Navbar" class="nav--top">
    <div v-on:click="homeNav" class="logo"></div>
    <div  v-on:click="homeNav" class="home">HOME</div>
    <div  v-on:click="storeNav" class="store">Store</div>
    <div  v-on:click="articlesNav" class="articles">ARTICLES</div>
    <div class="sexyLine"></div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data: function () {
      return {
      }
    },
    props: ['loggedNav'],
    computed: {
    },
    methods: {
      homeNav: function () {
        this.$router.push('/')
      },
      storeNav: function () {
        this.$router.push('/store')
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
  .home {
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

  .store {
    font-family: century gothic;
    font-size: 1.3em;
    color: white;
    line-height: 38px;
    background-color: #1bad4a;
    grid-row: 2;
    grid-column: 3;
  }
</style>
