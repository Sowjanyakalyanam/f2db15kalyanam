"use strict";

var express = require('express');

var router = express.Router();
/* GET home page. */

router.get('/', function (req, res, next) {
  var query = req.query;
  rows = query.rows;
  cols = query.cols;
  console.log("rows ".concat(query.rows));
  console.log("cols ".concat(query.cols));
  res.render('gridbuild', {
    title: 'gridbuild',
    query: query
  });
});
module.exports = router;
//# sourceMappingURL=gridbuild.dev.js.map
