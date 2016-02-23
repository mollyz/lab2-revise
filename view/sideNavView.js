var SideNavView = function(container, model){
	this.model = model;
    this.container = container;
	this.numberOfGuests = container.find("#numberOfGuests");
	this.myMenu = container.find("#myMenu");

	var dishesInFullMenu = model.getFullMenu();
	
	this.numberOfGuests.html(model.getNumberOfGuests);
	this.myMenu.empty();

	var model = this.model;
    var myMenu = this.myMenu;
    var totalPrice = 0;


    var dishes = [];
    dishes.push(this.model.getSelectedDish('starter'));
    dishes.push(this.model.getSelectedDish('main dish'));
    dishes.push(this.model.getSelectedDish('dessert'));
    dishes.forEach(function(dishId) {
        if (dishId != null) {
            var dish = model.getDish(dishId);
            var priceForSingle = model.getPriceForDish(dish);
            var totalPriceForDish = priceForSingle * model.getNumberOfGuests();
            totalPrice += totalPriceForDish;

            var contentDiv = $("<div>");

            var dishName = dish.name;

            //Left aligned dish name
            var name = $("<span>");
            name.addClass("floatleft");
            name.html(dishName);
            contentDiv.append(name);

            //Right aligned dish cost
            var price = $("<span>");
            price.addClass("floatright");
            price.html(totalPriceForDish);
            

            contentDiv.append(price);

            contentDiv.append($("<br>"));

            myMenu.append(contentDiv);
        }
    });


    var line = $("<div>");
    line.addClass("menuLine");
    this.myMenu.append(line);


    var div = $("<div>");
    //we add the text-primary class to make it blue
    div.addClass("text-primary");

    div.addClass("floatright");
    div.html("SEK " + totalPrice);
    this.myMenu.append(div);
};
