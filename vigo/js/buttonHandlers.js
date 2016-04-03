var $fridgeInput = $('#fridge-input');
var $shoppingListInput = $('#shopping-list-input');
var $requestInput = $('#request-input');
var $notificationText = $('#notification-text');
var $scannerNotification = $('#scanner-notification')

//Tab Click Handler
function tabClick (e) {
    var dest = $(e.currentTarget).attr('dest');
    View.show(dest);
}
$('.nav-btn').on('click', tabClick);

//Add Item to Fridge Event Handler
function addToFridgeClick (e) {
    console.log('addToFridgeClick');
    Fridge.add($fridgeInput.val());
    View.show('view-fridge');
    $fridgeInput.val('')
}
$('#fridge-input-submit').on('click', addToFridgeClick);

//Add Item To Shopping List Event Handler
function addToListClick (e) {
    console.log('addToListClick');
    ShoppingList.add($shoppingListInput.val());
    View.show('view-list');
    $shoppingListInput.val('')
}
$('#shopping-list-input-submit').on('click', addToListClick);

//Add Item To Request List Event Handler
function addToRequestClick (e) {
    console.log('addToRequestClick')
    Request.add($requestInput.val());
    View.show('view-request');
    $requestInput.val('');
}
$('#request-input-submit').on('click', addToRequestClick);


//Fridge Button Handler And Helper Functions
function getParentName (target, selector) {
    return $(target).parents(selector).attr('name');
}

function showFullEmptyLow (target) {
    var $element = $(target).parents('.fridge-item');
    $element.children('.fridge-item-norm').show();
    $element.children('.fridge-item-menu').hide();
}

function showYesNoNotEmpty (target) {
    var $element = $(target).parents('.fridge-item');
    $element.children('.fridge-item-menu').show();
    $element.children('.fridge-item-norm').hide();
}

function fullClick (e) {
    $(e.currentTarget).addClass('active').siblings('.btn-fridge-low').removeClass('active');

}

function lowClick (e) {
    $(e.currentTarget).addClass('active').siblings('.btn-fridge-full').removeClass('active')
}

function emptyClick (e) {
    //switch to the sub-menu view
    showYesNoNotEmpty(e.currentTarget);
}

function yesClick (e) {
    //add to shopping list
    //delete
    var name = getParentName(e.currentTarget, '.fridge-item');
    ShoppingList.add(name);
    Fridge.remove(name);

}

function noClick (e) {
    //delete
    Fridge.remove(getParentName(e.currentTarget, '.fridge-item'));
}

function NotEmptyClick (e) {
    //switch to the item view
    showFullEmptyLow(e.currentTarget);
}




// Shopping List Button Handlers
function boughtItClick (e) {
    //remove from shopping list
    //add to fridge
    var name = getParentName(e.currentTarget, '.shopping-list-item');
    Fridge.add(name);
    ShoppingList.remove(name);
}

function deleteClickList (e) {
    //remove from shopping list
    ShoppingList.remove(getParentName(e.currentTarget, '.shopping-list-item'));
}



// Request Button Handlers
function addRequestToListClick (e) {
    console.log('addRequestToListClick');
    //add to shopping list
    //delete from requests
    var name = getParentName(e.currentTarget, '.request-item')
    ShoppingList.add(name)
    Request.remove(name)
}

function deleteClickRequest (e) {
    console.log('deleteClickRequest');
    //delete from requests
    Request.remove(getParentName(e.currentTarget, '.request-item'))
}


function notification () {
    console.log('fading');
    $scannerNotification.fadeIn(500, function () {
        setTimeout( function () {
            $scannerNotification.fadeOut(1000);
        }, 1000)
    });
}

function scannerToFridge (e) {
    $notificationText.text('Item added to Fridge')
    Fridge.add('Juice');
    notification();
}

function scannerToList (e) {
    $notificationText.text('Item added to List')
    ShoppingList.add('Juice');
    notification();
}

$('#scan-fridge-btn').on('click', scannerToFridge);
$('#scan-list-btn').on('click', scannerToList);
