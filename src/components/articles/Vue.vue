<template>
  <div class="main">
    <h2>Vue.js</h2>
    <p>
      Hello and welcome to the Quick Venom Vue.js tutorial, we are going to be focusing on how Vue is used in
      Quick Venom Applications rather then explaining how to use the framework from
      the ground up. If you need a primer on using vue <a class="link" href="https://vuejs.org/v2/guide/">
      click here</a> for the official getting started guide, its written very well.
      Now that thats cleared up lets talk about where Vue fits in our Quick Venom Application;
      serving as our Front End Framework Vue componetizes our application and handles all
      the DOM manipulation heavy lifting for templating <span title="Single Page Applications">SPA's.</span>
      To do this all of our front end code will be contained in .vue files and be dynamically inserted into the
      base index.html, you then use Vue Router to handle all the page routing on the front end in an router.js
      file.
    </p>
    <h3>What does this mean?</h3>
    <p>
      Long story short Vue is your entire front end contained in .vue files, this component model
      will be explored further in later tutorials. For now lets focus in on setting up a new .vue file in your quasar
      default template. Navigate to your projects src/components directory and then make a new file called
      firstComponent.vue, then open it in Atom text editor. (As a note I'd highly recommend installing the
      language-vue plugin for atom to get the code syntax highlighting.) In Atom your .vue component consists
      of a template, a style, and a script tag. Each of these holds all the HTML, CSS, and Javascript
      necessary to run that component. As you can imagine this makes debuging a breeze as everything is naturally
      self contained. As well within these .vue files you can take care of Vue directives to conditionally render classes,
      bind rendering to data truthiness, and loads of other goodness. I'd highly reccomend toying around with
      the getting started guide <a class="link" href="https://vuejs.org/v2/guide/">here</a> if you haven't to learn more
      about all the features that this wonderful framework has to offer. Anyways back to Atom a basic
      component will look like so;
      <textarea class="code">
        <template>
          <div class="main">
            Hello World!
          </div>
        </template>
        <script>
          export default {
            name: 'firstComponent',
            data: function () {
              return {
              }
            }
          }
        </script>
        <style scoped lang="less">
          .main {
          }
        </style>
      </textarea>
      You then open router.js in the src folder of your project in Atom to add the new component to the front
      end routing. Below the path to the / endpoint add a route for your new component. For my component above
      it would look something like this;
      <textarea class="code">
        import Vue from 'vue'
        import VueRouter from 'vue-router'

        Vue.use(VueRouter)

        function load (component) {
          // '@' is aliased to src/components
          return () => import(`@/${component}.vue`)
        }

        export default new VueRouter({
          mode: 'hash',
          scrollBehavior: () => ({ y: 0 }),

          routes: [
            { path: '/', component: load('Hello') },
            { path: '/firstComponent', component: load('firstComponent') },

            // Always leave this last one
            { path: '*', component: load('Error404') } // Not found
          ]
        })
      </textarea>
      After you've edited everything save it and quasars hot reload should register the change, try navigating
      manually to /firstComponent and if all went well you should see Hello World! I hope this tutorial shed some
      light on vue.js and its place in the Quick Venom Stack, look forward to future articles going more in depth
      on some of vue's best features.
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
    name: 'vue',
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
