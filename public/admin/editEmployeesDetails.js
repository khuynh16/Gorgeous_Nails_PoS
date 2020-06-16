let editEmpFullName = document.querySelector('.currentEmployees3');               // nails select element

let editEmpFirstName = document.querySelector('#edit-employee-fName');            // employee first name field
let editEmpLastName = document.querySelector('#edit-employee-lName');             // employee last name field
let editEmpUpdateBtn = document.querySelector('#edit-employee-btn');              // update employee button

// event listener for pedicure option, disabling nail box if pedicure option is selected
editEmpFullName.addEventListener('change', function() {

    // if currently selected option isn't default, disable nail option selection and enable input fields
    if (editEmpFullName.selectedIndex !== 0) {
        enableEmployeeItems();
        fillEmployeeInput();
    // if currently selected option is default, enable pedicure option selection and disable input fields
    } else {
        disableEmployeeItems();
        resetEmployeeInput();
    }  
})

// enables employee first name, last name, and update employee button
function enableEmployeeItems() {
    editEmpFirstName.disabled = false;
    editEmpLastName.disabled = false;
    editEmpUpdateBtn.disabled = false;
}

// disables employee first name, last name, and update employee button
function disableEmployeeItems() {
    editEmpFirstName.disabled = true;
    editEmpLastName.disabled = true;
    editEmpUpdateBtn.disabled = true;
}

// fills in text inputs on right side of page with the currently selected employee first name and last name
function fillEmployeeInput() {

    let text;       // text value of selected option, includes both first and last name     
    let fName;       // to hold first name of employee
    let lName;       // to hold last name of employee

    // text of selected option, containing first and last name
    text = editEmpFullName.options[editEmpFullName.selectedIndex].text;
    // text of just the first name
    fName = text.substring(0, text.indexOf(' '));
    // text of just the last name
    lName = text.substring(text.indexOf(' ') + 1, text.length);

    // fill in input texts with corresponding values
    editEmpFirstName.value = fName;
    editEmpLastName.value = lName;
}

// changes input text fields back to default ('Select employee...') when user goes back to default select option
function resetEmployeeInput() {
    editEmpFirstName.value = 'Select employee...';
    editEmpLastName.value = 'Select employee...';
}

editEmpUpdateBtn.addEventListener('click', function(e) {
    e.preventDefault();

    let id = editEmpFullName.options[editEmpFullName.selectedIndex].value;

    // fetch api that sends request to put request, which updates database
    fetch('http://localhost:3000/employees/' + id,  {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname: editEmpFirstName.value,
            lastname: editEmpLastName.value
        })
    }).then((resp) => resp.text())
    .then(() => window.history.go());
})
