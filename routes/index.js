var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET userList page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('userCollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist": docs
        });
    });
});

/* GET New User Page */
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

/* Post New User to db*/
router.post('/adduser', function(req, res) {
    var db = req.db;

    var firstName = req.body.first_name;
    var lastName = req.body.last_name;
    var userName = req.body.username;
    var userEmail = req.body.email;

    var collection = db.get('userCollection');

    collection.insert({
        "first_name" : firstName,
        "last_name" : lastName,
        "username" : userName,
        "email" : userEmail
    }, function(err, doc) {
        if (err) {
            res.send("Now what we have here is a failure to communicate (with our database).");
        } 
        else {
            res.redirect("userlist");
        }
    });
});

module.exports = router;
