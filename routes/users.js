var express = require('express');
var router = express.Router();
const User = require('../models/user.js');

/* GET users listing. */
router.post('/login', function(req, res, next) {

    User.findOne({id:req.body.id},function (err,data) {
        if(err){
            //err
        }else{
            if(data === null){
                //not data
            }
            if(data.password === req.body.password){
                // console.log("log password success");
                res.send({result:true});
            }else{
                // console.log("log password faild");
                res.send({result:false});
            }
        }
    });

    function success(){
        res.render('error.html', {
            title: 'User',
            username :req.params.id
        });
    }

});

router.get('/register', function(req, res, next) {
  console.log(res.body);
});

router.get('/:username', function(req, res, next) {

  User.find(function(err, user){
      if (true){
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
