var express = require('express');
var app = express();
var port = 3000;

app.use(express.static(`${__dirname}/../client/dist`));
app.get((req, res) => {
  console.log("it works");
  res.send("hello world from server");
});

app.listen(port, () => console.log("listening on", port));



// // var request = require('request');
// var proxy = require('express-http-proxy');
// var app = express();

// // app.use('/api', proxy('localhost:1999', {
// //     proxyReqOptDecorator: function() {
// //         return Promise.reject('Connection to proxy rejected');
// //     }
// // }));

// var express  = require('express');
// var app      = express();
// var httpProxy = require('http-proxy');

// var apiProxy = httpProxy.createProxyServer();
// var serverOne = 'http://localhost:1177',
//     ServerTwo = 'http://localhost:8080',
//     ServerThree = 'http://localhost:3004';
//     ServerThree = 'http://localhost:3002';
 
// app.all("/restaurants/*", function(req, res) {
//     console.log('redirecting to Server1');
//     apiProxy.web(req, res, {target: serverOne});
// });

// // app.all("/app2/*", function(req, res) {
// //     console.log('redirecting to Server2');
// //     apiProxy.web(req, res, {target: ServerTwo});
// // });

// // app.all("/app2/*", function(req, res) {
// //     console.log('redirecting to Server3');
// //     apiProxy.web(req, res, {target: ServerThree});
// // });

// // app.listen(3000);