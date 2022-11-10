var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Employee', { title: 'Search Results Employee' });
});
var express = require('express');
const Employee_controlers= require('../controllers/Employee');
var router = express.Router();
/* GET costumes */
router.get('/', Employee_controlers.Employee_view_all_Page );
module.exports = router;