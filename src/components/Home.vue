<template>
  <div class="main">
    <h1>QWC-VENUMM<br/>(Quick Venom)</h1>
    <p>The Quick Venom stack refers to an application architecture based around nine core technologies; Quasar, Webpack, Cordova, Vue.js, Express, Node.js, Ubuntu, MongoDB, Mongoose.</p>
    <img class="quasar" src="../assets/quasar.jpg"></img>
    <img class="webpack" src="../assets/webpack.png"></img>
    <img class="cordova" src="../assets/cordova.png"></img>
    <img class="vue" src="../assets/vue.png"></img>
    <img class="express" src="../assets/express.png"></img>
    <img class="node" src="../assets/node.png"></img>
    <img class="ubuntu" src="../assets/ubuntu.png"></img>
    <img class="mongodb" src="../assets/mongodb.png"></img>
    <img class="mongoose" src="../assets/mongoose.png"></img>
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
  @bodyText: "arial";
  @headText: "Century gothic";

  .main {
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: repeat(15,60px);
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

  .quasar {
    grid-row: 6;
    grid-column: 1;
    margin: 5px;
  }
  .webpack {
    grid-row: 6;
    grid-column: 2;
    margin: 5px;
  }
  .cordova {
    grid-row: 6;
    grid-column: 3;
  }
  .vue {
    grid-row: 6;
    grid-column: 4;
    margin: 5px;
  }
  .express {
    grid-row: 6;
    grid-column: 5;
    margin-top: 12px;
  }
  .node {
    grid-row: 7;
    grid-column: 1;
    margin-top: 10px;
  }
  .ubuntu {
    grid-row: 7;
    grid-column: 2;
    padding-top: 15px;
    margin: 5px;
  }
  .mongodb {
    grid-row: 7;
    grid-column: 3;
    margin-top: 15px;
  }
  .mongoose {
    grid-row: 7;
    grid-column: 4;
    margin-top: 10px;
  }
  </style>
