<template>
  <div class="main">
    <img class="qwc-venumm" src="../assets/qwc-venummwait.png"/>
    <h1>Quick Venom Merch Store Coming Soon!</h1>
  </div>
</template>

<script>
export default {
  name: 'quasar',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less">
  .main {
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: repeat(15,60px);
    text-align: center;
    position: fixed;
    height: 100%;
    background-image:url('../assets/noise2.jpg');
    width: 100vw;
    overflow-y: scroll;
    padding-bottom: 100vh;
  }
  h1 {
    grid-row: 4;
    grid-column-start: 1;
    grid-column-end: 6;
    font-weight: 300;
    margin-top: 40vh;
  }
  .qwc-venumm {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 5;
    width: 100%;
  }
  @media (min-width: 700px) {
    .main {
      width: 80vw;
      margin-left: 10vw;
      box-shadow: 0px 0px 5px black;
    }
  }
</style>
