<template>
  <div class="main">
    <h1>QWC-VENUMM<br/>(Quick Venom)</h1>
    <p>The Quick Venom stack refers to an application architecture based around nine core technologies; Quasar, Webpack, Cordova, Vue.js, Express, Node.js, Ubuntu, MongoDB, Mongoose.</p>
    <div class="images">
      <a href="http://quasar-framework.org/"><img class="quasar img" src="../assets/quasar.jpg"></img></a>
      <a href="https://webpack.js.org/"><img class="webpack img" src="../assets/webpack.png"></img></a>
      <a href="https://cordova.apache.org/"><img class="cordova img" src="../assets/cordova.png"></img></a>
      <a href="https://vuejs.org/"><img class="vue img" src="../assets/vue.png"></img></a>
      <a href="https://expressjs.com/"><img class="express img" src="../assets/express.png"></img></a>
      <a href="https://nodejs.org/en/"><img class="node img" src="../assets/node.png"></img></a>
      <a href="https://www.ubuntu.com/server"><img class="ubuntu img" src="../assets/ubuntu.png"></img></a>
      <a href="https://www.mongodb.com/"><img class="mongodb img" src="../assets/mongodb.png"></img></a>
      <a href="http://mongoosejs.com/"><img class="mongoose img" src="../assets/mongoose.png"></img></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
      }
    }
  }
  </script>

  <style scoped lang="less">
  @bodyText:  'Montserrat', sans-serif;
  @headText: 'Montserrat', sans-serif;

  .main {
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: repeat(15, 60px);
    text-align: center;
  }
  h1 {
    text-align: center;
    font-family: @headText;
    font-weight: lighter;
    color: #1bad4a;
    grid-row: 1;
    grid-column-start: 1;
    grid-column-end: 6;
  }
  p {
    font-family: @bodyText;
    font-size: 1.2em;
    text-align: center;
    grid-row: 3;
    grid-column-start: 1;
    grid-column-end: 6;
  }

  .images {
    grid-row: 6;
    grid-row-end: 10;
    grid-column-start: 1;
    grid-column-end: 6;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 150px;)
  }
  .img {
    width: 100%;
    margin-top: 50px;
  }
  </style>
