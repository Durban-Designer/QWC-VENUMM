<template>
  <div class="main">
    <h1>MongoDB</h1>
    <p>
      The leading choice for NoSql Databases MongoDB serves to store all our data for our Quick Venom Applications,
      This allows us to have persistent data stores that survive page refereshes, and to do more complex operations like
      having users register for an account. Without a database the vast majority of non trivial applications are impossible so
      as you can imagine understanding MongoDB and how to configure it is a tad bit important. For starters though you can use MongoDB
      by itself just fine I will be using Mongoose to configure our actual connections and backend operations. This is
      signifigantly easier than a vanilla Mongo setup and allows the defining of an object Schema. Now that you understand
      that you're probably wondering what this tutorial is about, while thats easy we're setting up the actual Database itself on a
      Mlab instance.
    </p>
    <h1>Requirements</h1><hr/>
    <h5><a class="link" href="https://mlab.com/signup/">An Mlab Account</a></h5><br/>
    <h1>Step By Step</h1>
    <p>
      After Logging into your Mlab account you should see a large MongoDb Deployments header, click create new to the far
      right of it to get started. Click Amazon web Services and Sandbox then press the blue continue button on the bottom right.
      Select the closest AWS region to you and then click continue again, type a name for your database into the Database Name input box.
      Click Continue and then Submit Order, if all went well it should show up below your MongoDB deployments header. Click on the new database
      then click on the Users tab in the middle of the screen. Click the Add Database User button and make sure not to use one of your regular passwords
      as this will be exposed in the code. Congratulations you have successfully spun up a MongoDB server and in our
      Mongoose tutorial I will walk you through connecting and using Mongoose to configure an object Schema for your database.
      <span class="link" v-on:click="$router.push('/mongoose')">Click Here</span> to read it now!
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
  name: 'mongodb',
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
