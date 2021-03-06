// connect express to app.js file
let express = require('express');
let app = express();

// connect to mongoose in app.js file
let mongoose = require('mongoose');

// exported value for nail service collection from nails_services.js, working with key value: Nail_service
let Nail_service = require('./models/nails_services').Nail_service;
// exported value for pedicure service collection from pedicure_services.js, working with key value: Pedicure_service
let Pedicure_service = require('./models/pedicure_services').Pedicure_service;
// exported value for employee collection from employees.js, working with key value: Employee
let Employee = require('./models/employees').Employee;
// exported value for manager collection from managers.js, working with key value: Manager
let Manager = require('./models/managers').Manager;
// exported value for order collection from orders.js, working with key value: Order
let Order = require('./models/orders').Order;

// unique id package
let uniqid = require('uniqid');

mongoose.connect('mongodb+srv://kelvin:pass1234@gorgeousnailscluster-8aaon.mongodb.net/gorgeous_nails', { useNewUrlParser: true });

// recognize the incoming request object as a JSON object
// needed for app.post to work
app.use(express.json());

// default engine and extension
app.set('view engine', 'ejs');

// app.set('views', __dirname + '/views');

// GET request to server, then database, for the nail options
// the GET works when it is the same as the localhost:3000/... in the getNails.js
app.get('/nails', async (req, resp) => {
    let nailOption = await Nail_service.find();
    resp.send(nailOption);
})

// GET request to server, then, database, for the pedicure options
app.get('/pedicure', async (req, resp) => {
    let pediOption = await Pedicure_service.find();
    resp.send(pediOption);
})

// GET request to server, then, database, for the employee options
app.get('/employees', async (req, resp) => {
    let empOption = await Employee.find();
    resp.send(empOption);
})

// GET request to server, then database, for orders
app.get('/orders', async (req, resp) => {
    let orderOption = await Order.find();
    resp.send(orderOption);
})

// post request receiving username and password, and if correct credentials, goes to admin page
app.post('/admin-login', async (req, resp) => {
    let username = req.body.username;
    let password = req.body.password;
    let manager = await Manager.find().where({username: username}).where({password: password});
    if (manager.length > 0) {
        resp.send({
            redirectURL: '/admin-page'
       });
    } else {
        resp.send('Rejected');
    }
})

// adding new employee to database
app.post('/employees', async (req, resp) => {
    let reqBody = req.body;

    let newEmployee = new Employee({
        id: uniqid(),
        firstname: reqBody.firstname,
        lastname: reqBody.lastname
    })
    await newEmployee.save();
    resp.send('Created');
})

// deletes employee (in remove employees admin page)
app.delete('/employees/:id', async (req, resp) =>  {
    let id = req.params.id;
    await Employee.deleteOne({id: id});
    resp.send('Deleted!');
})

// add nail service to database
app.post('/nails', async (req, resp) => {
    let reqBody = req.body;

    let newNails = new Nail_service({
        id: uniqid(),
        name: reqBody.name,
        cost: reqBody.cost
    })
    await newNails.save();
    resp.send('Created');
})

// add pedicure service to database
app.post('/pedicure', async (req, resp) => {
    let reqBody = req.body;

    let newPedicure = new Pedicure_service({
        id: uniqid(),
        name: reqBody.name,
        cost: reqBody.cost
    })
    await newPedicure.save();
    resp.send('Created');
})

// delete nail service (in remove service admin page)
app.delete('/nails/:id', async (req, resp) =>  {
    let id = req.params.id;
    await Nail_service.deleteOne({id: id});
    resp.send('Deleted!');
})

// delete pedicure service (in remove service admin page)
app.delete('/pedicure/:id', async (req, resp) =>  {
    let id = req.params.id;
    await Pedicure_service.deleteOne({id: id});
    resp.send('Deleted!');
})

// update nail service (in edit details: service tab admin page)
app.put('/nails/:id', async (req, resp) => {
    let id = req.params.id;
    await Nail_service.updateOne({id: id}, req.body);
    resp.send('Updated!');
})

// update pedicure service (in edit details: pedicure tab admin page)
app.put('/pedicure/:id', async (req, resp) => {
    let id = req.params.id;
    await Pedicure_service.updateOne({id: id}, req.body);
    resp.send('Updated!');
})

// update employee (in edit details: employee tab admin page)
app.put('/employees/:id', async (req, resp) => {
    let id = req.params.id;
    await Employee.updateOne({id: id}, req.body);
    resp.send('Updated!');
})

// add order (in checkout page) to database
// guess: loop through request body to get array of orders submitted
app.post('/order', async (req, resp) => {
    let reqBody = req.body;

    let newOrder = new Order({
        id: uniqid(),
        employeeName: reqBody.employeeName,
        customerName: reqBody.customerName,
        listOfPurchasedServices: reqBody.listOfPurchasedServices
    })
    await newOrder.save();
    resp.send('Created');
})


// render admin-page
app.get('/admin-page', (req, resp) => {
    resp.render('admin-page');
})

// render admin-login page
app.get('/admin-login', (req, resp) => {
    resp.render('admin-login');
})

// render admin-employees page
app.get('/admin-employees', (req, resp) => {
    resp.render('admin-employees');
})

// connects to the index.html file and loads it
app.use(express.static('public'));


let port = process.env.PORT || 3000;

// prints out message signaling server is live
app.listen(port, ()=> console.log(`Listening ${port}...`));