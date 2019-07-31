/**
 * module dependencies
 */

 var express = require('express');
 var routes = require('./client/node_modules/routes');
 var path = require('path');

 var app = express();

 //setting environmental factors
 app.set('port', process.env.PORT || 5000);
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'jade');
 app.use(express.loggger('dev'));
 app.use(express.json());
 app.use(express.urlencoded());
 app.use(express.methodOverride());
 app.use(app.router);
 app.use(express.static(path.join(__dirname, 'public')));

 // dev only reqs
 if ('development' === app.get('env')) {
     app.use(express.errorHandler());
 }

 app.get('/', function(req, res) {
     res.send('ok');
 });

 http.createServer(app).listen(app.get('port'), function(){
     console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
     PORT,
     PORT
   );
 });