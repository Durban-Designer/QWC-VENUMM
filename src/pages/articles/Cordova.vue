<template>
  <div class="main">
    <h1>Cordova</h1>
    <p>
      Granting the ability to deploy to 7 operating systems using one codebase is no small feat. Initially Quasar creates a symlink allowing your code to be accessed.
      Cordova then acts as a browser interpreting the initial codebase (HTML,CSS and Javascript) and native plugins/APIs,
      essentially bridging the gap between both systems. These native built plugins allow access to each devices internal features such as: camera, location, data and file transfer.
      There are already hundreds of plugins already made with more and more being created every day.
    </p>
    <h1>Setup and Use</h1>
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
