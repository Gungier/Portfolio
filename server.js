// /**
//  * module dependencies
//  */

//  var express = require('express');
// //  var routes = require('./routes');
// //  var user =require('./')
//  var path = require('path');
 
//  var mongoose = require('mongoose');

//  var app = express();

//  //setting environmental factors
//  var PORT = process.env.PORT || 3001;

//  app.set('views', path.join(__dirname, 'views'));
//  app.set('view engine');
 
//  // setup body-parser for json
//  app.use(express.urlencoded({
//     extended: true
//   }));
//   app.use(express.json());
 
 
//   app.use(express.static(path.join(__dirname, 'public')));

//  // dev only reqs
//  if ('develoopment' == app.get('env')) {
//      app.use(express.errorHandler());
//      mongoose.connect('mongodb://localhost:27017/portfolio');
//  };

 
// //  if (process.env.NODE_ENV === "production") {
// //     app.use(express.static("client/build"));
// //     app.get("/*", function(req, res) {
// //       res.sendFile(path.join(__dirname, "./client/build/index.html"));
// //     });
// //   }
  
// //   else {
// //     app.use(express.static(path.join(__dirname, '/client/public')));
// //     app.get("/*", function(req, res) {
// //       res.sendFile(path.join(__dirname, "./client/public/index.html"));
// //     });
// //   }

// app.listen(app.get('port'), function(){
//      console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//      PORT
//    );
//  });