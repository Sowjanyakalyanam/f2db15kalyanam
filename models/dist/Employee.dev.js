"use strict";

var mongoose = require("mongoose");

var EmployeeSchema = mongoose.Schema({
  EmpName: String,
  EmpType: String,
  EmpSal: Number
});
module.exports = mongoose.model("Employee", EmployeeSchema);
//# sourceMappingURL=Employee.dev.js.map
