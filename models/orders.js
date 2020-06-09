// connect mongoose to file
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// schema for orders
let orderSchema = new Schema({
    id: String,
    employeeName: String,
    customerName: String,
    listOfPurchasedServices: [{
        category: String,
        name: String,
        cost: Number
    }]
});

// convert schema into class, which will create documents
// order model is the orders collection in the database
let Order = mongoose.model('Order', orderSchema, 'orders');

// exports the order variable above, key and value are the same: 'Order'
module.exports = { Order };