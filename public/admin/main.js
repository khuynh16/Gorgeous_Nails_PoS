let addEmpBtn = document.querySelector('#addEmpBtn');
let removeEmpBtn = document.querySelector('#removeEmpBtn');
let addServiceBtn = document.querySelector('#addServiceBtn');

let addEmpTab = document.getElementById('v-pills-add-employee');
let removeEmpTab = document.getElementById('v-pills-remove-employee');
let adminBtnsTab = document.getElementById('v-pills-admin-main');
let addServiceTab = document.getElementById('v-pills-add-service');

// selected tab in the add services page in the admin section
let nailsTabSelected = document.querySelector('#nails-tab');
let pedicureTabSelected = document.querySelector('#pedicure-tab');

// to add/remove 'show' and 'active' class to this to reveal; shows the content of the tabs
let nailsTab = document.getElementById('nailsTab');
let pedicureTab = document.getElementById('pedicureTab');

nailsTabSelected.addEventListener('click', function() {

    nailsTab.classList.add('show');
    nailsTab.classList.add('active');
    pedicureTab.classList.remove('show');
    pedicureTab.classList.remove('active');
})

pedicureTabSelected.addEventListener('click', function() {

    pedicureTab.classList.add('show');
    pedicureTab.classList.add('active');
    nailsTab.classList.remove('show');
    nailsTab.classList.remove('active');
})

// when 'add employees' button is clicked, show add employee tab
addEmpBtn.addEventListener('click', function() {
    displayCurrentTab(addEmpTab);
})

// when 'remove employees' button is clicked, show remove employee tab
removeEmpBtn.addEventListener('click', function() {
    displayCurrentTab(removeEmpTab);
})

// when 'add services' button is clicked, show add service tab
addServiceBtn.addEventListener('click', function() {
    displayCurrentTab(addServiceTab);
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
         addServiceTab.classList.remove('show');
         addServiceTab.classList.remove('active');
    } else if (tab === removeEmpTab) {
         addEmpTab.classList.remove('show');
         addEmpTab.classList.remove('active');
         adminBtnsTab.classList.remove('show');
         adminBtnsTab.classList.remove('active');
         addServiceTab.classList.remove('show');
         addServiceTab.classList.remove('active');
    } else if (tab === addServiceTab) {
        addEmpTab.classList.remove('show');
        addEmpTab.classList.remove('active');
        removeEmpTab.classList.remove('show');
        removeEmpTab.classList.remove('active');
        adminBtnsTab.classList.remove('show');
        adminBtnsTab.classList.remove('active');
    }
}

