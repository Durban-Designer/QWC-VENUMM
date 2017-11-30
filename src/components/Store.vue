<template>
  <div class="main">
    <img class="qwc-venumm" src="../assets/qwc-venummwait.png"></img>
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
  }
  h1 {
    grid-row: 4;
    grid-column-start: 1;
    grid-column-end: 6;
    font-family: century gothic;
    font-weight: 100;
  }
  .qwc-venumm {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 5;
    width: 100%;

  }
</style>
