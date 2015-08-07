// server.js

// models =================================================
var express        = require('express');
    var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment');
var app            = express();

// configuration ===========================================

// config files
var db = require('./config/db.js');

// set our port
var port = process.env.PORT || 8080;

// connect to our mongoDB database
var connection = mongoose.connect(db.url);
autoIncrement.initialize(connection);

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());
//
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes ==================================================
require('./app/routes/routes')(app);

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

console.log('Location For Vacation server on port: ' + port);

// expose app
exports = module.exports = app;

