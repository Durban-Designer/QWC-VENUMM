<template>
  <div class="main">
    <h2>Mongoose</h2>
    <p>
      Hello and welcome to the Mongoose Tutorial, today I will be walking you through how to connect to your Mlab
      Database instance and how to use Mongoose to configure your object Schema. If you dont already have an Mlab Database
      spun up <span class="link" v-on:click="$router.push('/mongobd')">click here</span> for a tutorial. Otherwise read on
      for a deep dive into using Mongoose with your Quick Venom application.
    <p>
    <h4>Set up</h4>
    <p>
      First we have to create a new folder in our build directory called API to contain the API server and backend logic.
      In the folder create a new file called package.json and paste the following into it;<br/>
      <textarea class="code">
        {
          "name": "API-Server",
          "version": "1.0.0",
          "scripts": {
            "start": "node app.js"
          },
          "dependencies": {
            "express": "^4.16.1",
            "mongo": "^0.1.0",
            "lodash": "^4.17.4",
            "mongodb": "^2.2.31",
            "mongoose": "^4.11.14"
          }
        }
      </textarea><br/>
      Then run the following command in command prompt from within your API folder;<br/>
      npm install<br/>
      Then you need to make an app.js file and paste in the following;
      <textarea class="code">
        // require dependencies
        var express = require("express");
        var mongoose = require('mongoose');
        // specify port
        var port = 80;
        // define app to equal express object
        var app = express();
        // define router to equal express router object
        var router = express.Router();
        // define a universal path to find files at /views/
        var path = __dirname + "/views/";
        // require example.js to import mongoose schema
        require("./example");
        // define examples to be the examples.js file
        var examples = require("./examples.js");

        // tell mongoose to use the global promise engine
        mongoose.Promise = global.Promise;

        // connect to your mlab database replace "change_me" to the mlab link that should look something like so;
        // mongodb://<dbuser>:<dbpassword>@ds133136.mlab.com:33136/db_name
        mongoose.connect("change_me", {
          useMongoClient: true
        }, function (error) {
          console.log(error);
        })

        // express object use static pathing and the router object
        app.use(express.static(path));
        app.use("/",router);

        // set our access control settings
        app.use(function(req, res, next) {
          res.header("Access-Control-Allow-Origin", "*")
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
          res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS')
          next()
        })

        // tell express that any queries of /example should go to the examples.js file
        app.use("/example", examples);

        // tell the router that any get requests made to / should be sent the index.html
        router.get("/", (req,res) => {
          res.sendFile(path + "index.html");
        })

        // tell the express object to listen at your port variable for requests
        app.listen(port, () => {
          console.log("Live at Port " + port);
        })

        router.use( (req,res,next) => {
          console.log("/" + req.method);
          next();
        })

        // send 404 if no other requests match
        app.use("*", (req,res) => {
          res.sendFile(path + "404.html");
        })
      </textarea><br/>
      I commented throughout explaining what each part of the code is doing. You also need to make an example.js file and paste
      in the following;<br/>
      <textarea class="code">
        // require mongoose as a dependency
        var mongoose = require("mongoose");
        // tell mongoose to create a new Schema called ExampleSchema
        var ExampleSchema = new mongoose.Schema({
          // the example schema has one item called exampleString
          // which is a string that is required to make an example object
          exampleString: {
            type: String,
            required: true
          }
        })

        // Example is a mongoose model mapped to the ExampleSchema
        var Example = mongoose.model("Example", ExampleSchema);

        // export the Example Mongoose model
        module.exports = Example;
      </textarea><br/>
      As well as making an examples.js to tell express what to do with the example.js model.
      <textarea class="code">
        // require dependencies
        var express = require("express");
        var mongodb = require("mongodb");
        var _ = require("lodash");
        var app = express();
        var router = express.Router();
        var mongoose = require("mongoose");
        // import Example mongoose model
        var Example = mongoose.model("Example");

        // define what to do when the router receives a post Request
        router.post("/", (req,res) => {
          // create a new example object using the mongoose model
          var newExample = new Example({
            // the exampleString is equal to the requests bodies exampleString
            exampleString: req.body.exampleString
          })
        })

        // what to do when the router receives a get request
        router.get("/:id", (req, res) => {
          // define exampleid to equal the requests id parameter
          var exampleid = new mongodb.ObjectID(req.params["id"]);
          // find an example by its id
          Example.findOne({"_id": exampleid},function (err, examples) {
            if (err) {
              // if an error is thrown return that error
              res.send(err);
            } else {
              // return the examples found
              res.send(examples);
            }
          })
        })

        // what to do when the router receives a put request
        router.put("/:id", (req, res) => {
          // define exampleid to equal the requests id parameter
          var exampleid = new mongodb.ObjectID(req.params["id"]);
          // find an example by its id
          Example.find({"_id": exampleid},function (err, example) {
            if (err) {
              // if an error is thrown return that error and a 500 status
              res.status(500).send(err);
            } else {
              // define example to equal the example array position 0
              var example = example[0];
              // set the example objects exampleString equal to itself or the request body exampleString
              example.exampleString = req.body.exampleString || example.exampleString;

              // save the example
              example.save(function (err, example) {
                if (err) {
                  // if an error is thrown return that error and a 500 status
                  res.status(500).send(err)
                } else {
                  // send the example
                  res.send(example);
                }
              });
            }
          });
        })

        // what to do when the router receives a delete request
        router.delete("/", (req, res) => {
          // exampleid equals the request bodies id
          var exampleid = req.body._id;
          // find the example based on id and delete it
          Example.find({_id: exampleid}).remove().then(() => {
            // if you delete it send a string saying sucess
            res.send("success");
          })
        })

        // export the router
        module.exports = router;
      </textarea><br/>
      Now we have to make a views folder and make a index.html file pasting the following into it;
      <textarea class="code">
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>stuff</title>
          </head>
          <body>
            stuff
          </body>
        </html>
      </textarea>
      Now if we open back up command prompt and run npm start the server should start right up saying live at port 80.
      If you run a get on http://localhost:80 it should return your index.html, and if you have postman you can
      experiment with running post, update, and delete requests to your database. If you make a post with a
      body { 'exampleString':'example'} it should store in the database no problem and when you run a get with its id
      it should return the string 'example', I hope this has shed a little light on configuring a backend with mongoose
      for storing persistent data, look forward to more articles in the future going more in depth into how to use Mongoose
      with your Quick Venom Application. 
    </p>
    <div class="articleClose">
      <div class="royceImage"></div>
      <p>
        Royce Birnbaum is the President of Screen Art Studios as well as a Full Stack
        Web Developer, Graphic Designer, and Author. Specializing in the Quick Venom Web Stack, and serving as
        the lead Author for the <a href="http://www.quickvenom.org"class="link">QuickVenom.org</a> blog.
        He also runs his own blog at <a href="http://www.durbandesigner.com"class="link">DurbanDesigner.com</a>
        which showcases his Eight Years of Graphic Design Experience and serves as a hub for all his Art past and present.
      </p>
      <div class="socialLinks">
        <div class="linkedIn"><a href="https://www.linkedin.com/in/royce-birnbaum-233939145/">LinkedIn</a></div>
        <div class="github"><a href="https://github.com/Durban-Designer">Github</a></div>
        <div class="facebook"><a href="https://www.facebook.com/royce.birnbaum.5">Facebook</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mongoose',
    data () {
      return {
      }
    }
  }
</script>

<style lang="less">
</style>
