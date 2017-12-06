<template>
  <div class="main">
    <h1>Ubuntu Server</h1><hr/>
    <p>
      This article is a tutorial for setting up an Ubuntu Server instance on Amazon Web Services,
      this server will serve to host both the API server backend as well as your actual Quick Venom Application.
      If you are interested in setting up your own local Ubuntu Server on a Desktop computer
      <span class="link" v-on:click="ubuntuHandsNav">click here.</span>
    </p>
    <h2>Requirements</h2><hr/>
    <ul>
      <li><a class="link" href="http://www.putty.org/">Putty</a> - An ssh client for accessing your server.</li>
      <li><a class="link" href="https://winscp.net/eng/download.php">WinScp</a> - A visual file system browser for accessing your server.</li>
      <li><a class="link" href="https://aws.amazon.com/">An Amazon Web Services Account</a></li>
    </ul>
    <h2>Step By Step</h2>
    <p>
      Log in to Amazon Web Services and from your dashboard click on the ec2 link to go to your
      ec2 managment console. Click on the large blue launch instance button, then scroll until you
      see Ubuntu Server. Click the large blue Select Button to the right and then if you are ok with a free instance
      click on the 6.Configure Security Group tab on the upper right. Click Add Rule on the bottom left and in
      the left dropdown box in the type column select http, then set the source column box for both the ssh and
      http rules to anywhere. After that click Review and Launch to the bottom right and then Launch.
      It should bring up a dialogue box asking you to create an RSA key pair.
      (If you dont know what RSA keys are <span class="link" v-on:click="rsaNav">click here</span> for a tutorial.)
      click the top dropdown and select create a new key pair, then type in a name in the input box below. After that
      click the Download Key Pair button and save the key in a place you wont lose it, you'll need it to log in.
      Now open PuttyGen which should have installed with Putty, and click the conversions tab in the upper right.
      Click the import key option and then navigate to where you saved the .pem file and open it in PuttyGen.
      Then click the save private key button to the bottom right, this will save the key in a .ppk format so you can
      ssh into your server with putty. Now open back up your AWS and click the big blue Launch Instances button
      in the lower right corner to send your server live.
    </p><hr/>
    <h4>Momentary break</h4><hr/>
    <p>
      Ok so we have spun up our amazon web server, and downloaded our RSA keys to access her. (yes servers are a she.)
      Now we can log in with Putty and configure all of our Quick Venom dependencies. So before we get into launching
      your application you need to have one built. So if you still haven't gone through our basics tutorial
      <span class="link" v-on:click="basicsNav">click here.</span>
    </p>
    <h4>Back on Track</h4><hr/>
    <p>
      In your Amazon Web Services window click on the view instances button in your EC2 managment console. Copy your Public DNS (IPv4)
      for your instance and then open up putty. In host type ubuntu@ then paste in the public DNS it should looks something like;<br/>
      ubuntu@ec2-53-220-177-66.us-west-2.compute.amazonaws.com<br/>
      in the saved sessions box type Amazon, then on the left click the little plus to the left of SSH and then click on auth.
      in the bottom right click browse and navigate to your private key .ppk file we converted earlier in PuttyGen.
      then click session on the left and click save on the lower right to save this configuration for later.
      Now click open in the bottom right, if all goes well a dialogue box should pop up saying "server key is not cached" click yes.
      Then it should connect and show;<br/> ubuntu@ip-111-111-111-111:~$<br/> (with different numbers for the ip.)<br/>
      Congratulations you have succesfully connected into your Amazon Web Services instance, read on for how to configure it to run
      Quick Venom Applications.
    </p>
    <h4>Terminal Time</h4>
    <p>
      In your terminal type in the following commands with your project name;<br/>
      sudo apt-get update<br/>
      sudo apt-get install npm<br/>
      sudo apt-get install build-essential libssl-dev<br/>
      curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | sh<br/>
      source ~/.profile<br/>
      nvm install 9.2.0<br/>
      sudo apt-get install pm2 -g<br/>
      sudo mkdir /var/www/projectname<br/>
      sudo chmod 777 -R /var/www/projectname<br/>
      this updates your list of available packages, installs nodejs and node package manager with Node Version Manager,
      and installs pm2 which will enable us to run node applications for production. Then you make a new directory
      for websites and change its permissions to allow you to copy in files over ssh with winScp. The -R flag tells
      the chmod to run recursively. Now we have to use WinScp to copy our Quick Venom application over to the server
      in the projectname folder. In Winscp in the Host name input put your public dns from your EC2 console, and in username
      put ubuntu. Click advanced and on the left below SSH click Authentication, in the private key file box click
      the three dots, navigate to your private key file and double click it. Click ok then save the configuration for later, below click login and if all
      went well you should login and see a graphical representation of your servers directories. navigate to /var/www/projectname and copy
      in your Quick Venom Application. Then re open your terminal so we can change directory into the project folder and install dependencies with;
      sudo npm install -g quasar-cli<br/>
      sudo chmod 777 -R /var/www/projectname<br/>
      sudo cd /var/www/projectname<br/>
      sudo npm install<br/>
      sudo quasar dev<br/>
      If all went well it should host the project and compile succesfully, to test go to your servers public ipv4 ip address
      and it should display your application. If so hit ctrl + c to break the operation and then get read to add the app to pm2,
      to do so simply run;<br/>
      pm2 start build/dev-server.js -i 0 --name "projectname"<br/>
      Now pm2 should keep the server up and running indefinetly even if the server reboots, or the application crashes.
      This was my Ubuntu Server Tutorial for Quick Venom Applications I hope you enjoyed it, I will be writing more Articles
      in this series in the future explorinjg more in depth the powerful role Ubuntu Server Plays in our Stack.
    </p>
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

<style lang="less">
  .link {
    text-decoration: underline;
  }
</style>
