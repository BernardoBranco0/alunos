var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Learning platform', { title: 'Learning platform' });
});

module.exports = router;
