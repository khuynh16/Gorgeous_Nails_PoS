$(document).ready(function() {

    let selectedOrders = $('.selected-orders');         // list of selected orders on the right side
    let totalCost = $('.totalCost');                    // total cost of order
    let numItems = $('.cartNumItems');                  // displayed number of items in cart

    let deletedOptionCost;                              // string containing needed option cost when deleting option

    selectedOrders.on('click', '.deleteBtn', function() {
        // string value of service deleted: contains product name, product cost, and the 'x' button
        deletedOptionCost = $(this).parent().text().replace(/\s/g,'');

        // get substring of just the cost, but also somehow includes 'x' at the end; need to get rid of x
        deletedOptionCost = deletedOptionCost.substr(deletedOptionCost.indexOf('$') + 1, deletedOptionCost.length); 

        // removes last character, which is 'x'
        deletedOptionCost = deletedOptionCost.slice(0, -1);

        // delete deleted option cost from total displayed on checkout page; updates total as well
        // also updates total number of items in order
        deleteOptionFromList(totalCost, deletedOptionCost);

        // removes order item from order list
        $(this).parent().remove();
    })

    // calculates new total cost to display on checkout page after deleting deleted option cost
    function deleteOptionFromList(tCost, pCost) {
        // int value of current total cost of selected options
        let t = parseFloat(tCost.text().substring(1, tCost.text().length));

        // int value of current product cost 
        let p = parseFloat(pCost);

        // change total cost on checkout page to exclude deleted option cost
        totalCost.text('$' + (t - p).toFixed(2));

        // update total number of items counter by subtracting one (for the deleted option)
        numItems.text(parseInt(numItems.text()) - 1);
    }

})