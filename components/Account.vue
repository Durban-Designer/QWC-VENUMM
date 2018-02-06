<template>
  <div class="main">
    <div class="editAccount" v-if="edit">
      <input class="name" placeholder="name" v-model="user.name"></input>
      <input class="email" placeholder="email" v-model="user.email"></input>
      <input class="password" placeholder="password" v-model="user.password"></input>
      <button>SEND</button>
    </div>
    <div class="newAccount" v-else>
      <input class="name" placeholder="name" v-model="user.name"></input>
      <input class="email" placeholder="email" v-model="user.email"></input>
      <input class="password" placeholder="password" v-model="user.password"></input>
      <button>SEND</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      },
      edit: false
    }
  }
}
</script>

<style scoped lang="less">
</style>
