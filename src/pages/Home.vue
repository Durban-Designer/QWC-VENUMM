<template>
  <div class="main">
    <h1>QWC-VENUMM<br/>(Quick Venom)</h1>
    <p>The Quick Venom stack refers to an application architecture based around nine core technologies:<br/> Quasar, Webpack, Cordova, Vue.js, Express, Node.js, Ubuntu, MongoDB, Mongoose.</p>
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
      <div class="words">
        <p>Using this architecture, building lightweight, responsive SPAs and deploying to every platform is simpler than it has ever been.</p>
        <span v-on:click="$router.push('/basics')">Get Started &#187;</span>
      </div>
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
    position: fixed;
    height: 100%;
    background-image:url('../assets/noise2.jpg');
    width: 100vw;
    overflow-y: scroll;
    padding-bottom: 50vh;
  }
  h1 {
    text-align: center;
    color: #333;
    font-size: 2em;
    font-weight: 300;
    grid-row: 1;
    grid-column-start: 1;
    grid-column-end: 6;
  }
  span {
    color: #fff;
    font-size: 1.2em;
    background-color: #1bad4a;
    padding: 1vw;
    border-radius: 10px;
    box-shadow: 0px 1px 5px black;
  }
.images {
  display: grid;
  grid-template-rows: repeat(9, 10vh);
  grid-gap: 2vw;
  text-align: center;
}

p {
  font-size: 1.2em;
  text-align: center;
  padding: 2vh;
  color: #444;
  font-weight: 400;
}

.quasar {
  background-image: url('../assets/quasar.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  grid-column: 1;
  grid-row: 1;
}
.webpack {
  background-image: url('../assets/webpack.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.cordova {
  background-image: url('../assets/cordova.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.vue {
  background-image: url('../assets/vue.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.express {
  background-image: url('../assets/express.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.node {
  background-image: url('../assets/node.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.ubuntu {
  background-image: url('../assets/ubuntu.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  transform: scale(.70);
}
.mongodb {
  background-image: url('../assets/mongodb.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.mongoose {
  background-image: url('../assets/mongoose.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
@media (min-width: 700px) {
  .main {
    width: 80vw;
    margin-left: 10vw;
    box-shadow: 0px 0px 5px black;
  }
  .images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 9vh);
    grid-gap: 2vw;
    text-align: center;
  }
  .mongoose {
    transform: scale(.70);
  }
}
</style>
