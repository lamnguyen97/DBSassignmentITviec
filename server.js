// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 5000;
//var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var path     = require('path');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
//var session      = require('express-session');
var connection      = require('./services/connection')
//var configDB = require('./config/database.js');
const getTopRoute =require('./services/routes/getTopCompany');
const getJob =require('./services/routes/job');
const getCompany =require('./services/routes/company');
const user =require('./services/routes/user');

//require('./config/passport')(passport); // pass passport for configuration



/*app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*"); // keep this if your api accepts cross-origin requests
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token");
   next();
});*/
// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('services/routes'));
// required for passport


app.use('/getTop',getTopRoute);
app.use('/job',getJob);
app.use('/company',getCompany);
app.use('/user',user);
//app.use('/auth',auth);
//app.use('/job/:id',getSingleJob);
// routes ======================================================================
//require('./routes')(app, passport); // load our routes and pass in our app and fully configured passport





// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);