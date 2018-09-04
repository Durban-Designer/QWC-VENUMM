<template>
  <div class="main">
    <h1>Ubuntu Hands On</h1>
    <p>
      The Ubuntu Hands on Article is coming soon!
    </p>
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
export default {
  name: 'ubuntuhands',
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
