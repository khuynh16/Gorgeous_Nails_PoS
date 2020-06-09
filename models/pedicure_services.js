// connect mongoose to app.js file
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// schema for the pedicure services
let pedicureServicesSchema = new Schema({
    id: String,
    name: String,
    cost: Number
});

// convert schema into class, which will create documents
// Pedicure_service model is the pedicure_services collection in the database
let Pedicure_service = mongoose.model('Pedicure_service', pedicureServicesSchema, 'pedicure_services');

// exports the Pedicure_service variable above, key and value are the same 'Nail_service'
module.exports = { Pedicure_service };