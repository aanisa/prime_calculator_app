

/*We are going to be building a calculator application using
jQuery, Node, and Express!!
-The logic for the calculator needs to be housed on the Server,
-Client side will take in the values and the type of mathematical operation
  -(selected using a button on the DOM).
  -value 1, value 2, and type of math ---> bundled up in an object
        --> then sent to the server via a POST.
  -Sent Object: should look like this: { x: 3, y: 4, type: Add }
-Once the server receives it, build out logic to compute the numbers
-Once the calculation is complete, it should be sent back down to the client
-Client side app should display it on the DOM.
-Finally, build a 'clear' button that resets the whole experience. */


var express = require('express');
var app = express();
var path = require('path');
var port = 7000;
var bodyParser = require('body-parser');


app.use(express.static('server/public'));

//get values from inputs and type of operation from client
//add GET, calculations, and response
app.get('/add/:x/:y/:type', function(req, res) {
  console.log(req.params);
  var math = parseInt(req.params.x) + parseInt(req.params.y); //converts string to number
  console.log(math);
  res.send('Sum: ' + math);  //send the answer to the client
});

//subtract GET, calculations, and response
app.get('/subtract/:x/:y/:type', function(req, res) {
  console.log(req.params);
  var math = parseInt(req.params.x) - parseInt(req.params.y); //converts string to number
  console.log(math);
  res.send('Difference: ' + math);  //send the answer to the client
});

//multiply GET, calculations, and response
app.get('/multiply/:x/:y/:type', function(req, res) {
  console.log(req.params);
  var math = parseInt(req.params.x) * parseInt(req.params.y); //converts string to number
  console.log(math);
  res.send('Product: ' + math);  //send the answer to the client
});


//divide GET, calculations, and response
app.get('/divide/:x/:y/:type', function(req, res) {
  console.log(req.params);
  var math = parseInt(req.params.x) / parseInt(req.params.y); //converts string to number
  console.log(math);
  res.send('Quotient: ' + math);  //send the answer to the client
});


//default url
app.get('/', function(req, res) {
  res.sendFile(path.resolve('server/public/views/index.html'));
});


app.listen(port, function(req, res) {
  console.log('listening on', port);
});
