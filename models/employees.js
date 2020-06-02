// connect mongoose to app.js file
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// schema for employees
let employeeSchema = new Schema({
    id: Number,
    name: String,
    name: String
});

// convert schema into class, which will create documents
// employee model is the employees collection in the database
let Employee = mongoose.model('Employee', employeeSchema, 'employees');

// exports the employee variable above, key and value are the same 'Employee'
module.exports = { Employee };