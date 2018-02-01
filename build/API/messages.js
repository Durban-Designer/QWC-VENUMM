var express = require("express");
var mongodb = require("mongodb");
var _ = require("lodash");
var bodyParser = require("body-parser");
var passport = require("passport");
var passportJWT = require("passport-jwt");
var jwt = require('jsonwebtoken');
var app = express();
var router = express.Router();
var mongoose = require("mongoose");
var Message = mongoose.model("Message");
var bcrypt = require('bcryptjs');
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("JWT");
jwtOptions.secretOrKey = 'LokisBreath-420';

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  User.findOne({"_id": jwt_payload.id}, function(err, user) {
    if (err) {
          return next(err, false);
      }
      if (user) {
          return next(null, user);
      } else {
          return next(null, false);
      }
  });
});

app.use(passport.initialize());
passport.use(strategy);
app.use(bodyParser.json());

router.post("/", (req,res) => {
  var newMessage = new Message({
  name: req.body.name,
  email: req.body.email,
  message: req.body.message,
  time: req.body.time
  })

  newMessage.save((err, result) => {
    if(err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
})

router.get("/", passport.authenticate('jwt', { session: false }),(req, res) => {
  Message.find({},function (err, messages) {
    if (err) {
      res.send(err);
    } else {
      res.send(messages);
    }
  })
})

router.get("/name/:name", passport.authenticate('jwt', { session: false }),(req, res) => {
  var commentName = req.params["name"];
  Comment.find({"name": {$regex: '^' + commentName}},function (err, comments) {
    if (err) {
      res.send(err);
    } else {
      res.send(comments);
    }
  })
})

router.get("/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var commentid = new mongodb.ObjectID(req.params["id"]);
  Comment.find({"_id": commentid},function (err, comments) {
    if (err) {
      res.send(err);
    } else {
      res.send(comments);
    }
  })
})

module.exports = router;
