/*OK*/
function createnew() {
  $("#hover-div").hide();
  $("#sideNavView").show();
  $("#searchArea").show();
  $("#selectDishView").show();
}

/*ok*/
function seeDetail(){
	$("#searchArea").hide();
  $("#selectDishView").hide();
	$("#detailView").show();
} 

/*ok*/
function backtoselect() {
  $("#detailView").hide();
  $("#searchArea").show();
  $("#selectDishView").show();
}

/*ok*/
function confirmdinner() {
	$("#sideNavView").hide();
  $("#searchArea").hide();
 	$("#selectDishView").hide();
 	$("#topBarView").show();
	$("#dinnerOverviewView").show();	
}	

/*ok*/
function confirmdish() {
  $("#detailView").hide();
  $("#searchArea").show();
  $("#selectDishView").show();
}
/*ok*/
function editmenu() {	
	$("#topBarView").hide();
	$("#dinnerOverviewView").hide();
	$("#dinnerPreparationView").hide();
  $("#sideNavView").show();
  $("#searchArea").show();
  $("#selectDishView").show();
}

/*ok*/
function finalresult() {
  $("#DinnerPreparation").show();
  $("#topBarView").show();
  $("#dinnerOverviewView").hide();
}