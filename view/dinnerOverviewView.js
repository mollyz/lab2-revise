var DinnerOverviewView = function (container, model) {
	
    this.topBarnumberOfGuest = container.find("#topBarnumberOfGuest");
	this.myDisheslist = container.find("#myDisheslist");
	this.dinnerOverviewtTotalPrice = container.find("#dinnerOverviewtTotalPrice");

	var myDisheslist = model.getAllDishes("starter");
    
    this.topBarnumberOfGuest.html(model.getNumberOfGuests);
    this.dinnerOverviewtTotalPrice.html(model.getTotalMenuPrice());
    
	var myDisheslistHtml = "";

	for (i = 0; i < myDishes.length; i++) { 
		myDisheslistHtml += "<div class=\"col-md-4\">"+
				            "<div class=\"col-md-12 col-xs-8 thumb\">"+
					            "<a class=\"thumbnail\">"+
						        	"<img src='images/"+ myDishes[i].image + "'>"+
					            "</a>"+
				            "</div>"+
					        "<div class=\"col-md-12 col-xs-8 thumb\">"+
					        	"<span class=\"input-group-addon\">" + myDishes[i].name + "</span>"+
					        "</div>"+
					        "<div class=\"col-md-12 col-xs-8 thumb\">"+
								        "<p class=\"parapadding\">"+model.getDishTotalPrice(myDishes[i].id)+" SEK</p>"+
							"</div>"+
						"</div>";
    }
	
	this.myDisheslist.html(myDisheslistHtml);
}
 