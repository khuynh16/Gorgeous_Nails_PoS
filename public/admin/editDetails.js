let editServiceNailOption = document.querySelector('.currentNails3');           // nails select element
let editServicePedicureOption = document.querySelector('.currentPedicure3');    // pedicure select element

let editServiceName = document.querySelector('#edit-service-name');             // srevice cost name field
let editServiceCost = document.querySelector('#edit-service-cost');             // service cost input field
let editServiceUpdateBtn = document.querySelector('#edit-service-btn');         // update service button

// disables one list group when the other is selected
function disableSelectOption(service1, service2) {
    if(service1.value) {
        service2.disabled = true;
    } else {
        service2.disabled = false;
    }
}

// event listener for nail option, disabling pedicure box if nail option is selected
editServiceNailOption.addEventListener('change', function() {
            
    // if currently selected option isn't default, disable pedicure option selection and enable input fields
    if (editServiceNailOption.selectedIndex !== 0) {
        disableSelectOption(this, editServicePedicureOption);
        enableItems();
        fillInput('nails');
    // if currently selected option is default, enable pedicure option selection and disable input fields
    } else {
        editServicePedicureOption.disabled = false;
        disableItems();
        resetInput();
    }
})

// event listener for pedicure option, disabling nail box if pedicure option is selected
editServicePedicureOption.addEventListener('change', function() {

    // if currently selected option isn't default, disable nail option selection and enable input fields
    if (editServicePedicureOption.selectedIndex !== 0) {
        disableSelectOption(this, editServiceNailOption);
        enableItems();
        fillInput('pedicure');
    // if currently selected option is default, enable pedicure option selection and disable input fields
    } else {
        editServiceNailOption.disabled = false;
        disableItems();
        resetInput();
    }  
})

// enables service cost, service name, and update service fields
function enableItems() {
    editServiceName.disabled = false;
    editServiceCost.disabled = false;
    editServiceUpdateBtn.disabled = false;
}

// disables service cost, service name, and update service fields
function disableItems() {
    editServiceName.disabled = true;
    editServiceCost.disabled = true;
    editServiceUpdateBtn.disabled = true;
}

// fills in text inputs on right side of page with the currently selected option (from either nails or pedicure)
function fillInput(value) {

    let text;       // text value of selected option; includes service name and cost      
    let name;       // to hold just the name of service
    let cost;       // to hold just the cost of service

    if (value === 'nails') {
        // text of selected option, containing name and cost (need to substring)
        text = editServiceNailOption.options[editServiceNailOption.selectedIndex].text;
        // text of just the name of service
        name = text.substring(0, text.indexOf('...') - 1);
        // text of just the cost of service
        cost = text.substring(text.lastIndexOf('... $') + 5, text.length);
    } else if (value === 'pedicure') {
        // text of selected option, containing name and cost (need to substring)
        text = editServicePedicureOption.options[editServicePedicureOption.selectedIndex].text;
        // text of just the name of service
        name = text.substring(0, text.indexOf('...') - 1);
        // text of just the cost of service
        cost = text.substring(text.lastIndexOf('... $') + 5, text.length);
    }
    // fill in input texts with corresponding values
    editServiceName.value = name;
    editServiceCost.value = cost;
}

// changes input text fields back to default ('Select service...') when user goes back to default select option
// in either nails or pedicure
function resetInput() {
    editServiceName.value = 'Select service...';
    editServiceCost.value = 'Select service...';
}

// update service if 'update service' button is clicked
editServiceUpdateBtn.addEventListener('click', function(e) {
    e.preventDefault();         // prevent default browser actions
    let id;                     // id of currently selected service option

    // nail option is selected
    if (editServicePedicureOption.selectedIndex === 0) {
        // id of currently selected nails option
        id = editServiceNailOption.options[editServiceNailOption.selectedIndex].value;
        updateService('nails', id);
    // pedicure option is selected
    } else if (editServiceNailOption.selectedIndex === 0) {
        // id of currently selected pedicure option
        id = editServicePedicureOption.options[editServicePedicureOption.selectedIndex].value;
        updateService('pedicure', id);
    }
})

// updates service name and cost in database (given values that user enters in input field)
function updateService(type, id) {
    let route;

    // determine route that includes specific service id with type of service (nails or pedicure)
    if (type === 'nails') {
        route = 'http://localhost:3000/nails/' + id;
    }
    else if (type === 'pedicure') {
        route = 'http://localhost:3000/pedicure/' + id;
    }

    // fetch api that sends request to put request, which updates database
    fetch(route,  {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: editServiceName.value,
                cost: editServiceCost.value
            })
        }).then((resp) => resp.text())
        .then(() => window.history.go());
}
