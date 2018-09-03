<template>
  <div class="main">
    <h1>Node.js</h1>
    <p>
      Node.js Article Coming Soon!
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
  @headText: "Montserrat";
  @bodyText: "Montserrat";
  @mainColor: #1bad4a;

  .main {
    font-size: 1em;
    text-align: justify;
    position: fixed;
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
  @media (min-width: 700px) {
    .main {
      width: 80vw;
      margin-left: 10vw;
      box-shadow: 0px 0px 5px black;
    }
  }
</style>
