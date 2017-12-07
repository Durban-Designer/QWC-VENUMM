<template>
  <div class="main">
    <h2>Cordova</h2>
    <p>
      Granting the ability to deploy to 7 operating systems using one codebase is no small feat. Initially Quasar creates a symlink allowing your code to be accessed.
      Cordova then acts as a browser interpreting the initial codebase (HTML,CSS and Javascript) and native plugins/APIs,
      essentially bridging the gap between both systems.
    </p>
    <h2>Setup and Use</h2>
    <p>
      Luckily Cordova handles the heavy lifting when it comes to implimentation providing an easy to follow instructional guide on their <a href="https://cordova.apache.org/">website</a>.
      When it comes to use with the QWC-VENUMM stack there are a few things to keep in mind:
      <ol>
        <li>Make sure you are current on any dependensies you are using</li>
        <li>Check your config.xml and update with each added platform<li>
        <li>Always Quasar build first (making sure you are in the correct folders ie. outside the cordova folder)</li>
      <ol>
    </p>
    <div class="articleClose">
      <div class="bonImage"></div>
      <p>
        Bonham Goodman is the Lead Developer at Screen Art Studios as well as the Back End Guru, and a Full
        Stack Web Developer. Specializing in Quick Venom and Android Applications Bon is here to ensure a quality,
        performant application that does what it's supposed to do first time everytime. He maintains a blog over at
        <a href="" class="link">tbd.com</a> and is a contributing Author to the <a href="http://www.quickvenom.org" class="link">QuickVenom.org</a> blog.
      </p>
      <div class="socialLinks">
        <div class="linkedIn"><a href="https://www.linkedin.com/in/bonham-goodman-9a893b145/">LinkedIn</a></div>
        <div class="github"><a href="https://github.com/Grapetoast?tab=following">Github</a></div>
        <div class="facebook"><a href="https://www.facebook.com/BonGoodman?ref=br_rs">Facebook</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cordova',
    data () {
      return {
      }
    }
  }
</script>

<style lang="less">
</style>
