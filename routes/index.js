var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Playstation 5', type: 'Se Busca', price: '200€', tags: ['gaming', 'console'], image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/07/sony-playstation-5-1689016881412-3080326.jpg' });
});

module.exports = router;
