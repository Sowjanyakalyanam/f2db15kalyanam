"use strict";

var Employee = require('../models/Employee'); // List of all Costumes


exports.Employee_list = function (req, res) {
  res.send('NOT IMPLEMENTED: Employee list');
}; // for a specific Costume.


exports.Employee_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: Employee detail: ' + req.params.id);
}; // Handle Costume create on POST.


exports.Employee_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Employee create POST');
}; // Handle Costume delete form on DELETE.


exports.Employee_delete = function (req, res) {
  res.send('NOT IMPLEMENTED: Employee delete DELETE ' + req.params.id);
}; // Handle Costume update form on PUT.


exports.Employee_update_put = function (req, res) {
  res.send('NOT IMPLEMENTED: Employee update PUT' + req.params.id);
}; // VIEWS
// List of all Costumes


exports.Employee_list = function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Employee.find());

        case 3:
          theEmployee = _context.sent;
          res.send(theEmployee);
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500);
          res.send("{\"error\": ".concat(_context.t0, "}"));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // VIEWS
// Handle a show all view


exports.Employee_view_all_Page = function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Employee.find());

        case 3:
          theEmployee = _context2.sent;
          res.render('Employee', {
            title: 'Employee Search Results',
            results: theEmployee
          });
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500);
          res.send("{\"error\": ".concat(_context2.t0, "}"));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Handle Costume create on POST.


exports.Employee_create_post = function _callee3(req, res) {
  var document, result;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log(req.body);
          document = new Employee(); // We are looking for a body, since POST does not have query parameters.
          // Even though bodies can be in many different formats, we will be picky
          // and require that it be a json object
          // {"costume_type":"goat", "cost":12, "size":"large"}

          document.EmpName = req.body.EmpName;
          document.EmpType = req.body.EmpType;
          document.EmpSal = req.body.EmpSal;
          _context3.prev = 5;
          _context3.next = 8;
          return regeneratorRuntime.awrap(document.save());

        case 8:
          result = _context3.sent;
          res.send(result);
          _context3.next = 16;
          break;

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](5);
          res.status(500);
          res.send("{\"error\": ".concat(_context3.t0, "}"));

        case 16:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[5, 12]]);
};
//# sourceMappingURL=Employee.dev.js.map
