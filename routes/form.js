var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('form.html');
});

router.post('/save', function (req, res) {
    res.send(req.body);
});

module.exports = router;