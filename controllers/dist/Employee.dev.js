"use strict";

var Employee = require('../models/Employee'); // List of all Costumes


exports.Employee_list = function (req, res) {
  res.send('NOT IMPLEMENTED: Employee list');
}; // for a specific Costume.


exports.Employee_detail = function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("detail" + req.params.id);
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(Employee.findById(req.params.id));

        case 4:
          result = _context.sent;
          res.send(result);
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          res.status(500);
          res.send("{\"error\": document for id ".concat(req.params.id, " not found"));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; // Handle Costume create on POST.


exports.Employee_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Employee create POST');
}; // Handle Costume delete form on DELETE.


exports.Employee_delete = function (req, res) {
  res.send('NOT IMPLEMENTED: Employee delete DELETE ' + req.params.id);
}; // Handle Costume update form on PUT.


exports.Employee_update_put = function (req, res) {
  res.send('NOT IMPLEMENTED: Employee update PUT' + req.params.id);
  Employee;
}; // VIEWS
// Handle Costume update form on PUT.


exports.Employee_update_put = function _callee2(req, res) {
  var toUpdate, _result;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("update on id ".concat(req.params.id, " with body\n").concat(JSON.stringify(req.body)));
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Employee.findById(req.params.id));

        case 4:
          toUpdate = _context2.sent;
          // Do updates of properties
          if (req.body.EmpName) toUpdate.EmpName = req.body.EmpName;
          if (req.body.EmpType) toUpdate.EmpType = req.body.EmpType;
          if (req.body.EmpSal) toUpdate.EmpSal = req.body.EmpSal;
          _context2.next = 10;
          return regeneratorRuntime.awrap(toUpdate.save());

        case 10:
          _result = _context2.sent;
          console.log("Sucess " + _result);
          res.send(_result);
          _context2.next = 19;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](1);
          res.status(500);
          res.send("{\"error\": ".concat(_context2.t0, ": Update for id ").concat(req.params.id, "\nfailed"));

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 15]]);
}; // List of all Costumes


exports.Employee_list = function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Employee.find());

        case 3:
          theEmployee = _context3.sent;
          res.send(theEmployee);
          _context3.next = 11;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.status(500);
          res.send("{\"error\": ".concat(_context3.t0, "}"));

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // VIEWS
// Handle a show all view


exports.Employee_view_all_Page = function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Employee.find());

        case 3:
          theEmployee = _context4.sent;
          res.render('Employee', {
            title: 'Employee Search Results',
            results: theEmployee
          });
          _context4.next = 11;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.status(500);
          res.send("{\"error\": ".concat(_context4.t0, "}"));

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Handle Costume create on POST.


exports.Employee_create_post = function _callee5(req, res) {
  var document, _result2;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          console.log(req.body);
          document = new Employee(); // We are looking for a body, since POST does not have query parameters.
          // Even though bodies can be in many different formats, we will be picky
          // and require that it be a json object
          // {"costume_type":"goat", "cost":12, "size":"large"}

          document.EmpName = req.body.EmpName;
          document.EmpType = req.body.EmpType;
          document.EmpSal = req.body.EmpSal;
          _context5.prev = 5;
          _context5.next = 8;
          return regeneratorRuntime.awrap(document.save());

        case 8:
          _result2 = _context5.sent;
          res.send(_result2);
          _context5.next = 16;
          break;

        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](5);
          res.status(500);
          res.send("{\"error\": ".concat(_context5.t0, "}"));

        case 16:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[5, 12]]);
};
//# sourceMappingURL=Employee.dev.js.map
