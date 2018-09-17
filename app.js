var express = require('express');
app = express(),
port = process.env.PORT || 3000,
path = require('path');
loginController = require('./controller');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, "js")));
loginController.logincontroller(app);
app.listen(port);
console.log('Server started on: ' + port);
