<template>
  <div class="main">
    <h1>QWC-VENUMM<br/>(Quick Venom)</h1>
    <p>The Quick Venom stack refers to an application architecture based around nine core technologies; Quasar, Webpack, Cordova, Vue.js, Express, Node.js, Ubuntu, MongoDB, Mongoose.</p>
    <div class="images">
      <img class="quasar img" src="../assets/quasar.jpg"></img>
      <img class="webpack img" src="../assets/webpack.png"></img>
      <img class="cordova img" src="../assets/cordova.png"></img>
      <img class="vue img" src="../assets/vue.png"></img>
      <img class="express img" src="../assets/express.png"></img>
      <img class="node img" src="../assets/node.png"></img>
      <img class="ubuntu img" src="../assets/ubuntu.png"></img>
      <img class="mongodb img" src="../assets/mongodb.png"></img>
      <img class="mongoose img" src="../assets/mongoose.png"></img>
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
