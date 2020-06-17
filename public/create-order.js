let submitOrderBtn = document.querySelector('#submitOrder');                            // checkout form
let selectedOrders = document.querySelector('.selected-orders').getElementsByTagName('li');   // individual orders
let employeeName = document.querySelector('#employee');                                       // employee name
let customerName = document.querySelector('#customer');                                       // customer name
let arrayOfOrders = [];                                                                       // array of selected orders
let lengthOfOrders;

let submitModal = document.querySelector('#submit-order');          // modal displaying issues in orders
let modalMessage = document.querySelector('.list-of-issues');       // the issues messages element
let messageIssue;                                                   // the individual messages
let hasEmployee;                                                    // boolean of employee selected or not
let hasCustomer;                                                    // boolean of customer name entered or not
let atLeastOneOrder;                                                // boolean of at least one order entered or not

let confirmModal = document.querySelector('#order-confirm');
let modalOrderDetails = document.querySelector('.order-details');
let addServiceBtn = document.querySelector('#select-service-to-add');
let confirmOrder = document.querySelector('#confirmed');
let denyOrder = document.querySelector('#denied');

submitOrderBtn.addEventListener('click', function(e) {

    e.preventDefault();

    // set boolean flags to false
    hasEmployee = false;
    hasCustomer = false;
    atLeastOneOrder = false;

    // resets the html of the dyamic unordered list of issues and order details modal
    modalMessage.innerHTML = "";
    modalOrderDetails.innerHTML = "";

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
            messageIssue = `<li>Need to enter at least one order.</li>`;
            modalMessage.insertAdjacentHTML('beforeend', messageIssue);
        }
    // there are no issues; order can be submitted to the database
    } else {
        // confirm order modal pops up
        $('#order-confirm').modal();

        //hide submit modal from popping up (since no issues)
        $('#submit-order').modal();

        // create div and enter li elements here
        let newDiv = document.createElement('div');
        let newList = document.createElement('ul');
        let listItem;
        let pName;
        let pCost;

        // create li elements in ul element
        for (let i = 0; i < lengthOfOrders; ++i) {
            // get product name
            pName = selectedOrders[i].outerText.split('\n')[0];

            // get product cost
            pCost = selectedOrders[i].outerText.split('\n')[1];

            // create an item for each one
            listItem = document.createElement('li');

            // adding classes to make li element have spacing between product name and cost
            listItem.classList.add('d-flex');
            listItem.classList.add('justify-content-between');
    
            // Add the item text
            listItem.innerHTML = pName + '<span class="orderConfirmCost mr-5">' + pCost + '</span>';
    
            // Add listItem to the listElement
            newList.appendChild(listItem);
        }

        messageIssue = `<div class="container row">
                            <div class="col-4 text-center">
                                    <div class="row">
                                        <u>Employee Name:</u>
                                    </div>
                                    <div class="row">
                                        ${employeeName.options[employeeName.selectedIndex].text}
                                    </div>
                                
                                    <div class="row mt-3">
                                        <u>Customer Name:</u> 
                                    </div>
                                    <div class="row">
                                        ${customerName.value}
                                    </div>
                            </div>
                            <div class="col-8">
                                
                                    <div class="list-group-item d-flex justify-content-between lh-condensed">
                                        <h5 class="col-9"><u>Name</u></h5>
                                        <h5 class="col-3 ml-3 pCost"><u>Cost</u></h5>
                                    </div>
                                    <div class="list-of-items justify-content-between mt-2">
                
                                    </div> 
                            </div>
                        </div>`;
        modalOrderDetails.insertAdjacentHTML('beforeend', messageIssue);

        // add newList to newly created div in confirm order modal
        document.getElementsByClassName('list-of-items')[0].appendChild(newList);

        //Services: ${selectedOrders}

        // only gets called once when button is clicked
        $('#confirmed').unbind().click(function() {

            e.preventDefault();
            console.log('confirmed order');
            $('#order-confirm').modal();

            // adding order to database
            // // loop through each selected order
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
        })
    }
})