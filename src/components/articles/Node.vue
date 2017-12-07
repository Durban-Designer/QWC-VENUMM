<template>
  <div class="main">
    <h2>Node.js</h2>
    <p>
    </p>
    <div class="articleClose">
      <div class="averyImage"></div>
      <p>
        Avery Angel is the Lead Graphic Designer of Screen Art Studios also serving as the
        Logo Design Specialist, and a Full Stack Web Developer. Master of Adobe Illustrator and the Pen
        Tool Avery serves to create pixel perfect custom iconography, Stunning Logos, and dazzling Physical
        media to ensure all of our clients are presented in an optimal light. He runs his own blog over at
        <a href="https://www.averyangel.com" class="link">AveryAngel.com</a> and is a contributing author for
        the <a href="http://www.quickvenom.org" class="link">QuickVenom.org</a> blog.
      </p>
      <div class="socialLinks">
        <a class="link" href="https://www.linkedin.com/in/avery-angel-a5441b99/">LinkedIn</a>
        <a class="link" href="https://github.com/McKibbN">Github</a>
        <a class="link" href="https://www.facebook.com/Rick.Jamey">Facebook</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'node',
    data () {
      return {
      }
    }
  }
</script>

<style lang="less">
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
