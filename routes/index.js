var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

	
	var secret = Math.random();
	console.log(secret);
	req.session.secret = secret;


  res.render('index');
});

module.exports = router;
