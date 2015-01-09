var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	//  res.setEncoding('utf8');
	var secret  = req.session.secret.toString();
	console.log(secret)
  res.write(secret);
  res.end();
});

module.exports = router;
