<template>
  <div class="main">
    <h2>Cordova</h2>
    <p>
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
