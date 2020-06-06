let addEmpBtn = document.querySelector('#addEmpBtn');
let removeEmpBtn = document.querySelector('#removeEmpBtn');

let addEmpTab = document.getElementById('v-pills-add-employee');
let removeEmpTab = document.getElementById('v-pills-remove-employee');
let adminBtnsTab = document.getElementById('v-pills-admin-main');


// when 'add employees' button is clicked, show add employee tab
addEmpBtn.addEventListener('click', function() {
    displayCurrentTab(addEmpTab);
})

// when 'remove employees' button is clicked, show remove employee tab
removeEmpBtn.addEventListener('click', function() {
    displayCurrentTab(removeEmpTab);
})

// add or remove 'show' and 'active' class from tabs, whether to be visible or not
function displayCurrentTab(tab) {

    // make current selected tab visible 
    tab.classList.add('show');
    tab.classList.add('active');

    // remove 'show' and 'active' classes from any tab that isn't the currently selected tab
    if (tab === addEmpTab) {
         removeEmpTab.classList.remove('show');
         removeEmpTab.classList.remove('active');
         adminBtnsTab.classList.remove('show');
         adminBtnsTab.classList.remove('active');
    } else if (tab === removeEmpTab) {
         addEmpTab.classList.remove('show');
         addEmpTab.classList.remove('active');
         adminBtnsTab.classList.remove('show');
         adminBtnsTab.classList.remove('active');
    }
}

