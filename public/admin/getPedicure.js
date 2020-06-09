async function getPedicure() {
    return await fetch('http://localhost:3000/pedicure')
                        .then((response) => response.json())
                        .then((data) => data);
}

document.addEventListener('DOMContentLoaded', async function() {

    //NOTE: this section is to fill out pedicure tab on add services admin page section
    let pedicure = await getPedicure();
    let pedicure_tab = document.querySelector('.currentPedicure');

    pedicure.forEach((service) => {
        let serviceHTML =   `<li class="list-group-item d-flex justify-content-between lh-condensed">
                                <h6 class="my-0 px-0 col-9">${service.name}</h6>
                                <span class="text-muted col-2 pl-0 pCost">$${service.cost.toFixed(2)}</span>
                            </li>`;
        pedicure_tab.insertAdjacentHTML('beforeend', serviceHTML);
    })

    //NOTE: this section is to fill out pedicure tab on add services admin page section
    let pedicure2 = await getPedicure();
    let pedicure_select = document.querySelector('.currentPedicure2');
    pedicure2.forEach((service) => {
        let serviceHTML = `<option class="id" value="${service.id}">${service.name} ... $${service.cost.toFixed(2)}</option>`;
        pedicure_select.insertAdjacentHTML('beforeend', serviceHTML);
    })
})