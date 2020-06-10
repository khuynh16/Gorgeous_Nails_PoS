async function getOrders() {
    return await fetch('http://localhost:3000/orders')
                        .then((response) => response.json())
                        .then((data) => data);
}

// retrieve orders from database to fill view orders page
document.addEventListener('DOMContentLoaded', async function() {

    //NOTE: this section is to fill out orders on view orders admin page section
    let order = await getOrders();                                  // current orders from database
    let order_list = document.querySelector('.currentOrders');      // tbody element where orders will go

    let rowNum = 1;                                                 // initial row number counter

    // adding each order in database to tbody element to display each order (in rows)
    order.forEach((option) => {

        // determine total cost of current order
        let totalCost = 0;

        // calculates total cost of the current order
        for (let i = 0; i < option.listOfPurchasedServices.length; i++) {
            totalCost = totalCost + option.listOfPurchasedServices[i].cost;
        }

        // creating row with database values, displayed in view orders admin page section
        let optionHTML =    `<tr>
                                <th scope="row">${rowNum}</th>
                                <td>${option.employeeName}</td>
                                <td>${option.customerName}</td>
                                <td>
                                    <select class="custom-select d-block w-100 row${rowNum}" required>
                                        <option value="">Click to view...</option>
                                        <!-- employees from database will be entered here -->
                                    </select>
                                </td>
                                <td class="text-center">$${totalCost.toFixed(2)}</td>
                            </tr>`;

        // creates row to take in current order values
        order_list.insertAdjacentHTML('beforeend', optionHTML);

        // class name of current order row that is specific to that row only
        let className = '.row' + rowNum;

        // value to recently created select element, to contain each orders selected services' name and cost
        let optionList = document.querySelector(className);

        // for current order, fill out its select element 
        option.listOfPurchasedServices.forEach((option2) => {
            let optionHTML2 = `<option value="">${option2.name} ... $${option2.cost}</option>`;
            optionList.insertAdjacentHTML('beforeend', optionHTML2);
        })

        // increase row number
        rowNum++;
    })
})