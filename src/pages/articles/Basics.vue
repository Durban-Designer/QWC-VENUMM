<template>
  <div class="main">
    <h1>QWC-VENUMM<br/> The Basics</h1>
    <p>The Quick Venom stack refers to an application architecture based around nine core technologies;</p>
    <hr/>
    <ul>
      <li>Quasar</li>
      <li>Webpack</li>
      <li>Cordova</li>
      <li>Vue.js</li>
      <li>Express</li>
      <li>Node.js</li>
      <li>Ubuntu Server</li>
      <li>MongoDb</li>
      <li>Mongoose</li>
    </ul>
    <hr/>
    <p>
      Each of these will be described in more detail below but before we dive into the specific technologies I want to talk a little bit about the amazing
      functionality that is granted with this application stack.
    </p>
    <p>
      Firstly you can create rock solid and lightweight Single Page Applications easily and quickly thanks to
      templating in both Quasar and Vue. Secondarily thanks to Quasar you can wrap your web application with Cordova to create hybrid web applications that run on both
      IOS and Android. You can also wrap for electron and deploy to desktop computers allowing a true write once run anywhere mentality from one code base with just a
      few simple tweaks.
    </p>
    <p>
      Add in the power of Node.js to provide package managment and you have a simple to learn quality architecture that will allow developers to pool
      there efforts more effectively to produce quality and performant software solutions for todays rapidly increasing market pace.
    </p>
    <p>
      With all these promises you're probably thinking "Durban it just cant be so!
      There is one team for every platform, that must have lag, its gonna be complicated, etc.."
      well fear not padawan for once I show you the ease of Quick Venom you wont be able to stop coding.
    </p>
    <h2>Quasar</h2><hr/>
    <p>
      Quasar is a framework that allows the creation of highly Responsive Websites, Hybrid Mobile Apps, and Electron apps.
      All this from the same exact codebase, with very minimal toying around on the backend.
    </p>
    <p>
      Quasar is one of my personal favorite technologies because it is so incredibly powerful yet easy to use.
      With minimal commands you can have a website and App built in a snap. To learn more about Quasar and how
      to configure it for use in a Quick Venom Application <span class="link" v-on:click="quasarNav">click here.</span>
    </p>
    <h2>Webpack</h2><hr/>
    <p>
      Webpack serves to bundle and minify all your applications various assets, including images, .js files,
      and .css files. This greatly increases application eficiency and also serves to improve stability.
      To learn more about Webpack and how to configure it for use with a Quick Venom Application <span class="link" v-on:click="webpackNav">click here.</span>
    </p>
    <h2>Cordova</h2><hr/>
    <p>
      Cordova wraps your web application and allows it to run as a Hybrid App on iOS and Android phones. As well
      you can write plugins that allow you to access native code and functionality from within your web application.
      This also allows you to use web technologies and native technologies side by side to bring a truly inovative application
      to market with only one team producing all platforms.
    </p>
    <p>
      With many premade Cordova plugins for things like geolocation, photos, and bluetooth,
      as well as a rich community of user created plugins it truly brings huge functionality
      to our application stack. To learn more about Cordova and how to configure it for use in a
      Quick Venom Application <span class="link" v-on:click="cordovaNav">click here.</span>
    </p>
    <h2>Vue.js</h2><hr/>
    <p>
      Vue is our Front End Framework providing a huge amount of functionality. Firstly it provides a
      Single Page Application or SPA Architecture which is signifigantly more user friendly as it
      dynamically rerenders only what needs to change on navigation. As well as providing for
      highly efficient DOM node manipulation, and being an extremely lightweight package. Not only that but
      unlike Angular or React you dont have to learn much additional syntax to get started. You still use HTML,
      CSS, and Javascript.
    </p>
    <p>
      Everything is Highly Componetized, so all your code for each piece of functionality
      is all in one .Vue file containing a Template, Script, and Style tags. You then layer these components of
      functionality to build your web application as a single page, no break in user engagement.
      I could go on and on about Vue.js as I absolutely love this framework, so if you are interested in learning
      more about Vue and how to configure it for use in a Quick Venom Application <span class="link" v-on:click="vueNav">click here</span>
    </p>
    <h2>Express</h2><hr/>
    <p>
      Express is our web server and Backend Framework, it provides for ultra lightweight and simple configuration to run our
      Quick Venom Application. This takes the built version Quasar spits out and serves it over whatever
      port you specify. You can even get fancy and configure endpoints and lots of other wacky backend stuff.
      To learn more about Express and how to set it up for use in Quick Venom Applications <span class="link" v-on:click="expressNav">click here</span>
    </p>
    <h2>Node.Js</h2><hr/>
    <p>
      Node.js is a package manager for configuring Javascript based applications, it is incredibly easy to use,
      and maintains a massive library of packages you can download and use in your Quick Venom Applications.
      This serves as the backbone of your whole setup, updating packages and installing dependencies with one
      easy command. You'll have to learn more about Node.js to make a Quick Venom application, so
      <span class="link" v-on:click="nodeNav">click here</span> to learn all you need to know, you wont regret
      it.
    </p>
    <h2>Ubuntu Server</h2><hr/>
    <p>
      Ubuntu server is a free open source server operating system which fully supports all of the technologies in
      this stack and serves as the most effective hosting solution. I have tutorials on both configuring
      old desktops to serve as development ubuntu servers for the more hands on. As well as Amazon Web Services EC2
      Container Linux Virtualization or in laymans term a Ubuntu Server they maintain for you. <span class="link" v-on:click="ubuntuNav">click here</span>
      to go to the Amazon Web Services Tutorial. <span class="link" v-on:click="ubuntuHandsNav">click here</span> to go to the desktop tutorial.
    </p>
    <h2>MongoDB</h2><hr/>
    <p>
      MongoDB is a NoSql Databasing solution that is free and open source, it works very well with node.js applications,
      and is my personal favorite database software out there. There are no tables to configure, and no forced schema, this
      allows a very custom architecture that changes over time. No more joining tables, or struggling to port thousands of lines
      of customer information to a new table because you forgot to add birthdays. Just make the schema as you go in document collections.
      To learn more about configuring MongoDB to work with your Quick Venom Application <span class="link" v-on:click="mongonav">click here.</span>
    </p>
    <h2>Mongoose</h2><hr/>
    <p>
      Mongoose makes configuring the MongoDB backend quite a bit easier as well as allowing you
      to enforce a schema on a particular object. This allows you to enforce a little order on your NoSql database
      while still maintaining your freedom to change later. It also makes setting up a endpoint for a particular
      object schema say a user account take signifigantly less time. To learn more about configuring Mongoose
      to work with your Quick Venom application <span class="link" v-on:click="mongooseNav">click here.</span>
    </p>
    <h2>Set up</h2><hr/>
    <p>
      Ok so you have an idea of the technologies that make up Quick Venom and what they do,
      but how do you actually build an application? Fear not padawan for soon you will be all set up
      and ready to go. But first we have to install some software, boring I know but all great craftsman
      need good tools.
    </p>
    <h3>Requirements</h3><hr/>
    <a class="link" href="http://www.atom.io"><h3>Atom Text Editor</h3></a>
    <p>My personal favorite text editor, it has plugins for .vue components and has a nice dark color scheme.</p>
    <a class="link" href="https://nodejs.org/en/"><h3>Node.js Package Manager</h3></a>
    <h3>Optional</h3><hr/>
    <a class="link" href="https://developer.android.com/studio/index.html"><h3>Android Studio</h3></a>
    <p>You need the Andoroid SDK to build for Android, Android Studio Auto installs it.</p>
    <a class="link" href="https://www.getpostman.com/"><h3>Postman</h3></a>
    <p>Postman is used to test your backend by configuring Get, Post, Update, and Delete queries to send to your API Backend</p>
    <a class="link" href="https://desktop.github.com/"><h3>Github Desktop</h3></a>
    <p>Github Desktop helps with version control and sharing code with others.</p>
    <hr/>
    <h3>Step By Step</h3>
    <p>
      Ok so now that you have your dependencies installed lets use node package manager
      to install the rest of our stack. Firstly we will want to open command prompt and install
      Quasar globally by running;<br/>
      <span class="code">npm install -g quasar-cli</span><br/>
    </p>
    <p>
      As well if you intend to make this website a hybrid web application install Cordova by running;<br/>
      <span class="code">npm install -g cordova</span><br/>
      now with Quasar installed globally we have to decide which starter kit to choose for our application
      boilerplate. Quasar comes natively with a default pack equipped with webpack, hot-reload, and optional
      Cordova and Electron wrappers. There is also a PWA (Progressive web Application) template, PWA's support
      service workers for offline browsing, save to homescreen functionality, and many more unique but advanced features.
      For this tutorial we will be sticking with the default but you are welcome to fiddle and explore at your leisure.
    </p>
    <p>
      To initialize a quasar project run;<br/>
      <span class="code">quasar init default project_name</span><br/>
      where project_name = whatever you want to call your project. then;<br/>
      <span class="code">cd project_name</span><br/>
      <span class="code">npm install</span><br/>
      Then after Node auto installs some dependencies and other packages you can run;<br/>
      <span class="code">quasar dev</span><br/>
      Now if everything went properly your browser should automatically open and display the quasar logo. So now
      you have successfully set up a running quasar application, here's the best part it already installed and set up
      Vue, Express, and Webpack for you. You simply edit the .vue files in your components folder to build your application
      <span class="link" v-on:click="vueNav">click here</span> for more on setting up .vue files and components.
    </p>
    <h3>Wrapping with Cordova</h3>
    <p>
      Now that you have Quasar configured and running you can wrap your application with cordova to deploy to
      ios and Android platforms. If you installed cordova above with;<br/>
     <span class="code">npm install -g cordova</span><br/>
      simply run; <br/>
      <span class="code">quasar build</span><br/> To build for deployment.<br/>
      <span class="code">quasar wrap cordova</span><br/> to wrap with cordova.<br/>
      <span class="code">cd cordova</span><br/> to navigate to the cordova folder.
      Now you need to open up the config.xml in the cordova folder in Atom.
      You want to edit the id attribute of the widget tag, the string in the name tag,
      the string in the description tag, the email and href attributes of the author tag as
      well as the string within. Save and close it and then run;<br/>
      <span class="code">cordova platform add android</span><br/> to add the android platform.<br/>
      <span class="code">cordova build android</span><br/> to build for android.<br/>
      <span class="code">cordova run android</span><br/> to deploy to plugged in device/emulator.
      if it throws a <span class="error">Error: Cannot read property 'replace' of undefined</span> error <span class="link"><a href="https://stackoverflow.com/questions/44687476/cordova-android-emulator-cannot-read-property-replace-of-undefined">click here</a></span>
      If all went according to plan then you should have the emulator pop up and display the quasar logo in an app.
    </p>
    <p>
      This has been the Quick Venom Basics Tutorial, I hope it shed some light on how to set up the
      default template. For further information check out our other Articles where we take a look at each technology
      in detail.
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
  name: 'firstArticle',
  data () {
    return {
    }
  },
  methods: {
    quasarNav: function () {
      this.$router.push('/quasar')
    },
    webpackNav: function () {
      this.$router.push('/webpack')
    },
    cordovaNav: function () {
      this.$router.push('/cordova')
    },
    vueNav: function () {
      this.$router.push('/vue')
    },
    expressNav: function () {
      this.$router.push('/express')
    },
    nodeNav: function () {
      this.$router.push('/node')
    },
    ubuntuNav: function () {
      this.$router.push('/ubuntu')
    },
    ubuntuHandsNav: function () {
      this.$router.push('/ubuntuhands')
    },
    mongonav: function () {
      this.$router.push('/mongodb')
    },
    mongooseNav: function () {
      this.$router.push('/mongoose')
    }
  }
}
</script>

<style scoped lang="less">
@headText: 'Montserrat', sans-serif;
@bodyText: 'Montserrat', sans-serif;
@mainColor: #1bad4a;
  .main {
    font-size: 1em;
    text-align: justify;
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
    font-family: 'Montserrat', sans-serif;
    text-align: center;
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
    margin-bottom: 10px;
  }

  ul {
    font-family: @headText;
  }

  .socialLinks {
    text-align: center;
  }

  .link {
    color: #1bad4a;
    text-decoration: underline;
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
