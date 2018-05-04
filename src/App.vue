<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './pages/elements/Navbar'
export default {
  name: 'app',
  components: {
    'navbar': Navbar
  }
}
</script>

<style>
  h1 {
    font-size: 2em;
  }
</style>
