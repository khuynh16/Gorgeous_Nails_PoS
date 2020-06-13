let servicesBlock = document.querySelector('.remove-service-block');        // area containing the remove service button

let nailsOption = document.querySelector('.currentNails2');                 // nails select element in remove services
let pedicureOption = document.querySelector('.currentPedicure2');           // pedicure select element in remove services
let id;                                                                     // unique id of selected option

let modal = document.querySelector('#remove-service-modal');       // modal displaying issue in removing service

servicesBlock.addEventListener('click', function(e) {
    if(e.target.classList.contains('remove-service')) {
        
        // list of current nail services
        let nailsList = document.querySelector('.currentNails2');
        // list of current pedicure services
        let pedicureList = document.querySelector('.currentPedicure2');

        // if both select elements for nails and pedicure are both on default value ('Choose...'), display error message
        // if one is default and the other isn't, remove the appropriate service
        if ((nailsList.selectedIndex === 0) && (pedicureList.selectedIndex === 0)) {
           
            // nothing happens here but modal will be displayed, mentioning an error in user input

        } else {
            //hide modal from popping up
            modal.remove();

            // nail option selected to be removed
            if (nailsList.selectedIndex !== 0) {
                // unique id to selected nails option
                id = nailsList.options[nailsList.selectedIndex].value;

                fetch('http://localhost:3000/nails/' + id, {
                method: 'DELETE'
                }).then((resp) => resp.text())
                .then(() => window.history.go());
            } else if (pedicureList.selectedIndex !== 0) {
                // unique id to selected pedicure option
                id = pedicureList.options[pedicureList.selectedIndex].value;

                fetch('http://localhost:3000/pedicure/' + id, {
                method: 'DELETE'
                }).then((resp) => resp.text())
                .then(() => window.history.go());
            }
        }
    }
})

// disables one list group when the other is selected
function disableInput(service1, service2) {
    if(service1.value) {
        service2.disabled = true;
    } else {
        service2.disabled = false;
    }
}

// event listener for nail option, disabling pedicure box if nail option is selected
nailsOption.addEventListener('click', function() {
            
        // if currently selected option isn't default, disable pedicure option selection;
        // otherwise, make pedicure option avaiable 
        if (nailsOption.selectedIndex !== 0) {
            disableInput(this, pedicureOption);
        } else {
            pedicureOption.disabled = false;
        }
})

// event listener for pedicure option, disabling nail box if pedicure option is selected
pedicureOption.addEventListener('click', function() {

    // if currently selected option isn't default, disable nail option selection;
    // otherwise, make nail option avaiable
    if (pedicureOption.selectedIndex !== 0) {
        disableInput(this, nailsOption);
    } else {
        nailsOption.disabled = false;
    }  
})