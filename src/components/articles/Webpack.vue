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
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/<br/>
      and then after svg simply add a line and the format you'd like to add, for example webp;<br/>
      test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/<br/>
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

<style lang="less">
</style>
