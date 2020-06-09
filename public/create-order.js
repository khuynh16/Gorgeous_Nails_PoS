let submitOrderBtn = document.querySelector('.submit-order-form');                              // checkout form
let selectedOrders = document.querySelector('.selected-orders').getElementsByTagName('li');     // individual orders
let employeeName = document.querySelector('#employee');
let customerName = document.querySelector('#customer');

let arrayOfOrders = [];


submitOrderBtn.addEventListener('submit', function(e) {

    e.preventDefault();

    // gets service name of 0th item in selected orders list
    // need to make a way to loop and submit to database
    

    // category name
    //console.log(selectedOrders[0].getElementsByClassName('cName')[0].value);

    // service name
    // console.log(selectedOrders[0].getElementsByClassName('pName')[0].textContent);

    // service cost
    // console.log(selectedOrders[0].getElementsByClassName('pCost')[0].textContent);

    for (let i = 0; i < selectedOrders.length - 1; i++) {

        // cost value from current selected order (includes $ sign)
        let tempCost = selectedOrders[i].getElementsByClassName('pCost')[0].textContent;

        // remove the $ sign so it's just the number
        let costVar = tempCost.substring(1);
        
        let currentService = {
            category: selectedOrders[i].getElementsByClassName('cName')[0].value,
            name: selectedOrders[i].getElementsByClassName('pName')[0].textContent,
            cost: parseFloat(costVar)
        }

        arrayOfOrders.push(currentService);
    }




    //console.log(selectedOrders.length);
    // length - 1 because the last element is the total cost, not an actual service order

    // employee name
    employeeName = employeeName.options[employeeName.selectedIndex].textContent;

    // customer name
    customerName = customerName.value;

    // loop through all elements in selected orders
    // while looping through each item, get the following values:
    //  -category of service
    //  -service name
    //  -service cost

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