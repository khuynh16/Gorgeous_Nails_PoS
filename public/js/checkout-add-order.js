$(document).ready(function() {

    let addNailsOrderButton = $('#addNailsOrder');      // button of adding nail order
    let addPedicureOrderButton = $('#addPedicureOrder');
    let selectedOrders = $('.selected-orders');         // list of selected orders on the right side
    let nailsOptions = $('#nails');                     // option list of nails 
    let pedicureOptions = $('#pedicure');               // option list of pedicure
    let numItems = $('.cartNumItems');                  // total number of items in order 
    let yourCartText = $('.yourCart');                  // 'your cart' text on checkout page
    let totalCost = $('.totalCost');                    // total cost of order

    let selectedNailOption;         // option value current employee has selected
    let selectedPedicureOption;     // option value current employee has selected
    let productName;                // name of product
    let productCost;                // cost of product
    let lengthWithoutCost;          // length of selectedNailOption without "... $[cost here]" length
    let sliceLengthForCost;         // used in calculation of displaying only cost
    let numOfItemsCounter;          // counter to hold number of current selected items in checkout page

    // when the add nail order button is clicked
    addNailsOrderButton.on('click', function() {
        // get text value of selected option
        selectedNailOption = $( '#nails option:selected' ).text();

        // get just product name from option
        productName = selectedNailOption.substr(0, selectedNailOption.indexOf('...') - 1);

        // if productName is the first default value, do nothing; else, do all computations below
        if (productName == 'Choose') {
            return;
        } else {
            // get just cost value from option (should be length of whole string except $[cost here])
            lengthWithoutCost = selectedNailOption.substr(0, selectedNailOption.indexOf('$')).length;

            // should be the length to use in slice() function to extract just the $[cost] text
            sliceLengthForCost = selectedNailOption.length - lengthWithoutCost;

            // text of just the product cost
            productCost = selectedNailOption.slice(selectedNailOption.length - sliceLengthForCost);

            // newly created list item; to be entered into already existing list
            let elem = `<li class="list-group-item d-flex justify-content-between lh-condensed">
                            <input type="hidden" class="cName" value="nails">
                            <h6 class="my-0 px-0 col-9 pName">${productName}</h6>
                            <span class="text-muted col-2 pl-0 pCost">${productCost}</span>
                            <button type="button" class="btn btn-danger btn-sm deleteBtn col-1">x</button>
                        </li>`;

            // adds newly created list order item to the one before 'total'
            selectedOrders.find(' > li:nth-last-child(1)').before(elem);

            // returns bootstrap options to original choice
            // chooses option with class 'default' and refreshes to that option after button is clicked
            nailsOptions.val('default');

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
        }

        // function that calculates new total cost and updates checkout page total cost value
        addToTotalCost(totalCost, productCost);
    })

    // when the add pedicure order button is clicked
    addPedicureOrderButton.on('click', function() {
        // get text value of selected option
        selectedPedicureOption = $( '#pedicure option:selected' ).text();

        // get just product name from option
        productName = selectedPedicureOption.substr(0, selectedPedicureOption.indexOf('...') - 1);

        // if productName is the first default value, do nothing; else, do all computations below
        if (productName === 'Choose') {
            return;
        } else {
            // get just cost value from option (should be length of whole string except $[cost here])
            lengthWithoutCost = selectedPedicureOption.substr(0, selectedPedicureOption.indexOf('$')).length;

            // should be the length to use in slice() function to extract just the $[cost] text
            sliceLengthForCost = selectedPedicureOption.length - lengthWithoutCost;

            // text of just the product cost
            productCost = selectedPedicureOption.slice(selectedPedicureOption.length - sliceLengthForCost);

            // newly created list item; to be entered into already existing list
            let elem = `<li class="list-group-item d-flex justify-content-between lh-condensed">
                            <input type="hidden" class="cName" value="pedicure">
                            <h6 class="my-0 px-0 col-9 pName">${productName}</h6>
                            <span class="text-muted col-2 pl-0 pCost">${productCost}</span>
                            <button type="button" class="btn btn-danger btn-sm deleteBtn col-1">x</button>
                        </li>`;

            // adds newly created list order item to the one before 'total'
            selectedOrders.find(' > li:nth-last-child(1)').before(elem);

            // returns bootstrap options to original choice
            // chooses option with class 'default' and refreshes to that option after button is clicked
            pedicureOptions.val('default');

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
        }

        // function that calculates new total cost and updates checkout page total cost value
        addToTotalCost(totalCost, productCost);
    })

    // calculates new total cost to display on checkout page
    function addToTotalCost(tCost, pCost) {
        // int value of current total cost of selected options
        let t = parseFloat(tCost.text().substring(1, tCost.text().length));

        // int value of current product cost 
        let p = parseFloat(pCost.substring(1, pCost.length));

        // change total cost on checkout page to include current service item
        totalCost.text('$' + (t + p).toFixed(2));
    }
})