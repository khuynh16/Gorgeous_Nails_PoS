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

                                        // // router for nails services
                                        // let nailsRouter = require('./routes/getNails');

mongoose.connect('mongodb://localhost/gorgeous_nails', { useNewUrlParser: true });

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

// post request receiving username and password, and if correct credentials, goes to admin page
app.post('/admin-login', async (req, resp) => {
    let username = req.body.username;
    let password = req.body.password;
    console.log(username + ' ' + password);
    let manager = await Manager.find().where({username: username}).where({password: password});
    console.log(manager);
    if (manager.length > 0) {
        resp.send({
            redirectURL: '/admin-page'
       });
    } else {
        resp.send('Rejected');
    }
})

// render admin-page
app.get('/admin-page', (req, resp) => {
    resp.render('admin-page');
})

// render admin-login page
app.get('/admin-login', (req, resp) => {
    resp.render('admin-login');
})

// connects to the index.html file and loads it
app.use(express.static('public'));

// prints out message signaling server is live
app.listen(3000, ()=> console.log('Listening...'));