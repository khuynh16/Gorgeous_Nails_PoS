$(document).ready(function() {

    let addNailsOrderButton = $('#addNailsOrder');      // button of adding nail order
    let addPedicureOrderButton = $('#addPedicureOrder');
    let selectedOrders = $('.selected-orders');         // list of selected orders on the right side
    let nailsOptions = $('#nails');                     // option list of nails 
    let pedicureOptions = $('#pedicure');               // option list of pedicure
    let numItems = $('.cartNumItems');                  // total number of items in order 
    let yourCartText = $('.yourCart');                  // 'your cart' text on checkout page
    let totalCost = $('.totalCost');                    // total cost of order
    let addServiceModal = $('#service-to-add');

    let selectedNailOption;         // option value current employee has selected
    let selectedPedicureOption;     // option value current employee has selected
    let productName;                // name of product
    let productCost;                // cost of product
    let lengthWithoutCost;          // length of selectedNailOption without "... $[cost here]" length
    let sliceLengthForCost;         // used in calculation of displaying only cost
    let numOfItemsCounter;          // counter to hold number of current selected items in checkout page

    

    $(document).on('click', '.service-group li', function() {

        // get string value of all the classes of selected li element, should either includes 'isNails' or 'isPedicure'
        let checkoutTab = $(this)[0].className;
        let elem;                                                   // html element to be created and put into order

        // get product name of selected option
        productName = $(this)[0].innerHTML;
        productName = productName.substr(0, productName.indexOf('</h6>'));
        productName = productName.substr(productName.indexOf('pName">') + 7);

        // get product cost of selected option
        productCost = $(this)[0].innerHTML;
        productCost = productCost.substr(0, productCost.indexOf('</span>'));
        productCost = productCost.substr(productCost.indexOf('pCost">') + 8);

        // determines if selected element is nails or pedicure to follow up with appropriate actions
        if (checkoutTab.includes('isNails')) {
            // newly created list item; to be entered into already existing list
            elem = `<li class="list-group-item d-flex justify-content-between lh-condensed">
                            <input type="hidden" class="cName" value="nails">
                            <h6 class="my-0 px-0 col-9 pName">${productName}</h6>
                            <span class="text-muted col-2 pl-0 pCost">$${productCost}</span>
                            <button type="button" class="btn btn-danger btn-sm deleteBtn col-1">x</button>
                        </li>`;

        } else if (checkoutTab.includes('isPedicure')) {
            // newly created list item; to be entered into already existing list
            elem = `<li class="list-group-item d-flex justify-content-between lh-condensed">
                            <input type="hidden" class="cName" value="pedicure">
                            <h6 class="my-0 px-0 col-9 pName">${productName}</h6>
                            <span class="text-muted col-2 pl-0 pCost">$${productCost}</span>
                            <button type="button" class="btn btn-danger btn-sm deleteBtn col-1">x</button>
                        </li>`;
        }

        // adds newly created list order item to the one before 'total'
        selectedOrders.find(' > li:nth-last-child(1)').before(elem);

        // close modal after adding a service to order
        addServiceModal.modal('toggle');

        // assign num items counter to current number of items selected in checkout page 
        numOfItemsCounter = numItems.text();

        // increase value of current num items counter when option is selected
        numOfItemsCounter++;

        // change text on checkout page to resemble new number of options in checkout page
        numItems.text(numOfItemsCounter);

        // if number of items is not empty, change 'Your cart (empty)' to 'Your cart'
        if (numOfItemsCounter > 0) {
            yourCartText.text('Your cart');
        }

        // function that calculates new total cost and updates checkout page total cost value
        addToTotalCost(totalCost, productCost);
    })

    // calculates new total cost to display on checkout page
    function addToTotalCost(tCost, pCost) {
        // int value of current total cost of selected options
        let t = parseFloat(tCost.text().substring(1, tCost.text().length));

        // int value of current product cost 
        let p = parseFloat(pCost);

        // change total cost on checkout page to include current service item
        totalCost.text('$' + (t + p).toFixed(2));
    }
})