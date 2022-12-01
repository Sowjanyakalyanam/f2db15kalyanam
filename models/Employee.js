const mongoose = require("mongoose")
const EmployeeSchema = mongoose.Schema({
EmpName: {
    type: String, 
    required: true
},
EmpType: {
    type: String, 
    required: true
},
EmpSal: {
    type: Number, 
    min:500, max:10000,
    required: true
},
})
module.exports = mongoose.model("Employee",EmployeeSchema)