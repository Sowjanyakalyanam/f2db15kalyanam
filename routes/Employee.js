var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Employee', { title: 'Search Results Employee' });
});
var express = require('express');
const Employee_controlers= require('../controllers/Employee');
var router = express.Router();
/* GET Employee */
router.get('/', Employee_controlers.Employee_view_all_Page );
module.exports = router;
// GET request for one Employee.
router.get('/Employee/:id', Employee_controlers.Employee_detail);
/* GET detail Employee page */
router.get('/detail', Employee_controlers.Employee_view_one_Page);
/* GET create Employee page */
router.get('/create', Employee_controlers.Employee_create_Page);
/* GET create update page */
router.get('/update', Employee_controlers.Employee_update_Page);
/* GET delete Employee page */
router.get('/delete', Employee_controlers.Employee_delete_Page);