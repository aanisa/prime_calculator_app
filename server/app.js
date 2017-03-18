/*We are going to be building a calculator application using jQuery, Node, and Express!!
The logic for the calculator needs to be housed on the Server, where the client side
will take in the values (in 2 input text fields) and the type of mathematical operation
(selected using a button on the DOM). Each of the numerical values and type of mathematical
operation will be bundled up in an object and then sent to the server via a POST.
So when the object is sent, it should look something like this: { x: 3, y: 4, type: Add }
Once the server receives it, build out logic to compute the numbers in 1 of 4 different ways.
esThe server should be able to handle Addition, Subtraction, Multiplication, and Division. Once the calculation is complete, it should be sent back down to the client side app where it should be displayed on the DOM.
Finally, build a 'clear' button that resets the whole experience. */


var express = require('express');
var app = express();
var path = require('path');
var port = 7000;


app.use(express.static('server/public'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve('server/public/views/index.html'));
});

app.listen(port, function(req, res) {
  console.log('listening on', port);
});
