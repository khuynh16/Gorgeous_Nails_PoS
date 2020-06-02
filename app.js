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

                                        // // router for nails services
                                        // let nailsRouter = require('./routes/getNails');

mongoose.connect('mongodb://localhost/gorgeous_nails', { useNewUrlParser: true });


                                        // app.use('/getNails', nailsRouter);

// GET request to server, then database, for the nail options
// the GET works when it is the same as the localhost:3000/... in the getNails.js
app.get('/getNails', async (req, resp) => {
    let nailOption = await Nail_service.find();
    resp.send(nailOption);
})

// GET request to server, then, database, for the pedicure options
app.get('/getPedicure', async (req, resp) => {
    let pediOption = await Pedicure_service.find();
    resp.send(pediOption);
})

// GET request to server, then, database, for the employee options
app.get('/getEmployees', async (req, resp) => {
    let empOption = await Employee.find();
    resp.send(empOption);
})

// connects to the index.html file and loads it
app.use(express.static('public'));

// prints out message signaling server is live
app.listen(3000, ()=> console.log('Listening...'));