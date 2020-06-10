// variables containing the buttons on the admin page
let addEmpBtn = document.querySelector('#addEmpBtn');
let removeEmpBtn = document.querySelector('#removeEmpBtn');
let addServiceBtn = document.querySelector('#addServiceBtn');
let removeServiceBtn = document.querySelector('#removeServiceBtn');
let editDetailsBtn = document.querySelector('#editDetailsBtn');
let viewOrdersBtn = document.querySelector('#viewOrdersBtn');

// tabs responding to the sections that correspond to the above buttons
let addEmpTab = document.getElementById('v-pills-add-employee');
let removeEmpTab = document.getElementById('v-pills-remove-employee');
let adminBtnsTab = document.getElementById('v-pills-admin-main');
let addServiceTab = document.getElementById('v-pills-add-service');
let removeServiceTab = document.getElementById('v-pills-remove-service');
let editDetailsTab = document.getElementById('v-pills-edit-details');
let viewOrdersTab = document.getElementById('v-pills-view-orders');

// selected tab in the add services page in the admin section
let nailsTabSelected = document.querySelector('#nails-tab');
let pedicureTabSelected = document.querySelector('#pedicure-tab');

// to add/remove 'show' and 'active' class to this element to reveal; shows the content of the tabs
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

// when 'remove services' button is clicked, show remove services tab
removeServiceBtn.addEventListener('click', function() {
    displayCurrentTab(removeServiceTab);
})

// when 'edit details' button is clicked, show edit details tab
editDetailsBtn.addEventListener('click', function() {
    displayCurrentTab(editDetailsTab);
})

// when 'view orders' button is clicked, show view orders tab
viewOrdersBtn.addEventListener('click', function() {
    displayCurrentTab(viewOrdersTab);
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
        removeServiceTab.classList.remove('show');
        removeServiceTab.classList.remove('active');
        editDetailsTab.classList.remove('show');
        editDetailsTab.classList.remove('active');
        viewOrdersTab.classList.remove('show');
        viewOrdersTab.classList.remove('active');
    } else if (tab === removeEmpTab) {
        addEmpTab.classList.remove('show');
        addEmpTab.classList.remove('active');
        adminBtnsTab.classList.remove('show');
        adminBtnsTab.classList.remove('active');
        addServiceTab.classList.remove('show');
        addServiceTab.classList.remove('active');
        removeServiceTab.classList.remove('show');
        removeServiceTab.classList.remove('active');
        editDetailsTab.classList.remove('show');
        editDetailsTab.classList.remove('active');
        viewOrdersTab.classList.remove('show');
        viewOrdersTab.classList.remove('active');
    } else if (tab === addServiceTab) {
        addEmpTab.classList.remove('show');
        addEmpTab.classList.remove('active');
        removeEmpTab.classList.remove('show');
        removeEmpTab.classList.remove('active');
        adminBtnsTab.classList.remove('show');
        adminBtnsTab.classList.remove('active');
        removeServiceTab.classList.remove('show');
        removeServiceTab.classList.remove('active');
        editDetailsTab.classList.remove('show');
        editDetailsTab.classList.remove('active');
        viewOrdersTab.classList.remove('show');
        viewOrdersTab.classList.remove('active');
    } else if (tab === removeServiceTab) {
        addEmpTab.classList.remove('show');
        addEmpTab.classList.remove('active');
        removeEmpTab.classList.remove('show');
        removeEmpTab.classList.remove('active');
        adminBtnsTab.classList.remove('show');
        adminBtnsTab.classList.remove('active');
        addServiceTab.classList.remove('show');
        addServiceTab.classList.remove('active');
        editDetailsTab.classList.remove('show');
        editDetailsTab.classList.remove('active');
        viewOrdersTab.classList.remove('show');
        viewOrdersTab.classList.remove('active');
    } else if (tab === editDetailsTab) {
        addEmpTab.classList.remove('show');
        addEmpTab.classList.remove('active');
        removeEmpTab.classList.remove('show');
        removeEmpTab.classList.remove('active');
        adminBtnsTab.classList.remove('show');
        adminBtnsTab.classList.remove('active');
        addServiceTab.classList.remove('show');
        addServiceTab.classList.remove('active');
        removeServiceTab.classList.remove('show');
        removeServiceTab.classList.remove('active');
        viewOrdersTab.classList.remove('show');
        viewOrdersTab.classList.remove('active');
    } else if (tab === viewOrdersTab) {
        addEmpTab.classList.remove('show');
        addEmpTab.classList.remove('active');
        removeEmpTab.classList.remove('show');
        removeEmpTab.classList.remove('active');
        adminBtnsTab.classList.remove('show');
        adminBtnsTab.classList.remove('active');
        addServiceTab.classList.remove('show');
        addServiceTab.classList.remove('active');
        removeServiceTab.classList.remove('show');
        removeServiceTab.classList.remove('active');
        editDetailsTab.classList.remove('show');
        editDetailsTab.classList.remove('active');
    }
}

