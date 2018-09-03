<template>
  <div class="main">
    <h1>Ubuntu Server</h1><hr/>
    <p>
      This article is a tutorial for setting up an Ubuntu Server instance on Amazon Web Services,
      this server will serve to host both the API server backend as well as your actual Quick Venom Application.
      If you are interested in setting up your own local Ubuntu Server on a Desktop computer
      <span class="link" v-on:click="ubuntuHandsNav">click here.</span>
    </p>
    <h1>Requirements</h1><hr/>
    <ul>
      <li><a class="link" href="http://www.putty.org/">Putty</a> - An ssh client for accessing your server.</li>
      <li><a class="link" href="https://winscp.net/eng/download.php">WinScp</a> - A visual file system browser for accessing your server.</li>
      <li><a class="link" href="https://aws.amazon.com/">An Amazon Web Services Account</a></li>
    </ul>
    <h1>Step By Step</h1>
    <p>
      Log in to Amazon Web Services and from your dashboard click on the ec2 link to go to your
      ec2 managment console. Click on the large blue launch instance button, then scroll until you
      see Ubuntu Server. Click the large blue Select Button to the right and then if you are ok with a free instance
      click on the 6.Configure Security Group tab on the upper right.
    </p>
    <p>
      Click Add Rule on the bottom left and in the left dropdown box in the type column select http,
      then set the source column box for both the ssh and http rules to anywhere.
      After that click Review and Launch to the bottom right and then Launch,
      it should then bring up a dialogue box asking you to create an RSA key pair.
      (If you dont know what RSA keys are <a class="link" href="https://en.wikipedia.org/wiki/RSA_(cryptosystem)">click here.</a>)
    </p>
    <p>
      click the top dropdown and select create a new key pair, then type in a name in the input box below. After that
      click the Download Key Pair button and save the key in a place you wont lose it, you'll need it to log in.
      Now open PuttyGen which should have installed with Putty, and click the conversions tab in the upper right.
      Click the import key option and then navigate to where you saved the .pem file and open it in PuttyGen.
      Then click the save private key button to the bottom right, this will save the key in a .ppk format so you can
      ssh into your server with putty. Now open back up your AWS and click the big blue Launch Instances button
      in the lower right corner to send your server live.
    </p><hr/>
    <h1>Momentary break</h1><hr/>
    <p>
      Ok so we have spun up our amazon web server, and downloaded our RSA keys to access her. (yes servers are a she.)
      Now we can log in with Putty and configure all of our Quick Venom dependencies. So before we get into launching
      your application you need to have one built. So if you still haven't gone through our basics tutorial
      <span class="link" v-on:click="basicsNav">click here.</span>
    </p>
    <h1>Back on Track</h1><hr/>
    <p>
      In your Amazon Web Services window click on the view instances button in your EC2 managment console. Copy your Public DNS (IPv4)
      for your instance and then open up putty. In host type ubuntu@ then paste in the public DNS it should looks something like;<br/>
      <span class="code">ubuntu@ec2-53-220-177-66.us-west-2.compute.amazonaws.com</span><br/>
      in the saved sessions box type Amazon, then on the left click the little plus to the left of SSH and then click on auth.
      in the bottom right click browse and navigate to your private key .ppk file we converted earlier in PuttyGen.
      then click session on the left and click save on the lower right to save this configuration for later.
      Now click open in the bottom right, if all goes well a dialogue box should pop up saying "server key is not cached" click yes.
      Then it should connect and show;<br/> <span class="code">ubuntu@ip-111-111-111-111:~$</span><br/> (with different numbers for the ip.)<br/>
      Congratulations you have succesfully connected into your Amazon Web Services instance, read on for how to configure it to run
      Quick Venom Applications.
    </p>
    <h1>Terminal Time</h1>
    <p>
      In your terminal type in the following commands with your project name;<br/>
      <span class="code">sudo apt-get update</span><br/>
      <span class="code">sudo apt-get install npm</span><br/>
      <span class="code">sudo apt-get install build-essential libssl-dev</span><br/>
      <span class="code">curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | sh</span><br/>
      <span class="code">source ~/.profile</span><br/>
      <span class="code">nvm install 9.2.0</span><br/>
      <span class="code">sudo npm install pm2 -g</span><br/>
      <span class="code">sudo mkdir /var/www/projectname</span><br/>
      <span class="code">sudo chmod 777 -R /var/www/projectname</span><br/>
      this updates your list of available packages, installs nodejs and node package manager with Node Version Manager,
      and installs pm2 which will enable us to run node applications for production. Then you make a new directory
      for websites and change its permissions to allow you to copy in files over ssh with winScp. The -R flag tells
      the chmod to run recursively.
    </p>
    <p>
      Now we have to use WinScp to copy our Quick Venom application over to the server
      in the projectname folder. In Winscp in the Host name input put your public dns from your EC2 console, and in username
      put ubuntu. Click advanced and on the left below SSH click Authentication, in the private key file box click
      the three dots, navigate to your private key file and double click it. Click ok then save the configuration for later, below click login and if all
      went well you should login and see a graphical representation of your servers directories. navigate to /var/www/projectname and copy
      in your Quick Venom Application.
    </p>
    <p>
      Now re open your terminal so we can change directory into the project folder and install dependencies with;
      <span class="code">sudo npm install -g quasar-cli</span><br/>
      <span class="code">sudo chmod 777 -R /var/www/projectname</span><br/>
      <span class="code">sudo cd /var/www/projectname</span><br/>
      <span class="code">sudo npm install</span><br/>
      <span class="code">sudo quasar dev</span><br/>
      If all went well it should host the project and compile succesfully, to test go to your servers public ipv4 ip address
      and it should display your application. If so hit ctrl + c to break the operation and then get ready to add the app to pm2,
      to do so simply run;<br/>
      <span class="code">pm2 start build/dev-server.js -i 0 --name "projectname"</span><br/>
      Now pm2 should keep the server up and running indefinetly even if the server reboots, or the application crashes.
      This was my Ubuntu Server Tutorial for Quick Venom Applications I hope you enjoyed it, I will be writing more Articles
      in this series in the future exploring more in depth the powerful role Ubuntu Server Plays in our Stack.
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
  name: 'ubuntu',
  data () {
    return {
    }
  },
  methods: {
    ubuntuHandsNav: function () {
      this.$router.push('/ubuntuhands')
    },
    rsaNav: function () {
      this.$router.push('/rsa')
    },
    basicsNav: function () {
      this.$router.push('/basics')
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
