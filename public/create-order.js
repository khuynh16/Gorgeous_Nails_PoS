let submitOrderBtn = document.querySelector('.submit-order-form');                            // checkout form
let selectedOrders = document.querySelector('.selected-orders').getElementsByTagName('li');   // individual orders
let employeeName = document.querySelector('#employee');                                       // employee name
let customerName = document.querySelector('#customer');                                       // customer name
let arrayOfOrders = [];                                                                       // array of selected orders
let lengthOfOrders;

let modal = document.querySelector('#submit-order');                // modal displaying issues in orders
let modalMessage = document.querySelector('.list-of-issues');       // the issues messages element
let messageIssue;                                                   // the individual messages
let hasEmployee;                                                    // boolean of employee selected or not
let hasCustomer;                                                    // boolean of customer name entered or not
let atLeastOneOrder;                                                // boolean of at least one order entered or not

submitOrderBtn.addEventListener('submit', function(e) {

    e.preventDefault();

    // set boolean flags to false
    hasEmployee = false;
    hasCustomer = false;
    atLeastOneOrder = false;

    // resets the html of the dyamic unordered list of issues
    document.querySelector('.list-of-issues').innerHTML = "";

    // length of list, - 1 because the last element in actually the total cost, not an actual order
    lengthOfOrders = selectedOrders.length - 1;

    // if else loop that checks the following requirements:
    // -is there employee name selected?
    // -is there a customer name?
    // -is there at least one order in the selected orders list?

    // statements that set the boolean flags true if user has selected values for them; otherwise, they stay false
    if (employeeName.selectedIndex !== 0) {
        hasEmployee = true;
    }
    if (customerName.value !== '') {
        hasCustomer = true;
    }
    if (lengthOfOrders > 0) {
        atLeastOneOrder = true;
    }
    
    // if at least one of the boolean flags is false, return a modal with message stating all the issues needed
    // to be corrected before a submission can be placed

    if (hasEmployee === false || hasCustomer === false || atLeastOneOrder === false) {
        if (hasEmployee === false) {
            messageIssue = `<li>Need to select an employee.</li`;
            modalMessage.insertAdjacentHTML('beforeend', messageIssue);
        }
        if (hasCustomer === false) {
            messageIssue = `<li>Need to enter customer name.</li>`;
            modalMessage.insertAdjacentHTML('beforeend', messageIssue);
        }
        if (atLeastOneOrder === false) {
            console.log('here');
            messageIssue = `<li>Need to enter at least one order.</li>`;
            modalMessage.insertAdjacentHTML('beforeend', messageIssue);
        }
    // there are no issues; order can be submitted to the database
    } else {
        //hide modal from popping up
        modal.remove();
        // loop through each selected order
        for (let i = 0; i < lengthOfOrders; i++) {
            // cost value from current selected order (includes $ sign)
            let tempCost = selectedOrders[i].getElementsByClassName('pCost')[0].textContent;

            // remove the $ sign so it's just the number
            let costVar = tempCost.substring(1);
            
            // creating the current selected service object to put into array
            // loop through all elements in selected orders
            // while looping through each item, get the following values:
            //  -category of service
            //  -service name
            //  -service cost
            let currentService = {
                category: selectedOrders[i].getElementsByClassName('cName')[0].value,
                name: selectedOrders[i].getElementsByClassName('pName')[0].textContent,
                cost: parseFloat(costVar)
            }
            // add each created item into array
            arrayOfOrders.push(currentService);
        }

        // employee name
        employeeName = employeeName.options[employeeName.selectedIndex].textContent;

        // customer name
        customerName = customerName.value;

        fetch('http://localhost:3000/order', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                employeeName: employeeName,
                customerName: customerName,
                listOfPurchasedServices: arrayOfOrders
            })
        }).then((response) => response.text()).then((data) => window.history.go());
    }
})