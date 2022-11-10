const mongoose = require("mongoose")
const EmployeeSchema = mongoose.Schema({
EmpName: String,
EmpType: String,
EmpSal: Number,
})
module.exports = mongoose.model("Employee",EmployeeSchema)