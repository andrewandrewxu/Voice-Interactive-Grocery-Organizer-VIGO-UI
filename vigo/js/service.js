/* Controls changes to the UI.  Operates between the UI and the Data structure.
*
* All functions take strings as inputs.  Event handlers that call this are
* responsible for parsing out the name of the item being removed
*/


//Temporary fridge assignment.  Should be assigned by login.
var Data = new DataManager('Claire');

function FridgeManager () {

    var itemHTML = $("#fridge-item-html").html();

    // $.get( "//localhost:8888/vigo/assets/fridgeitem.html", function (data) {
    //   itemHTML = data;
    //   console.log( "Fridge item html loaded." );
    // });

    // params:
    //  string item
    // Adds Item to the UI fridge list
    var __addToUI__ = function (item) {
        if (Data.findFridgeItem(item) === -1){
            var newItem = $(document.createElement('div'));

            //Add the base HTML for a fridge item
            newItem.addClass('fridge-item')
                .addClass('fridge-item-style')
                .attr('name', item)
                .html(itemHTML);

            //Add the item name to the text
            newItem.find('.name')
                .text(item);

            newItem.find('.btn-fridge-full').first().addClass('active');

            //Append it to the fridge
            $("#fridge").prepend(newItem);

            //Hide the "add to shopping list?" menu
            newItem.find('.fridge-item-menu').hide();

            //Attach button Handlers
            newItem.find('.btn-fridge-full').first().on('click', fullClick);
            newItem.find('.btn-fridge-low').first().on('click', lowClick);
            newItem.find('.btn-fridge-empty').first().on('click', emptyClick);
            newItem.find('.btn-fridge-yes').first().on('click', yesClick);
            newItem.find('.btn-fridge-no').first().on('click', noClick);
            newItem.find('.btn-fridge-not-empty').first().on('click', NotEmptyClick);
        }
        //else it's already in the UI
    }

    // params:
    //  string item
    // Adds Item to the fridge data structure
    var __addToFridge__ = function (item) {
        Data.addFridgeItem(item);
    }

    // params:
    //  string item
    // Removes an item from the fridge Data structure
    var __removeFromFridge__ = function (item) {
        //Data structure
        Data.removeFridgeItem(item);
    }

    // params:
    //  string item
    // Removes an item from the UI
    var __removeFromUI__ = function (item) {
        $('.fridge-item[name="' + item + '"]').remove();
    }

    // params:
    //  string item
    // Adds an item to the UI and Data
    this.add = function (item) {
        __addToUI__(item);
        __addToFridge__(item);
    }

    // params:
    //  string item
    // Removes an item from the UI and Data
    this.remove = function (item) {
        __removeFromFridge__(item);
        __removeFromUI__(item);
    }

    // reads the fridge items from the Data object and adds them to the UI
    this.init = function () {
        data.getFridge().forEach(function (item) {
            __addItemToUI__(item.name);
        });
    }
}

var Fridge = new FridgeManager();

ShoppingListManager = function () {

    var itemHTML = $("#list-item-html").html();

    // $.get( "//localhost:8888/vigo/assets/listitem.html", function (data) {
    //   itemHTML = data;
    //   console.log( "shopping list item html loaded." );
    // });

    // params:
    //  string item
    // Adds Item to the UI shopping list
    var __addToUI__ = function (item) {
        if (Data.findListItem(item) === -1){
            console.log('adding shopping list item');
            var newItem = $(document.createElement('div'));

            //Add the base HTML for a shopping list item
            newItem.addClass('shopping-list-item')
                .addClass('list-item-style')
                .attr('name', item)
                .html(itemHTML);

            //Add the item name to the text
            newItem.find('.name')
                .text(item);

            //Append it to the shopping list
            $("#shopping-list").prepend(newItem);

            //Add Button Handlers
            newItem.find('.btn-bought-it').first().on('click', boughtItClick);
            newItem.find('.btn-delete').first().on('click', deleteClickList);
        }
        //else its already in the UI
    }

    // params:
    //  string item
    // Adds item to the shopping list in Data
    var __addToList__ = function (item) {
        Data.addListItem(item);
    }

    // params:
    //  string item
    // Removes item from the fridge Data structure
    var __removeFromList__ = function (item) {
        //Data structure
        Data.removeListItem(item);
    }

    // params:
    //  string item
    // Removes an item from the UI Shopping list
    var __removeFromUI__ = function (item) {
        $('.shopping-list-item[name="' + item + '"]').remove();
    }

    // params:
    //  string item
    // Adds an item to the UI and Data
    this.add = function (item) {
        __addToUI__(item);
        __addToList__(item);
    }

    // params:
    //  string item
    // Removes an item from the UI and Data
    this.remove = function (item) {
        __removeFromList__(item);
        __removeFromUI__(item);
    }

    // reads the fridge items from Data and adds them to the UI
    this.init = function () {
        Data.getList().forEach(function (item) {
            __addToUI__(item);
        });
    }
}

var ShoppingList = new ShoppingListManager();


RequestManager = function () {

    var itemHTML = $("#request-item-html").html();

    // $.get( "//localhost:8888/vigo/assets/requestitem.html", function (data) {
    //   itemHTML = data;
    //   console.log( "request list item html loaded." );
    // });

    var $count = $('#request-count');

    var __setCount__ = function () {
        $count.text(Data.getRequests().length);
    }

    // params:
    //  string item
    // Adds Item to the UI request list
    var __addToUI__ = function (item) {
        if (Data.findRequest(item) === -1){
            var newItem = $(document.createElement('div'));

            //Add the base HTML for a request list item
            newItem.addClass('request-item')
                .addClass('request-item-style')
                .attr('name', item)
                .html(itemHTML);

            //Add the item name to the text
            newItem.find('.name')
                .text(item);

            //Append it to the shopping list
            $("#request-list").prepend(newItem);

            //Add Button Handlers

            //TODO: UNCOMMENT THESE LINES!!!!
            newItem.find('.btn-add-to-list').first().on('click', addRequestToListClick);
            newItem.find('.btn-delete').first().on('click', deleteClickRequest);
        }
        //else it's already in the UI
    }

    // params:
    //  string item
    // Adds item to the shopping list in Data
    var __addToRequests__ = function (item) {
        Data.addRequest(item);
    }

    // params:
    //  string item
    // Removes item from the fridge Data structure
    var __removeFromRequests__ = function (item) {
        //Data structure
        Data.removeRequest(item);
    }

    // params:
    //  string item
    // Removes an item from the UI Shopping list
    var __removeFromUI__ = function (item) {
        $('.request-item[name="' + item + '"]').remove();
    }

    // params:
    //  string item
    // Adds an item to the UI and Data
    this.add = function (item) {
        __addToUI__(item);
        __addToRequests__(item);
        __setCount__();
    }

    // params:
    //  string item
    // Removes an item from the UI and Data
    this.remove = function (item) {
        __removeFromRequests__(item);
        __removeFromUI__(item);
        __setCount__();
    }

    // reads the fridge items from Data and adds them to the UI
    this.init = function () {
        Data.getRequests().forEach(function (item) {
            __addToUI__(item);
        });
    }
}

var Request = new RequestManager();
