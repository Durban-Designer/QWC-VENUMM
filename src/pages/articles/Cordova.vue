<template>
  <div class="main">
    <h2>Cordova</h2>
    <p>
      Granting the ability to deploy to 7 operating systems using one codebase is no small feat. Initially Quasar creates a symlink allowing your code to be accessed.
      Cordova then acts as a browser interpreting the initial codebase (HTML,CSS and Javascript) and native plugins/APIs,
      essentially bridging the gap between both systems. These native built plugins allow access to each devices internal features such as: camera, location, data and file transfer.
      There are already hundreds of plugins already made with more and more being created every day.
    </p>
    <h2>Setup and Use</h2>
    <p>
      Luckily Cordova handles the heavy lifting when it comes to implimentation providing an easy to follow instructional guide on their <a href="https://cordova.apache.org/">website</a>.
      When it comes to use with the QWC-VENUMM stack there are a few things to keep in mind:
      <ol>
        <li>Use Quasar Wrap cordova to wrap your code for Cordova to use</li>
        <li>Make sure you are current on any dependencies you are using</li>
        <li>Check your config.xml and update with each added platform</li>
        <li>Always Quasar build first (making sure you are in the correct folders ie. outside the cordova folder)</li>
      </ol>
    </p>
    <p>
      This article will continue to be updated as we go more in depth with the development and use of plugins.
    </p>
    <div class="articleClose">
      <div class="bonImage"></div>
      <p>
        Bonham Goodman is the Lead Developer at Screen Art Studios as well as the Back End Guru, and a Full
        Stack Web Developer. Specializing in Quick Venom and Android Applications Bon is here to ensure a quality,
        performant application that does what it's supposed to do first time everytime. He maintains a blog over at
        <a href="" class="link">remoteideas.com</a> and is a contributing Author to the <a href="http://www.quickvenom.org" class="link">QuickVenom.org</a> blog.
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
  name: 'cordova',
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

.cordovaapp {

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
