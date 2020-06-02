    document.addEventListener('DOMContentLoaded', async function() {

        // retrieve nail services from database to fill out option element in checkout-page.html
        let nails = await getNails();                           // current nail services from database
        let nails_list = document.querySelector('#nails');      // option element of nail services

        // adding each nail service from database into the option element
        nails.forEach((option) => {
            let optionHTML = `<option value="">${option.name} ... $${option.cost.toFixed(2)}</option>`;
            nails_list.insertAdjacentHTML('beforeend', optionHTML);
        })

        // retrieve pedicure services from database to fill out option element in checkout-page.html
        let pedicure = await getPedicure();                           // current pedicure services from database
        let pedicure_list = document.querySelector('#pedicure');      // option element of pedicure services

        // adding each nail service from database into the option element
        pedicure.forEach((option) => {
            let optionHTML = `<option value="">${option.name} ... $${option.cost.toFixed(2)}</option>`;
            pedicure_list.insertAdjacentHTML('beforeend', optionHTML);
        })

        // retrieve employees from database to fill out option element in checkout-page.html
        let employee = await getEmployees();                           // current employees from database
        let employee_list = document.querySelector('#employee');       // option element of employees

        // adding each employee from database into the option element
        employee.forEach((option) => {
            let optionHTML = `<option value="">${option.first_name} ${option.last_name}</option>`;
            employee_list.insertAdjacentHTML('beforeend', optionHTML);
        })


        




    })






// Used to disabled either nail or pedicure add button and select element if the other 
// is in use; disabled at the moment in the checkout-page.html file

//let nailsOption = document.querySelector('#nails');                 // list of nail options
//let pedicureOption = document.querySelector('#pedicure');           // list of pedicure options
//let addNailsBtn = document.querySelector('#addNailsOrder');         // add order button for nail
//let addPedicureBtn = document.querySelector('#addPedicureOrder');   // add order button for pedicure

// disables one list group when the other is selected
// function disableInput(service1, service2) {
//     if(service1.value) {
//         service2.disabled = true;
//     } else {
//         service2.disabled = false;
//     }
// }

// event listener for nail option, disabling pedicure box if nail option is selected
// nailsOption.addEventListener('click', function() {
            
//         // if currently selected option isn't default, disable pedicure option selection;
//         // otherwise, make pedicure option avaiable 
//         if (nailsOption.selectedIndex !== 0) {
//             disableInput(this, pedicureOption);
//             // makes pedicure button disabled when an option from nails is selected
//             addPedicureBtn.classList.add('disabled');
//         } else {
//             pedicureOption.disabled = false;
//             // makes pedicure button enabled again when option from nails is set to default
//             addPedicureBtn.classList.remove('disabled');
//         }
// })

// event listener for pedicure option, disabling nail box if pedicure option is selected
// pedicureOption.addEventListener('click', function() {

//     // if currently selected option isn't default, disable pedicure option selection;
//     // otherwise, make pedicure option avaiable
//     if (pedicureOption.selectedIndex !== 0) {
//         disableInput(this, nailsOption);
//         // makes nails button disabled when an option from pedicure is selected
//         addNailsBtn.classList.add('disabled');
//     } else {
//         nailsOption.disabled = false;
//         // makes nails button enabled again when option from pedicure is set to default
//         addNailsBtn.classList.remove('disabled');
//     }  
// })

// enables pedicure's add order button after nail order has been added to order list
// addNailsBtn.addEventListener('click', function() {
//     // affects the option dropdown list
//     pedicureOption.disabled = false;
//     // affects the add order button for pedicure
//     addPedicureBtn.classList.remove('disabled');
// })

// // enables nails' add order button after pedicure order as been added to order list
// addPedicureBtn.addEventListener('click', function() {
//     // affects the option dropdown list
//     nailsOption.disabled = false;
//     // affects the add order button for nails
//     addNailsBtn.classList.remove('disabled');
// })
