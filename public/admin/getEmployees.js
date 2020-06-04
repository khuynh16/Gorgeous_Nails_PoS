async function getEmployees() {
    return await fetch('http://localhost:3000/employees')
                        .then((response) => response.json())
                        .then((data) => data);
}

document.addEventListener('DOMContentLoaded', async function() {
    // retrieve employees from database to fill out option element in checkout-page.html
    let employee = await getEmployees();                                  // current employees from database
    let employee_list = document.querySelector('#currentEmployees');       // option element of current employees

    // adding each employee from database into the option element
    employee.forEach((option) => {
        let optionHTML = `<option value="">${option.firstname} ${option.lastname}</option>`;
        employee_list.insertAdjacentHTML('beforeend', optionHTML);
    })

})