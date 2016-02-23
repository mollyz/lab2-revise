$(function() {
	var model = new DinnerModel();
	model.setNumberOfGuests(3);

	var sideNavView = new SideNavView($("#sideNavView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var detailView = new DetailView($("#detailView"), model);
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
	var prepareDishView = new PrepareDishView($("#dinnerPreparationView"),model);
});

function initialization(){
	$("#hover-div").show();
	$("#sideNavView").hide();
	$("#searchArea").hide();
	$("#selectDishView").hide();
	$("#detailView").hide();
	$("#topBarView").hide();
	$("#dinnerOverviewView").hide();
	$("#dinnerPreparationView").hide();
}

