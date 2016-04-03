/* Holds the fridge, shopping list, and user data.  This is one "fridge"
*  but goes by a different name in the implementation
*

*
*/

function DataManager (name) {

    var that = this;
    var fridgeItems = [];
    var shoppingList = [];
    var requestItems = [];
    var users = [{
        name: name,
        privilege: 0
    },{
        name: 'Claire',
        privilege: 0
    },{
        name: 'Stephanie',
        privilege: 1
    },{
        name: 'Emil',
        privilege: 0
    }];


    // params:
    //  string username - name of a user
    // checks the user list for the name in "user," returns its index, or -1 for
    // false
    var __checkUsers__ = function (username) {
    var location = -1;
    users.forEach(function(existingUser, index){
        if (username === existingUser.name) {
            location = index;
      }
    });
    return location;
    }

    var __checkFridge__ = function (name) {
      var location = -1;
      fridgeItems.forEach(function(item, index){
        if (name === item.name) {
          location = index;
        }
      });
      return location;
    }

    var __checkList__ = function (item){
    return shoppingList.indexOf(item)
    }

    var __checkRequests__ = function (item){
    return requestItems.indexOf(item)
    }

    // params:
    //  string username - Name of the user
    //  int privilege - Privilege level from 0-1
    // adds a user with this name and privilege level if it doens't already exist
    this.addUser = function (username, privilege) {
    if (__checkUsers__(username) === -1) {
        users.push({
            name: username,
            privilege: privilege
        });
    }
    }

    // params:
    //  string username - Name of the user
    //  int privilege - Privilege level from 0-1
    //  adds a user with this name and privilege level if it doens't already exist
    this.removeUser = function (username) {
        var index = __checkUsers__(username);
        if (index > -1) {
            users.splice(index, 1);
        }
    }

    // params:
    //  string user - Name of the user
    //  int privilege - Privilege level from 0-1
    // changes a user's privileges if they exist
    this.changePrivilege = function (username, privilege) {
        var index = __checkUsers__(username);
        if (index > -1) {
            users[index].privilege = privilege;
        }
        return -1;
    }

    this.checkPrivilege = function (username, privilege) {
        var index = __checkUsers__(username);
        if (index > -1) {
            return users[index].privilege;
        }
        return -1;
    }

    // Prints the list of users and their privileges
    this.printUsers = function () {
        users.forEach(function (user){
            console.log(user.name + " " + user.privilege);
        });
    }

    // params:
    //  string item
    // Adds Item to the fridge
    this.addFridgeItem = function (item) {
        if (__checkFridge__(item) === -1) {
            fridgeItems.push({
                name: item,
                quantity: 'full',
                details: ''
            });
        }
    }

    // params:
    //  string item
    // removes Item to the fridge if it is in the fridge
    this.removeFridgeItem = function (item) {
        var index = __checkFridge__(item);
        if (index > -1) {
            fridgeItems.splice(index, 1);
        }
    }

    // params:
    //  string item
    // returns the index of item in the fridge
    this.findFridgeItem = function (item) {
        return __checkFridge__(item);
    }

    // Returns the list of fridge items
    this.getFridge = function () {
        return fridgeItems;
    }

    // params:
    //  string item
    // Adds Item to the shopping list
    this.addListItem = function (item) {
        if (__checkList__(item) === -1) {
            shoppingList.push(item);
        }
        else {
            console.log(item + " is already in the list");
        }
    }

    // params:
    //  string item
    // removes Item to the shopping list if it is on the shopping list
    this.removeListItem = function (item) {
        var index = __checkList__(item);
        if (index > -1) {
            shoppingList.splice(index, 1);
        }
    }

    // params:
    //  string item
    // returns the index of item in the shopping list
    this.findListItem = function (item) {
        return __checkList__(item);
    }

    // return the shopping list
    this.getList = function () {
        return shoppingList;
    }

    // params:
    //  string item
    // Adds Item to the requests
    this.addRequest = function (item) {
        if (__checkRequests__(item) === -1) {
            requestItems.push(item);
        }
        else {
            console.log(item + " is already in requests");
        }
    }

    // params:
    //  string item
    // removes Item to the shopping list if it is on the shopping list
    this.removeRequest = function (item) {
        var index = __checkRequests__(item);
        if (index > -1) {
            requestItems.splice(index, 1);
        }
    }

    // params:
    //  string item
    // returns the index of item in the requests
    this.findRequest = function (item) {
        return __checkRequests__(item);
    }

    // return the Requests
    this.getRequests = function () {
        return requestItems;
    }

    // return the number of
    this.RequestCount = function () {
        return requestItems.length;
    }
}
