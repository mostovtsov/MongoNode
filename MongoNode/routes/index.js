var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Sasha/', function(req, res, next) {
   res.send('Sasha\'s page');
});



module.exports = router;
