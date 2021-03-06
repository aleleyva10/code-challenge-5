var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/usermessages');

var messagesSchema = new mongoose.Schema({
  name: String,
  message: String
}); // end schema

var messages = mongoose.model('messages', messagesSchema);

router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());

router.get('/', function(req, res) {
  console.log('/messages get call');
  messages.find().then(function(results) {
    res.send(results);
  }); // end find
}); // end /messages get

router.post('/', function(req, res) {
  console.log('messages post route hit', req.body);

  var newRecord = messages(req.body);
  newRecord.save();
  res.send('ok');
}); // end post

module.exports = router;
