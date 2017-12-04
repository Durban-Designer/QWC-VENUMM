<template>
  <div class="main">
    <h2>Vue.js</h2>
    <p>
      Hello and welcome to the Quick Venom Vue.js tutorial, we are going to be focusing on Vue
      applications in Quick Venom Applications rather then explaining how to use the framework from
      the ground up. If you need a primer on using vue <a class="link" href="https://vuejs.org/v2/guide/">
      click here</a> for the official getting started guide, its written very well.
      Now that thats cleared up lets talk about where Vue fits in our Quick Venom Application;
      serving as our Front End Framework Vue serves to componetize our application and handle all
      the DOM manipulation heavy lifting for templating <span title="Single Page Applications">SPA's.</span>
      To do this all of our front end code will be contained in .vue files and be dynamically inserted into the
      base index.html, you use Vue Router to handle all the page routing on the front end in an index.js file in
      the router folder.
    </p>
    <h3>What does this mean?</h3>
    <p>
      Long story short Vue is your entire front end contained in .vue files, this component model
      will be explored further in later tutorials. For now lets focus in on setting up a new .vue file in your quasar
      default template. Navigate to your projects src/components directory and then make a new file called
      firstComponent.vue, then open it in Atom text editor. (As a note I'd highly recommend installing the
      language-vue plugin for atom to get the code syntax highlighting.) In Atom 
    </p>
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
</style>
