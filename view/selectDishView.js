var SelectDishView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.container = container;
    this.model = model;
	this.allDishes = container.find("#allDishes");
	
	var allDishes = model.getAllDishes("starter");

	var allDishesHtml = "";

	for (i = 0; i < allDishes.length; i++) { 
		allDishesHtml += "<div class='floating-box' onclick='seeDetail();'>"+
				            "<div>"+
					            
						        	"<img src='images/"+ allDishes[i].image + "'>"+
					            
				            
					        	"<span class='input-group-addon'>" + allDishes[i].name + "</span>"+
					        
								        "<p class='parapadding'>"+allDishes[i].description+"</p>"+
							"</div>"+
						"</div>";
    }
	
	this.allDishes.html(allDishesHtml);
}