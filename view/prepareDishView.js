var PrepareDishView = function (container, model) {
	
	this.preparedinner = container.find("#preparedinner");


	var dishes = model.getFullMenu();

	var preparedinnerHtml = "",
		desp = "Description:"
	
	for(i=0; i< dishes.length; i++)
	{
		var dish = dishes[i];
				
		preparedinnerHtml += "<div class=\"panel panel-default\">"+
								"<div class=\"panel-body\">"+
									"<div class=\"col-md-12\">"+
										"<div class=\"col-md-3 thumb\">"+
											"<a class=\"thumbnail\">"+
											"<img src='images/"+dish.image+"'>"+
											"</a>"+
										"</div>"+
										"<div class=\"col-md-3\">"+
											"<h3>"+dish.name+"</h3>"+
											"<div class=\"col-md-12\">"+
												"<span>"+dish.description+ "</span>"+
											"</div>"+
										"</div>"+
										"<div class=\"col-md-6\">"+
											"<h3>"+desp+"</h3>"+
											"<span>"+dish.description + "</span>"+
										"</div>"+
									"</div>"+
								"</div>"+
							"</div>";
		
	}
	this.preparedinner.html(preparedinnerHtml);
}
