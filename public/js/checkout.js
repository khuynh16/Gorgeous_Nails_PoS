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
        let optionHTML = `<option value="">${option.firstname} ${option.lastname}</option>`;
        employee_list.insertAdjacentHTML('beforeend', optionHTML);
    })
})

