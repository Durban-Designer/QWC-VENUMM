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
      functionality that is granted with this application stack. Firstly you can create rock solid and lightweight Single Page Applications easily and quickly thanks to
      templating in both Quasar and Vue. Secondarily thanks to Quasar you can wrap your web application with Cordova to create hybrid web applications that run on both
      IOS and Android. You can also wrap for electron and deploy to desktop computers allowing a true write once run anywhere mentality from one code base with just a
      few simple tweaks. Add in the power of Node.js to provide package managment and you have a simple to learn quality architecture that will allow developers to pool
      there efforts more effectively to produce quality performant software solutions to todays rapidly increasing marketplace. With all these promises you're probably thinking
      "Durban it just cant be so! There is one team for every platform, that must have lag, its gonna be complicated, etc.." while fear not padiwan for once I show you the ease
      of Quick Venom you wont be able to stop coding.
    </p>
    <h2>Quasar</h2><hr/>
    <p>
      Quasar is a framework that allows the creation of highly Responsive Websites, Hybrid Mobile Apps, and Electron apps.
      All this from the same exact codebase, with very minimal toying around on the backend. Quasar is one of my personal favorite
      technologies because it is so incredibly powerful yet easy to use. With minimal commands you can have a website and
      App built in a snap. To learn more about Quasar and how to configure it for use in a Quick Venom Application <span class="link" v-on:click="quasarNav">click here.</span>
    </p>
    <h2>Webpack</h2><hr/>
    <p>
      Webpack serves to bundle and minify all your applications various assets, including images, .js files,
      and .css files. This greatly increases application eficiency and also serves to improve stability.
      To learn more about Webpack and how to configure it for use with a Quick Venom Application <span class="link" v-on:click="webpackNav">click here.</span>
    </p>
    <h2>Cordova</h2><hr/>
    <p>
      Cordova wraps your web application and allows it to run as a Hybrid App on Ios and Android phones. As well
      you can write plugins that allow you to access native code and functionality from within your web application.
      This also allows you to use web technologies as well as native technologies side by side to bring a truly inovative application
      to market with only one team producing all platforms. As well with many premade Cordova plugins for things like
      geolocation, photos, and bluetooth, as well as a rich community of user created plugins it truly brings huge
      functionality to our application stack. To learn more about Cordova and how to configure it for use in a Quick Venom Application
      <span class="link" v-on:click="cordovaNav">click here.</span>
    </p>
    <h2>Vue.js</h2><hr/>
    <p>
      Vue is our Front End Framework providing a huge ammount of functionality. Firstly it provides a
      Single Page Application or SPA Architecture which is signifigantly more user friendly as it
      dynamically rerenders only what needs to change on navigation. As well as providing for
      highly efficient DOM node manipulation, and being an extremely lightweight package. Not only that but
      unlike Angular or React you dont have to learn much additional syntax to get started. You still use HTML,
      CSS, and Javascript. Everything is Highly Componetized, so all your code for each piece of functionality
      is all in one .Vue file containing a Template, Script, and Style tags. You then layer these components of
      functionality to build your web application as a single page, no break in user engagement.
      I could go on and on about Vue.js as I absolutely love this framework, so if you are interested in learning
      more about Vue and how to configure it for use in a Quick Venom Application <span class="link" v-on:click="vueNav">click here</span>
    </p>
    <h2>Express</h2><hr/>
    <p>
      Express is our web server, it provides for ultra lightweight and simple configuration to run our
      Quick Venom Application. This takes the built version Quasar spits out and serves it over whatever
      port you specify. You can even get fancy and configure endpoints and lots of other wacky backend stuff.
      To learn more about Express and how to set it up for use in Quick Venom Applications <span class="link" v-on:click="expressNav">click here</span>
    </p>
    <h2>Node.Js</h2><hr/>
    <p>
      Node.js is a package manager for configuring Javascript based applications, it is incredibly easy to use,
      and maintains a massive library of packages you can download and use in your Quick Venom Applications.
      This serves as the backbone of your whole setup updating packages and installing dependencies with one
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
      while still maintaining your freedom to change later. It makes setting up a endpoint for a particular
      object schema say a user account take signifigantly less time. To learn more about configuring Mongoose
      to work with your Quick Venom application <span class="link" v-on:click="mongooseNav">click here.</span>
    </p>
    <h2>Set up</h2><hr/>
    <p>
      Ok so you have an idea of the technologies that make up Quick Venom and what they do,
      but how do you actually build an application? Fear not padiwan for soon you will be all set up
      and ready to go. But first we have to install some software, boring I know but all great craftsman
      need good tools.
    </p>
    <h3>Requirements</h3><hr/>
    <h4 class="link"><a href="http://www.atom.io">Atom Text Editor</a></h4>
    <p>My personal favorite text editor, it has plugins for .vue components and has a nice dark color scheme.</p>
    <h4 class="link"><a href="https://nodejs.org/en/">Node.js Package Manager</a></h4>
    <h3>Optional</h3><hr/>
    <h4 class="link"><a href="https://developer.android.com/studio/index.html">Android Studio</a></h4>
    <p>You need the Andoroid SDK to build for Android, Android Studio Auto installs it.</p>
    <h4 class="link"><a href="https://www.getpostman.com/">Postman</a></h4>
    <p>Postman is used to test your backend by configuring Get, Post, Update, and Delete queries to send to your API Backend</p>
    <h4 class="link"><a href="https://desktop.github.com/">Github Desktop</a></h4>
    <p>Github Desktop helps with version control and sharing code with others.</p>
    <hr/>
    <h3>Step By Step</h3>
    <p>
      Ok so now that you have your dependencies installed lets use node package manager
      to install the rest of our stack. Firstly we will want to open command prompt and install
      Quasar globally by running;<br/>
      <span class="code">npm install -g quasar-cli</span><br/>
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
      <span class="code">quasar init default project_name</span>
      where project_name = whatever you want to call your project. then;
      <span class="code">cd project_name</span>
      <span class="code">npm install</span>
      Then after Node auto installs some dependencies and other packages you can run;
      <span class="code">quasar dev</span>
      Now if everything went properly your browser should automatically open and display the quasar logo. So now
      you have successfully set up a running quasar application, here's the best part it already installed and set up
      Vue, Express, and Webpack for you. You simply edit the .vue files in your components folder to build your application
      <span class="link" v-on:click="buildingNav">click here</span> for more on setting up .vue files and components.
    </p>
    <h3>Wrapping with Cordova</h3>
    <p>
      Now that you have Quasar configured and running you can wrap your application with cordova to deploy to
      ios and Android platforms. If you installed cordova above with <span class="code">npm install -g cordova</span>
      simply run; <br/>
      <span class="code">quasar build</span><br/> To build for deployment.
      <span class="code">quasar wrap cordova</span><br/> to wrap with cordova.
      <span class="code">cd cordova</span><br/> to navigate to the cordova folder.
      Now you need to open up the config.xml in the cordova folder in Atom.
      You want to edit the id attribute of the widget tag, the string in the name tag,
      the string in the description tag, the email and href attributes of the author tag as
      well as the string within. Save and close it and then run;<br/>
      <span class="code">cordova platform add android</span><br/> to add the android platform.
      <span class="code">cordova build android</span><br/> to build for android.
      <span class="code">cordova run android</span><br/> to deploy to plugged in device/emulator.
      if it throws a <span class="error">Error: Cannot read property 'replace' of undefined</span> error <span class="link"><a href="https://stackoverflow.com/questions/44687476/cordova-android-emulator-cannot-read-property-replace-of-undefined">click here</a></span>
      If all went according to plan then you should have the emulator pop up and display the quasar logo in an app.
    </p>
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
      },
      buildingNav: function () {
        this.$router.push('/building')
      }
    }
  }
</script>

<style lang="less">
  .main {
    font-size: 1em;
    text-align: justify;
  }

  .link {
    text-decoration: underline;
  }

  h1 {
    text-align: center;
  }
</style>
