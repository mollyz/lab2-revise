var DetailView = function(container, model) {

    this.id = 1;
    this.container = container;
    this.model = model;
    this.oneDishName = container.find("#oneDishName");
    this.oneDishImage = container.find("#oneDishImage");
    this.oneDishDescription = container.find("#oneDishDescription");
    this.oneDishNumberOfGuest = container.find("#oneDishNumberOfGuest");
    this.oneDishIngredientsList = container.find("#oneDishIngredientsList");
    this.oneDishTotalPrice = container.find("#oneDishTotalPrice");

    var oneDish = model.getDish("100");
    var temp=model.getNumberOfGuests();
    console.log(temp);
    this.oneDishName.html(oneDish.name);
    this.oneDishImage.html("<img src=\"images/"+oneDish.image+"\">");
    this.oneDishDescription.html(oneDish.description);
    this.oneDishNumberOfGuest.html(temp);

     var oneDishIngredientsListHtml = "";
    var oneDishIngredientsListArray = oneDish.ingredients;

    for (key in oneDishIngredientsListArray) {
        oneDishIngredientsListHtml += "<div class=\"row\">"+ 
                                        "<div class=\"col-md-1\">"+
                                            oneDishIngredientsListArray[key].quantity+
                                        "</div>"+
                                        "<div class=\"col-md-1\">"+
                                            oneDishIngredientsListArray[key].unit+
                                        "</div>"+
                                        "<div class=\"col-md-8\">"+
                                            oneDishIngredientsListArray[key].name+
                                        "</div>"+
                                        "<div class=\"col-md-1\">"+
                                            "SEK"+
                                        "</div>"+
                                        "<div class=\"col-md-1\">"+
                                           oneDishIngredientsListArray[key].price+
                                        "</div>"+
                                    "</div><br/>";
    }
    
    this.oneDishIngredientsList.html(oneDishIngredientsListHtml);   

};