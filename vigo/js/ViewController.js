function ViewController () {

    var that = this;
    var viewIDs = [
                    "view-loading",
                    "view-landing",
                    "view-login",
                    "view-create-account",
                    "view-fridge-start",
                    "view-fridge-join",
                    "view-fridge-create",
                    "view-fridge",
                    "view-fridge-item-search",
                    "view-fridge-info",
                    "view-list",
                    "view-list-item-search",
                    "view-request",
                    "view-request-search",
                    "view-settings",
                    "view-settings-fridge",
                    "view-settings-permissions",
                    "view-scan",
                    "view-scan-confirm"
                ]

    function __addHashMark__(id) {
        return "#" + id;
    }

    // params:
    //  string view
    // View specifies the ID of an element, this function hides every other
    // element and shows that one.
    this.show = function (view) {
        viewIDs.forEach(function (id){
        $(__addHashMark__(id)).hide();
        });
        $(__addHashMark__(view)).show();
    }

    // params:
    //  None
    // Shows a random view.  Purely for testing.
    this.random = function () {
        var random = Math.random()*10;
        random = Math.ceil(random) % viewIDs.length
        that.show(viewIDs[random]);
    }

    // params:
    //  string item
    // Removes an item from both the UI and the fridge data structure
    // this.showAsDialogue = function () {
    //
    // }
    //
    // this.showAsItem = function () {
    //
    // }
};

var View = new ViewController();
