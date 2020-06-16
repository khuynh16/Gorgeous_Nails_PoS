document.addEventListener('DOMContentLoaded', async function() {

    // retrieve nail services from database to fill out nails tab in checkout-page.html
    let nails = await getNails();                           // current nail services from database
    let nails_list = document.querySelector('#nails');      // tab element of nail services

    // adding each nail service from database into the tab element
    nails.forEach((option) => {
        let optionHTML =    `<li class="list-group-item d-flex justify-content-between lh-condensed isNails">
                                <a href="#">
                                    <div class="row">
                                        <h6 class="my-0 px-0 col-9 pName">${option.name}</h6>
                                        <span class="text-muted col-2 mr-0 pl-5 pCost">$${option.cost.toFixed(2)}</span>
                                    </div>
                                </a>
                                
                            </li>`;
        nails_list.insertAdjacentHTML('beforeend', optionHTML);
    })

    // retrieve pedicure services from database to fill out option element in checkout-page.html
    let pedicure = await getPedicure();                           // current pedicure services from database
    let pedicure_list = document.querySelector('#pedicure');      // option element of pedicure services

    // adding each pedicure service from database into the tab element
    pedicure.forEach((option) => {
        let optionHTML =    `<li class="list-group-item d-flex justify-content-between lh-condensed isPedicure">
                                <a href="#">
                                    <div class="row">
                                        <h6 class="my-0 px-0 col-9 pName">${option.name}</h6>
                                        <span class="text-muted col-2 mr-0 pl-5 pCost">$${option.cost.toFixed(2)}</span>
                                    </div>
                                </a>
                            </li>`;
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

// selected tab in the checkout page when clicking "select service to add" button
let nailsSelected = document.querySelector('#checkout-nails-tab');
let pedicureSelected = document.querySelector('#checkout-pedicure-tab');

// to add/remove 'show' and 'active' class to this element to reveal; shows the content of the tabs
let checkoutNailsTab = document.getElementById('checkoutNailsTab');
let checkoutPedicureTab = document.getElementById('checkoutPedicureTab');

nailsSelected.addEventListener('click', function() {

    checkoutNailsTab.classList.add('show');
    checkoutNailsTab.classList.add('active');
    checkoutPedicureTab.classList.remove('show');
    checkoutPedicureTab.classList.remove('active');
})

pedicureSelected.addEventListener('click', function() {

    checkoutPedicureTab.classList.add('show');
    checkoutPedicureTab.classList.add('active');
    checkoutNailsTab.classList.remove('show');
    checkoutNailsTab.classList.remove('active');
})

