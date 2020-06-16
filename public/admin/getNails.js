async function getNails() {
    return await fetch('http://localhost:3000/nails')
                        .then((response) => response.json())
                        .then((data) => data);
}

// fills out nails options from database into certain pages when page loads
document.addEventListener('DOMContentLoaded', async function() {

    //NOTE: this section is to fill out nails tab on add services admin page section
    let nails = await getNails();
    let nails_tab = document.querySelector('.currentNails');
    nails.forEach((service) => {
        let serviceHTML =   `<li class="list-group-item d-flex justify-content-between lh-condensed">
                                <h6 class="my-0 px-0 col-9">${service.name}</h6>
                                <span class="text-muted col-2 mr-0 pCost">$${service.cost.toFixed(2)}</span>
                            </li>`;
        nails_tab.insertAdjacentHTML('beforeend', serviceHTML);
    })

    //NOTE: this section is to fill out nails select element on remove services admin page section
    let nails2 = await getNails();
    let nails_select = document.querySelector('.currentNails2');
    nails2.forEach((service) => {
        let serviceHTML = `<option class="id" value="${service.id}">${service.name} ... $${service.cost.toFixed(2)}</option>`;
        nails_select.insertAdjacentHTML('beforeend', serviceHTML);
    })

    //NOTE: this section is to fill out nails select element on edit details: services admin page section
    let nails3 = await getNails();
    let nails_select2 = document.querySelector('.currentNails3');
    nails3.forEach((service) => {
        let serviceHTML = `<option class="id" value="${service.id}">${service.name} ... $${service.cost.toFixed(2)}</option>`;
        nails_select2.insertAdjacentHTML('beforeend', serviceHTML);
    })
})