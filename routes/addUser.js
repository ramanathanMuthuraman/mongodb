var express = require('express');
var router = express.Router();
var url = require('url');
/* GET users listing. */
router.post('/', function(req, res) {


	var db = req.db;
    var collection = db.get('usercollection');
        collection.insert({
        "username" : req.body.username,
        "email" : req.body.useremail
    }, function (err, doc) {
    	if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
        	  collection.find({},{},function(e,docs){
     			console.log(docs)
       			res.render("userlist", {
            		userlist : docs
        		});
    		});
 
		}
     });
   
});

module.exports = router;
