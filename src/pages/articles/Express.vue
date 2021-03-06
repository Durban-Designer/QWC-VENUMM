<template>
  <div class="main">
    <h1>Express</h1>
    <p>
      Express is a lightweight, unopinionated Web Framework for setting up node.js applications.
      Handling HTTP utility methods, middleware, and serving functionality, Express makes all our
      applications' functionality possible. Express is primarily utilized when setting up your backend API servers
      or other technologies like Mongoose. They sit on top of Express and work together to handle our Get, Post, Update, and Delete functions
      for our API endpoints. I will be going more in depth on this in our Mongoose and MongoDB Tutorials where we set up a basic
      Mlab instance and use Mongoose to configure our object Schema. <span class="link" v-on:click="$router.push('/mongodb')">Click Here</span> for
      the MongoDB Article to get started on configuring a back end; otherwise continue reading for more on Express.
    </p>
    <h1>Back on Track</h1><hr/>
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
        the lead Author for the <a href="http://www.quickvenom.org" class="link">QuickVenom.org</a> blog.
        He also runs his own blog at <a href="http://www.durbandesigner.com" class="link">DurbanDesigner.com</a>
        which showcases his Eight Years of Graphic Design Experience and serves as a hub for all his Art past and present.
      </p>
      <div class="socialLinks">
        <a class="link" href="https://www.linkedin.com/in/royce-birnbaum-233939145/">LinkedIn</a>
        <a class="link" href="https://github.com/Durban-Designer">Github</a>
        <a class="link" href="https://www.facebook.com/royce.birnbaum.5">Facebook</a>
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
  @headText: "Montserrat";
  @bodyText: "Montserrat";
  @mainColor: #1bad4a;

  .main {
    font-size: 1em;
    text-align: justify;
    position: absolute;
    height: 100%;
    background-image:url('../../assets/noise2.jpg');
    width: 100vw;
    overflow-y: scroll;
    padding-bottom: 100vh;
  }

  .code {
    background-color: black;
    color: white;
    width: 100%;
    font-size: 1em;
    line-height: 1.5em;
    padding-top: 2px;
    padding-bottom: 2px;
    margin-top: 6px;
    margin-bottom: 6px;
    margin-left: 4%;
    margin-right: 4%;
    text-align: center;
  }

  h1 {
    text-align: center;
    color: #333;
    font-weight: 300;
    font-size: 2em;
  }

  p {
    text-align: left;
    line-height: 1.5em;
    padding-left: 6%;
    padding-right: 6%;
    margin-bottom: 10px;
  }

  ul {
  }

  .socialLinks {
    text-align: center;
  }

  .link {
    color: #fff;
    text-decoration: underline;
    font-weight: 300;
    text-align: center;
    margin-left: 5px;
  }

  h2 {
    text-align: center;
    font-family: @headText;
    color: @mainColor;
  }

  h3 {
    text-align: center;
    font-family: @headText;
    color: @mainColor;
  }

  h4 {
    text-align: center;
    font-family: @bodyText;
    color: grey;
    text-decoration: none;
  }
  /* width */
  ::-webkit-scrollbar {
      width: 10px;
      height:5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px transparent;
      border: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
      background: #333;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
      background: #555;
  }
  @media (min-width: 700px) {
    .main {
      width: 80vw;
      margin-left: 10vw;
      box-shadow: 0px 0px 5px black;
    }
  }

</style>
