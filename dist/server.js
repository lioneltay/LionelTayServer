'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// serve our static stuff like index.css
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

app.get('/math/*', function (req, res) {
  // and drop 'public' in the middle of here
  res.sendFile(_path2.default.join(__dirname, 'public/MathSite/dist', 'index.html'));
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