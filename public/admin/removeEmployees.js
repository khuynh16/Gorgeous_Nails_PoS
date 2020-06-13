let employeesBlock = document.querySelector('.main-remove-block');

let removeEmployeeModal = document.querySelector('#remove-employee-modal');       // modal displaying issues in orders

employeesBlock.addEventListener('click', function(e) {

    if(e.target.classList.contains('remove-btn')) {

        // list of current employees
        let empList = document.querySelector('.currentEmployees2');

        // don't delete employee if first option is currently selected (default value)
        if (empList.selectedIndex === 0) {
            // alert('Select an employee before removing.');
        } else {
            //hide modal from popping up
            removeEmployeeModal.remove();

            // id of currently selected employee when chosen
            let id = empList.options[empList.selectedIndex].value;

            fetch('http://localhost:3000/employees/' + id, {
                method: 'DELETE'
            }).then((resp) => resp.text())
            .then(() => window.history.go());
        }


        

    }

})