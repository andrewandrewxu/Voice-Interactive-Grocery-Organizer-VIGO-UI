function RecManager () {

    var that = this;
    var itemHTML = $("#recommendation-item-html").html();

    // $.get( "//localhost:8888/vigo/assets/recommendation.html", function (data) {
    //   itemHTML = data;
    //   console.log( "Recommendation html loaded." );
    // });

    var foodWords = [
"Asparagus",
"Apples",
"Avacado",
"Alfalfa",
"Acorn squash",
"Almond",
"Arugala",
"Artichoke",
"Applesauce",
"Asian noodles",
"Antelope",
"Ahi tuna",
"Albacore tuna",
"Apple juice",
"Avocado roll",
"Bruscetta",
"Bacon",
"Black beans",
"Bagels",
"Baked beans",
"BBQ",
"Bison",
"Barley",
"Beer",
"Bisque",
"Bluefish",
"Bread",
"Broccoli",
"Buritto",
"Babaganoosh",
"Cabbage",
"Cake",
"Carrots",
"Carne asada",
"Celery",
"Cheese",
"Chicken",
"Catfish",
"Chips",
"Chocolate",
"Chowder",
"Clams",
"Coffee",
"Cookies",
"Corn",
"Cupcakes",
"Crab",
"Curry",
"Cereal",
"Chimichanga",
"Dates",
"Dips",
"Duck",
"Dumplings",
"Donuts",
"Eggs",
"Enchilada",
"Eggrolls",
"English muffins",
"Edimame",
"Eel sushi",
"Fajita",
"Falafel",
"Fish",
"Franks",
"Fondu",
"French toast",
"French dip",
"Garlic",
"Ginger",
"Gnocchi",
"Goose",
"Granola",
"Grapes",
"Green beans",
"Guancamole",
"Gumbo",
"Grits",
"Graham crackers",
"Ham",
"Halibut",
"Hamburger",
"Honey",
"Huenos rancheros",
"Hash browns",
"Hot dogs",
"Haiku roll",
"Hummus",
"Ice cream",
"Irish stew",
"Indian food",
"Italian bread",
"Jam",
"Jambalaya",
"Jelly",
"Jerky",
"Jalapeño",
"Kale",
"Kabobs",
"Ketchup",
"Kiwi",
"Kidney beans",
"Kingfish",
"Lobster",
"Lamb",
"Linguine",
"Lasagna",
"Meatballs",
"Moose",
"Milk",
"Milkshake",
"Noodles",
"Ostrich",
"Pizza",
"Pepperoni",
"Porter",
"Pancakes",
"Quesadilla",
"Quiche",
"Reuben",
"Spinach",
"Spaghetti",
"Tater tots",
"Toast",
"Venison",
"Waffles",
"Wine",
"Walnuts",
"Yogurt",
"Ziti",
"Zucchini"
]

    function __addHashMark__ (id) {
        return "#" + id;
    }

    function recommendationClick (e) {
        //set input val to the target's name
        //clear Recommendations
        var $target = $(e.currentTarget);
        $target.parents('.search-panel').find('input.search-input').first().val($target.attr('name'));
        that.delete();
    }

    function inputKeyUp(e) {
        var $target = $(e.currentTarget);
        var value = $($target).val();

        that.delete();

        if (value !== '') {
            that.populate($($target).val(), $target.parents('.search-panel').find('.recoms-list').attr('id'));
        }

    }

    function __addUIRec__ (food, target) {
        var newItem = $(document.createElement('div'));

        //Add the base HTML for a fridge item
        newItem.addClass('recommendation')
            .attr('name', food)
            .html(itemHTML);

        //Add the item name to the text
        newItem.find('.name')
            .text(food);

        //Append it to the fridge
        $(__addHashMark__(target)).prepend(newItem);

        //Attach button Handlers to recommendations
        newItem.on('click', recommendationClick);
    }

    // Params
    //  string text
    // Teturns a list of the food words that contain "text"
    this.get = function (text) {
        return foodWords.filter( function (word) {
                return word.includes(text);
            })
            .slice(0,10);
    }

    this.populate = function (text, target) {
        that.get(text).forEach( function(food) {
            __addUIRec__(food, target);
        });
    }

    this.delete = function () {
        $('.recommendation').remove();
    }

    $('#fridge-input').bind('keyup', inputKeyUp)
    $('#shopping-list-input').bind('keyup', inputKeyUp)
    $('#request-input').bind('keyup', inputKeyUp)
}

Rec = new RecManager()
