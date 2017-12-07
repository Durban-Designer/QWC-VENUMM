<template>
  <div class="main">
    <h1>Webpack</h1>
    <p>
      Webpack is a asset bundler and code minifier that greatly optimizes web applications,
      it does this by a number of means. Firstly it gathers all javascript for your application
      and puts it all together into bundles that the browser can easily download and process.
      Secondarily it packages all your Assets such as images, fonts, and stylesheets into one
      static location and loads them. This second function is what tends to cause the most problems
      as Quasar auto configures it to run properly when you run quasar init default, However it fails
      to add in any images that arent in jpeg, png, gif, or svg. So lets say you want to use webp's or
      ico's it would't work, throwing a unrecognized character error that is really scary but actually
      quite easy to fix. If you open your webpack.base.conf.js in your projects build folder and go to
      line 70 which looks something like this;<br/>
      <span class="code">test: /\.(png|jpe?g|gif|svg)(\?.*)?$/</span><br/>
      and then after svg simply add a line and the format you'd like to add, for example webp;<br/>
      <span class="code">test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/</span><br/>
      then webpack should be able to read any images in the .webp format, and this process can be repeated
      for any other image fonts you may need to load.
    </p>
    <h3>So When do I use it</h3>
    <p>
      Well since it's auto configured you luckily almost never have to mess with webpack again, which is a testament
      to how stable it is. The unsung hero Webpack brings your Quick Venom Application to life, unifying your code
      and assets thanklessly. I may have future tutorials incase I discover something additional about webpack, otherwise I hope
      you enjoyed this brief intro to Webpack, <a class="link" href="https://webpack.js.org/concepts/"> Click Here</a> for a link
      to the documentation if you are feeling up for a deep dive.
    </p>
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
        <a class="link" href="https://www.linkedin.com/in/royce-birnbaum-233939145/">LinkedIn</a>
        <a class="link" href="https://github.com/Durban-Designer">Github</a>
        <a class="link" href="https://www.facebook.com/royce.birnbaum.5">Facebook</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'webpack',
    data () {
      return {
      }
    }
  }
</script>

<style scoped lang="less">
  @headText: "verdana";
  @bodyText: "verdana";
  @mainColor: #1bad4a;

  .main {
    font-size: 1em;
    text-align: justify;
  }

  .code {
    background-color: black;
    color: white;
    width: 100%;
    margin-left: 1%;
    margin-right: 1%;
    text-align: center;
  }

  h1 {
    text-align: center;
    font-family: verdana;
    font-weight: lighter;
    color: #1bad4a;
    text-decoration: underline;
  }

  p {
    text-align: left;
    line-height: 1.5em;
    padding-left: 6%;
    padding-right: 6%;
    font-family: @bodyText;
  }

  ul {
    font-family: @headText;
  }

  .socialLinks {
    text-align: center;
  }

  .link {
    color: #1bad4a;
    text-decoration: none;
    font-weight: bold;
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

  .articleClose {
    border: solid 1px #1bad4a;
  }

</style>
