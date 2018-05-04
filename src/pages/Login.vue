<template>
  <div class="main">
    <h3>Login</h3>
    <input class="username" v-model="user.name" placeholder="username"/>
    <input class="password" v-model="user.password" placeholder="password" type="password" v-on:keypress.enter="login"/>
    <button class="login" v-on:click="login">Login</button>
    <div v-on:click="$router.push('/account')">need an account?</div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
    }
  }
}
</script>

<style scoped lang="less">

</style>
