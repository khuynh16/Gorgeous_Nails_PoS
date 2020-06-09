// connect mongoose to app.js file
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// schema for the nail services
let nailsServicesSchema = new Schema({
    id: String,
    name: String,
    cost: Number
});

// convert schema into class, which will create documents
// Nail_service model is the nail_services collection in the database
let Nail_service = mongoose.model('Nail_service', nailsServicesSchema, 'nails_services');

// exports the Nail_service variable above, key and value are the same 'Nail_service'
module.exports = { Nail_service };
