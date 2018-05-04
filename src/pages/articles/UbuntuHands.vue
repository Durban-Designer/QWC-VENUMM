<template>
  <div class="main">
    <h2>Ubuntu Hands On</h2>
    <p>
      The Ubuntu Hands on Article is coming soon!
    </p>
    <comments :article="'ubuntuHands'"></comments>
    <div class="articleClose">
      <div class="royceImage"></div>
      <p>
        Royce Birnbaum is the President of Screen Art Studios as well as a Full Stack
        Web Developer, Graphic Designer, and Author. Specializing in the Quick Venom Web Stack, and serving as
        the lead Author for the <a href="http://www.quickvenom.org" class="link">QuickVenom.org</a> blog.
        He also runs his own blog at <a href="http://www.durbandesigner.com" class="link">DurbanDesigner.com</a>
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
import Comments from '../elements/Comments'
export default {
  name: 'ubuntuhands',
  components: {
    'comments': Comments
  },
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
