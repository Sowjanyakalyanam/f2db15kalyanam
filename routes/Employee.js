var express = require('express');
const Employee_controlers= require('../controllers/Employee');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

router.get('/', Employee_controlers.Employee_view_all_Page );
router.get('/Employee/:id', Employee_controlers.Employee_detail); 

router.get('/detail', secured,Employee_controlers.Employee_view_one_Page);

/* GET create Employee page */
router.get('/create',secured, Employee_controlers.Employee_create_Page);

/* GET create Employee page */
router.get('/update', secured,Employee_controlers.Employee_update_Page);

/* GET delete Employee page */
router.get('/delete',secured, Employee_controlers.Employee_delete_Page);

module.exports = router;