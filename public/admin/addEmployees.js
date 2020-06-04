let addEmp = document.querySelector('.create-employee-form');
let firstName = document.querySelector('#first-name');
let lastName = document.querySelector('#last-name');

addEmp.addEventListener('submit', function(e) {
    e.preventDefault();

    fetch('http://localhost:3000/employees', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname: firstName.value,
            lastname: lastName.value
        })
    }).then((response) => response.text()).then((data) => window.history.go());

})

