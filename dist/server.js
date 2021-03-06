'use strict';

var express = require('express');
var path = require('path');

var app = express();

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')));

app.get(/\/math.*/, function (req, res) {
  // and drop 'public' in the middle of here
  res.sendFile(path.join(__dirname, 'public/MathSite/dist', 'index.html'));
});

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  // and drop 'public' in the middle of here
  res.send('Hello!');
});

var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log('Production Express server running at localhost:' + PORT);
});