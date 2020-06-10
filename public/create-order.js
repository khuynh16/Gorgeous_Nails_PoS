let submitOrderBtn = document.querySelector('.submit-order-form');                            // checkout form
let selectedOrders = document.querySelector('.selected-orders').getElementsByTagName('li');   // individual orders
let employeeName = document.querySelector('#employee');                                       // employee name
let customerName = document.querySelector('#customer');                                       // customer name
let arrayOfOrders = [];                                                                       // array of selected orders

submitOrderBtn.addEventListener('submit', function(e) {

    e.preventDefault();

    // loop through each selected order (- 1 because the last order is actually the 'total' element)
    for (let i = 0; i < selectedOrders.length - 1; i++) {
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