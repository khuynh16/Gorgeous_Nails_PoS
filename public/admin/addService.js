let addService = document.querySelector('.add-service-form');     // add service button on add service page
let serviceName = document.querySelector('#service-name');        // name of service
let serviceCost = document.querySelector('#service-cost');        // cost of service

// when user clicks the add service button after filling out the information
addService.addEventListener('submit', function(e) {
    e.preventDefault();

    // the select element of all categories (nails, pedicure)
    let serviceCategory = document.querySelector('#service-category');

    // text value of the selected index of the option dropdown list for category of service
    let catName = serviceCategory.options[serviceCategory.selectedIndex].text;

    fetch(route(catName), {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: serviceName.value,
            cost: serviceCost.value
        })
    }).then((response) => response.text()).then((data) => window.history.go());
})

// returns route to correct url, depending on what category user selects to add new service in
function route(service) {
    if (service === 'Nails') {
        return 'http://localhost:3000/nails';
    } else {
        return 'http://localhost:3000/pedicure';
    }
}