async function getEmployees() {
    return await fetch('http://localhost:3000/employees')
                        .then((response) => response.json())
                        .then((data) => data);
}

document.addEventListener('DOMContentLoaded', async function() {
    // retrieve employees from database to fill out option element in adding employees page

    //NOTE: this section is to fill out list on add employees admin page section
    let employee = await getEmployees();                                        // current employees from database
    let employee_list = document.querySelector('.currentEmployees');   // option element of current employees
    // adding each employee from database into the option element
    employee.forEach((option) => {
        let optionHTML = `<li class="list-group-item">* ${option.firstname} ${option.lastname}</li>`;
        employee_list.insertAdjacentHTML('beforeend', optionHTML);
    })

    //NOTE: this section is to fill out list on remove employees admin page section
    let employee2 = await getEmployees();                                // current employees from database
    let employee_list2 = document.querySelector('.currentEmployees2');   // option element of employees
    // adding each employee from database into the option element
    employee2.forEach((option) => {
        let optionHTML = `<option class="id" value="${option.id}">${option.firstname} ${option.lastname}</option>`;
        employee_list2.insertAdjacentHTML('beforeend', optionHTML);
    })
})