

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


app.use(express.static('server/public'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve('server/public/views/index.html'));
});

app.listen(port, function(req, res) {
  console.log('listening on', port);
});
