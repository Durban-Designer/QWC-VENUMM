var mongoose = require("mongoose");
var MessagesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: String,
  message: String,
  time: {
    month: String,
    day: String,
    hour: String,
    minute: String
  }
})

var Messages = mongoose.model("Messages", MessagesSchema);

module.exports = Messages;
