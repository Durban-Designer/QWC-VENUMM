<template>
  <div id="app" class="appmain">
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
.appmain {
  background-image: url('assets/noise.png');
  height: 100vh;
}
</style>
