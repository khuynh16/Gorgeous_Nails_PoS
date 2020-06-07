async function getNails() {
    return await fetch('http://localhost:3000/nails')
                        .then((response) => response.json())
                        .then((data) => data);
}

document.addEventListener('DOMContentLoaded', async function() {

    //NOTE: this section is to fill out nails tab on remove employees admin page section
    let nails = await getNails();
    let nails_tab = document.querySelector('.currentNails');

    nails.forEach((service) => {
        let serviceHTML =   `<li class="list-group-item d-flex justify-content-between lh-condensed">
                                <h6 class="my-0 px-0 col-9">${service.name}</h6>
                                <span class="text-muted col-2 pl-0 pCost">$${service.cost}</span>
                            </li>`;
        nails_tab.insertAdjacentHTML('beforeend', serviceHTML);
    })

})