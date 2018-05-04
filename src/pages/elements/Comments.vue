<template>
  <div class="main">
    <div class="commentList" v-for="comment in comments" v-bind:key="comment.id">
      <h5 class="comment">{{comment.message}}</h5>
    </div>
    <div class="commentBox" v-if="commentBox">
      <input class="name" placeholder="name" v-model="name"/>
      <input class="email" placeholder="email" v-model="email"/>
      <textarea class="message" v-model="message"></textarea>
      <button class="submit" v-on:click="submit">Submit</button>
      <button class="cancel" v-on:click="commentBox=false">Cancel</button>
    </div>
    <div class="commentButton" v-on:click="commentBox=true" v-else>Leave a comment</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'comments',
  props: ['article'],
  data () {
    return {
      commentBox: false,
      comments: [],
      name: '',
      email: '',
      message: '',
      time: {
        month: '',
        day: '',
        hour: '',
        minute: ''
      }
    }
  },
  created () {
    let vue = this
    vue.populateComments()
  },
  methods: {
    populateComments () {
      let vue = this
      axios.get('http://13.57.14.36:81/messages/' + vue.article)
        .then(function (response) {
          vue.comments = response.data
          if (vue.comments.length === 8) {
            vue.nextPage = true
          } else {
            vue.nextPage = false
          } if (vue.page > 1) {
            vue.previousPage = true
          } else {
            vue.previousPage = false
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    clearComments () {
      this.comments = [{}]
    },
    submit () {
      let vue = this
      vue.submitMessage()
      vue.findTime()
    },
    submitMessage () {
      let vue = this
      axios.post('http://13.57.14.36:81/messages', {
        name: vue.name.toLowerCase(),
        email: vue.email,
        message: vue.message,
        time: vue.time,
        article: vue.article
      })
        .then(function (message) {
          vue.success = true
          vue.populateComments()
          console.log(message)
        })
        .catch(function (error) {
          console.log(error)
          vue.error = true
        })
    },
    findTime () {
      let vue = this
      let time = new Date()
      vue.time.hour = time.getHours()
      vue.time.minute = time.getMinutes()
      vue.time.day = time.getDate()
      vue.time.month = time.getMonth()
      vue.clockTime = vue.time.hours + ':' + vue.time.minute + '  ' + vue.time.day + '/' + vue.time.month
    }
  }
}
</script>

<style scoped lang="less">
  .commentBox {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 30px);
  }

  .name {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .email {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .message {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 5;
  }

  .submit {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 5;
    grid-row-end: 5;
  }

  .cancel {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 5;
    grid-row-end: 5;
  }
</style>
