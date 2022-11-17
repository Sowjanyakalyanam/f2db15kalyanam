var Employee = require('../models/Employee');
// List of all Costumes
exports.Employee_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Employee list');
};
// for a specific Costume.
exports.Employee_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Employee.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
 res.send('NOT IMPLEMENTED: Employee update PUT' + req.params.id);Employee
};
// VIEWS
// Handle Costume update form on PUT.
exports.Employee_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Employee.findById( req.params.id)
 // Do updates of properties
 if(req.body.EmpName) toUpdate.EmpName = req.body.EmpName;
 if(req.body.EmpType) toUpdate.EmpType = req.body.EmpType;
 if(req.body.EmpSal) toUpdate.EmpSal = req.body.EmpSal;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};
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