"use strict";

var express = require('express');

var router = express.Router();
/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('selector', {
    title: 'selector'
  });
});
module.exports = router;
//# sourceMappingURL=selector.dev.js.map
