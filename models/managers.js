// connect mongoose to app.js file
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// schema for managers
let managerSchema = new Schema({
    id: Number,
    username: String,
    password: String
});

// convert schema into class, which will create documents
// manager model is the managers collection in the database
let Manager = mongoose.model('Manager', managerSchema, 'managers');

// exports the manager variable above, key and value are the same 'Manager'
module.exports = { Manager };