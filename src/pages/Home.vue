<template>
  <div class="main">
    <h1>QWC-VENUMM<br/>(Quick Venom)</h1>
    <p>The Quick Venom stack refers to an application architecture based around nine core technologies; Quasar, Webpack, Cordova, Vue.js, Express, Node.js, Ubuntu, MongoDB, Mongoose.</p>
    <div class="images">
      <div class="quasar"></div>
      <div class="webpack"></div>
      <div class="cordova"></div>
      <div class="vue"></div>
      <div class="express"></div>
      <div class="node"></div>
      <div class="ubuntu"></div>
      <div class="mongodb"></div>
      <div class="mongoose"></div>
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

  }
  h1 {
    text-align: center;
    font-family: @headText;
    font-weight: lighter;
    color: #1bad4a;
    font-size: 2em;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  text-align: center;
}
h1 {
  text-align: center;
  font-family: @headText;
  font-weight: lighter;
  color: #1bad4a;

}
p {
  font-family: @bodyText;
  font-size: 1.2em;
  text-align: center;

}

.quasar {
  background-image: url('../assets/quasar.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  grid-column: 1;
  grid-row: 1;
}
.webpack {
  background-image: url('../assets/webpack.png');
  background-repeat: no-repeat;
  background-size: contain;
}
.cordova {
  background-image: url('../assets/cordova.png');
  background-repeat: no-repeat;
  background-size: contain;
}
.vue {
  background-image: url('../assets/vue.png');
  background-repeat: no-repeat;
  background-size: contain;
}
.express {
  background-image: url('../assets/express.png');
  background-repeat: no-repeat;
  background-size: contain;
}
.node {
  background-image: url('../assets/node.png');
  background-repeat: no-repeat;
  background-size: contain;
}
.ubuntu {
  background-image: url('../assets/ubuntu.png');
  background-repeat: no-repeat;
  background-size: contain;
}
.mongodb {
  background-image: url('../assets/mongodb.png');
  background-repeat: no-repeat;
  background-size: contain;
}
.mongoose {
  background-image: url('../assets/mongoose.png');
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
