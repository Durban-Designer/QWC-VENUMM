<template>
  <div class="main">
    <h2>Express</h2>
    <p>
      Express is a lightweight, unopinionated Web Framework for setting up node.js applications.
      Handling HTTP utility methods, middleware, and serving functionality, Express makes all our
      applications' functionality possible. Express is primarily utilized when setting up your backend API servers
      or other technologies like Mongoose. They sit on top of Express and work together to handle our Get, Post, Update, and Delete functions
      for our API endpoints. I will be going more in depth on this in our Mongoose and MongoDB Tutorials where we set up a basic
      Mlab instance and use Mongoose to configure our object Schema. <span class="link" v-on:click="$router.push('/mongodb')">Click Here</span> for
      the MongoDB Article to get started on configuring a back end; otherwise continue reading for more on Express.
    </p>
    <h4>Back on Track</h4><hr/>
    <p>
      Great! So we know Express is the *best thing ever*, but now what? Well lucky for you, Quasar does a wonderful job
      templating applications. If you followed my <span class="link" v-on:click="$router.push('/basics')">Quick Venom Basics Tutorial</span>
      Express is preconfigured with Hot-Reload Middleware, Webpack, and to serve the built application over a web server. So To configure Express for use with
      your Quick Venom Application you have to do precisely nothing. Yay! Thank the Devs who came before and made this super easy for us all.
      Anyways, I hope you enjoyed this brief look at Express. Thanks for reading and be sure to check out our other Articles for more
      information on Quick Venom, the Quintessential Web Stack.
    <div class="articleClose">
      <div class="royceImage"></div>
      <p>
        Royce Birnbaum is the President of Screen Art Studios as well as a Full Stack
        Web Developer, Graphic Designer, and Author. Specializing in the Quick Venom Web Stack, and serving as
        the lead Author for the <a href="http://www.quickvenom.org"class="link">QuickVenom.org</a> blog.
        He also runs his own blog at <a href="http://www.durbandesigner.com"class="link">DurbanDesigner.com</a>
        which showcases his Eight Years of Graphic Design Experience and serves as a hub for all his Art past and present.
      </p>
      <div class="socialLinks">
        <div class="linkedIn"><a href="https://www.linkedin.com/in/royce-birnbaum-233939145/">LinkedIn</a></div>
        <div class="github"><a href="https://github.com/Durban-Designer">Github</a></div>
        <div class="facebook"><a href="https://www.facebook.com/royce.birnbaum.5">Facebook</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'express',
    data () {
      return {
      }
    }
  }
</script>

<style scoped lang="less">
.main {
  font-family: 'Montserrat', sans-serif;
}
h2 {
  text-align: center;
  color: #1bad4a;
  text-decoration: underline;
}
h4 {
  text-align: center;
  color: #1bad4a;
}
.link {
  color: #1bad4a;
  text-decoration: none;
}
.articleClose {
  border: solid 1px #1bad4a;
}
</style>
