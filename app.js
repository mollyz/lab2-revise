$(function() {
	var model = new DinnerModel();
	model.setNumberOfGuests(5);

	var sideNavView = new SideNavView($("#sideNavView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var detailView = new DetailView($("#detailView"), model);
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
	var PrepareDishView = new PrepareDishView($("#dinnerPreparationView"),model);
	//var topBarView = new topBarView($("#topBarView"),model);
});

function initialization(){
	$("#hover-div").show();
	$("#SecondPage").hide();
	$("#topBarView").hide();
	$("#dinnerOverviewView").hide();
	$("#dinnerPreparationView").hide();
}

