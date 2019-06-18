var express = require('express');
var router = express.Router();
const User = require('../models/user.js');

/* GET users listing. */
router.get('/register', function(req, res, next) {
  console.log(res.body);
});

router.get('/:username', function(req, res, next) {

  User.find(function(err, user){
      if (user[req.params.username[1]]["password"] === "1234"){
        success();
      }else{
        res.render('error.html', {
        });
      }
  });

  function success(){
    res.render('user.html', {
      title: 'User',
      username :req.params.username
    });
  }

});

module.exports = router;
