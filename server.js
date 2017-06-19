var express = require('express');
var app = express();
var index = require('./modules/routes/index');
var messages = require('./modules/routes/messages');

app.use(express.static('public'));
app.use('/', index);
app.use('/messages', messages);

var port = process.env.PORT || 3000;

app.listen( port, function(){
  console.log('server up on:', port);
}); // end server up
