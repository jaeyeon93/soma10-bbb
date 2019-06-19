let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index.html', { title: 'Express' });
});

module.exports = router;
