var express = require('express');
var router = express.Router();
var db=require('../E-Wallet/dbconnection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'SignUp' });
});

router.post('/signup', function(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var accountNo = req.body.accno;

  var sql = `INSERT INTO contacts (name, email, accountNo) VALUES ("${name}",  "${email}", "${accountNo}", NOW())`;
  db.query(sql, function(err, result) {
    if (err) throw err;
    console.log('record inserted');
    req.flash('success', 'Data added successfully!');
    res.redirect('/');
  });
});

module.exports = router;