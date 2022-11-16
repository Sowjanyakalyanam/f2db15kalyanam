var Employee = require('../models/Employee');
// List of all Costumes
exports.Employee_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Employee list');
};
// for a specific Costume.
exports.Employee_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Employee detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.Employee_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Employee create POST');
};
// Handle Costume delete form on DELETE.
exports.Employee_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Employee delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Employee_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Employee update PUT' + req.params.id);
};
// VIEWS

   // List of all Costumes
exports.Employee_list = async function(req, res) {
    try{
    theEmployee = await Employee.find();
    res.send(theEmployee);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.Employee_view_all_Page = async function(req, res) {
    try{
    theEmployee = await Employee.find();
    res.render('Employee', { title: 'Employee Search Results', results: theEmployee });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.Employee_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Employee();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.EmpName = req.body.EmpName;
    document.EmpType = req.body.EmpType;
    document.EmpSal = req.body.EmpSal;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}
// Handle Employee delete on DELETE.
exports.Employee_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Employee.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
// Handle a show one view with id specified by query
exports.Employee_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Employee.findById( req.query.id)
    res.render('Employeedetail',
    { title: 'Employee Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for creating a Employee.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Employee_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Employeecreate', { title: 'Employee Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for updating a Employee.
// query provides the id
exports.Employee_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Employee.findById(req.query.id)
    res.render('Employeeupdate', { title: 'Employee Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle a delete one view with id from query
exports.Employee_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Employee.findById(req.query.id)
    res.render('Employeedelete', { title: 'Employee Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };